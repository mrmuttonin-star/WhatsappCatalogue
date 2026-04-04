from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import razorpay
import hmac
import hashlib
import requests
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://whatsappcatalogue.mrmutton.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


BASE_DIR = Path(__file__).resolve().parent


GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycby4GLkhPuUFJ52rSiHdwEt6BVuxm0NGodJn3CQKfwPuD2FOZi5G9RpW-l1QkTn22XnvVg/exec"

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
# mongo_url = os.environ['MONGO_URL']
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# Razorpay client (Test Mode)
razorpay_key_id = os.environ.get('RAZORPAY_KEY_ID', 'rzp_test_dummy')
razorpay_key_secret = os.environ.get('RAZORPAY_KEY_SECRET', 'dummy_secret')
razorpay_client = razorpay.Client(auth=(razorpay_key_id, razorpay_key_secret))
print("RAZORPAY KEY:", razorpay_key_id)



app.mount("/images", StaticFiles(directory=BASE_DIR / "images"), name="images")
# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ==================== Models ====================

class Product(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    description: str
    price: float
    original_price: Optional[float] = None
    image: str
    category: str

class Addon(BaseModel):
    name: str
    price: float


class CartItem(BaseModel):
    product_id: str
    name: str
    price: float
    quantity: int
    image: str
    addons: Optional[List[Addon]] = []
    


class OrderCreate(BaseModel):
    customer_name: str
    customer_phone: str
    customer_address: str
    items: List[CartItem]
    items_subtotal: float
    packaging_charge: float = 15.0
    delivery_charge: float = 0.0
    gst_amount: float
    total_amount: float
    payment_method: str  # "COD" or "ONLINE"
    delivery_location: Optional[dict] = None
    scheduled_date: Optional[str] = None
    meal_type: Optional[str] = None
    time_slot: Optional[str] = None
    razorpay_order_id: Optional[str] = None
    razorpay_payment_id: Optional[str] = None
    razorpay_signature: Optional[str] = None


class Order(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    customer_name: str
    customer_phone: str
    customer_address: str
    items: List[CartItem]
    items_subtotal: float
    packaging_charge: float = 15.0
    delivery_charge: float = 0.0
    gst_amount: float
    total_amount: float
    payment_method: str
    payment_status: str  # "PENDING", "PAID", "COD"
    order_status: str = "CONFIRMED"  # "CONFIRMED", "PROCESSING", "DELIVERED"
    delivery_location: Optional[dict] = None
    scheduled_date: Optional[str] = None
    meal_type: Optional[str] = None
    time_slot: Optional[str] = None
    razorpay_order_id: Optional[str] = None
    razorpay_payment_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class RazorpayOrderCreate(BaseModel):
    amount: float  # In rupees


class RazorpayOrderResponse(BaseModel):
    id: str
    amount: int
    currency: str
    key_id: str


# ==================== Sample Products Data ====================

SAMPLE_PRODUCTS = [
    # Mutton Handi
    {
        "id": "mutton-250",
        "name": "Ahuna Mutton (250g)",
        "description": "Mutton 3 Pieces",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/ahuna-mutton.png",
        "category": "Mutton Handi"
    },
    {
        "id": "mutton-1000",
        "name": "Ahuna Mutton (1000g)",
        "description": "Mutton 12 Pieces",
        "price": 1499.00,
        "original_price": 1599.00,
        "image": "http://api.mrmutton.com/images/ahuna-mutton.png",
        "category": "Mutton Handi"
    },
    {
        "id": "mutton-500",
        "name": "Ahuna Mutton (500g)",
        "description": "Mutton 6 Pieces",
        "price": 799.00,
        "original_price": 899.00,
        "image": "http://api.mrmutton.com/images/ahuna-mutton.png",
        "category": "Mutton Handi"
    },
    # Chicken Handi
    {
        "id": "chicken-1000",
        "name": "Ahuna Chicken (1000g)",
        "description": "12 Piece - Large cum Medium",
        "price": 799.00,
        "original_price": 899.00,
        "image": "http://api.mrmutton.com/images/Ahuna-Chicken-Handi.png",
        "category": "Chicken Handi"
    },
    {
        "id": "chicken-500",
        "name": "Ahuna Chicken (500g)",
        "description": "6 Piece Chicken - Large cum Medium",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/Ahuna-Chicken-Handi.png",
        "category": "Chicken Handi"
    },
    {
        "id": "chicken-thali",
        "name": "Chicken Thali",
        "description": "4 Piece Chicken and Rice",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/Ahuna-Chicken-Handi.png",
        "category": "Chicken Handi"
    },
    # Add-ons
    {
        "id": "rice-plate",
        "name": "Rice - Full Plate",
        "description": "Basmati Steam Rice",
        "price": 150.00,
        "original_price": 200.00,
        "image": "http://api.mrmutton.com/Steamed-Basmati-Rice.png",
        "category": "Add-ons"
    },
    {
        "id": "tawa-roti",
        "name": "Tawa Roti (₹20 Per Piece)",
        "description": "Fresh Tawa Roti",
        "price": 20.00,
        "original_price": 30.00,
        "image": "http://api.mrmutton.com/images/Tawa-Roti.png",
        "category": "Add-ons"
    },
    # Combo
    {
        "id": "combo-mutton-chicken",
        "name": "Ahuna Mutton & Chicken Handi",
        "description": "Mutton 4 Pieces + Chicken 4 Pieces",
        "price": 1099.00,
        "original_price": 1199.00,
        "image": "http://api.mrmutton.com/images/Combo.png",
        "category": "Combo"
    },
    {
        "id": "combo-mutton-chicken-large",
        "name": "Ahuna Chicken & Mutton Handi",
        "description": "Chicken 6 Pieces + Mutton 6 Pieces",
        "price": 1599.00,
        "original_price": 1799.00,
        "image": "http://api.mrmutton.com/images/Combo.png",
        "category": "Combo"
    },

    # Fish
    {
        "id": "fish-curry",
        "name": "Fish Curry(Katla/Rohu)",
        "description": "4 Pieces Grilled ans Cooked in Mustard Masala Gravy",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/Fish-Curry.png",
        "category": "Fish"
    },
    {
        "id": "prawn-curry",
        "name": "Prawn (ITC) Curry",
        "description": "15 Medium Pieces Grilled and Cooked in Sabut Garam Masala",
        "price": 799.00,
        "original_price": 999.00,
        "image": "http://api.mrmutton.com/images/Prawn-Curry.png",
        "category": "Fish"
    },

    # Veg
    {
        "id": "kadhai-paneer-half",
        "name": "Kadhai Paneer (Half)",
        "description": "Serves 1-2 Person.(200gm Amul Paneer)",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/Kadhai-Paneer.png",
        "category": "Veg"
    },
    {
        "id": "kadhai-paneer-full",
        "name": "Kadhai Paneer (Full)",
        "description": "Serves 3-4 Person.(400g Amul Paneer)",
        "price": 799.00,
        "original_price": 899.00,
        "image": "http://api.mrmutton.com/images/Kadhai-Paneer.png",
        "category": "Veg"
    },

    # Extras
    {
        "id": "dhaniya-chutney",
        "name": "Dhaniya Chutney",
        "description": "Dhaniya Base, Garlic Chilly, Ginger, Tomato & Salt",
        "price": 69.00,
        "original_price": 89.00,
        "image": "http://api.mrmutton.com/images/Chutney-Dhaniya.png",
        "category": "Extras"
    },
    {
        "id": "masala-raita",
        "name": "Masala Raita",
        "description": "Smooth, Spiced, Refreshing Curd Side -Serves 1 Person",
        "price": 69.00,
        "original_price": 89.00,
        "image": "http://api.mrmutton.com/images/Masala-Raita.png",
        "category": "Extras"
    },
    {
        "id": "boondi-raita",
        "name": "Boondi Raita",
        "description": "Curd with Crispy Haldiram Pearls- Serves 1 Person",
        "price": 69.00,
        "original_price": 89.00,
        "image": "http://api.mrmutton.com/images/Boondi-Raita.png",
        "category": "Extras"
    },
    {
        "id": "onion-raita",
        "name": "Onion Raita",
        "description": "Curd with Crunchy Chopped Onions",
        "price": 69.00,
        "original_price": 89.00,
        "image": "http://api.mrmutton.com/images/Onion-Raita.png",
        "category": "Extras"
    },
    {
        "id": "gulab-jamun-4-pieces",
        "name": "Gulab Jamun (4 Pieces)",
        "description": "Family Pack",
        "price": 199.00,
        "original_price": 249.00,
        "image": "http://api.mrmutton.com/images/gulab-jamun4.jpeg",
        "category": "Extras"
    },
    {
        "id": "gulab-jamun-1-piece",
        "name": "Gulab Jamun(1 Piece)",
        "description": "Gulab Jamun",
        "price": 69.00,
        "original_price": 89.00,
        "image": "http://api.mrmutton.com/images/gulab-jamun1.jpeg",
        "category": "Extras"
    },
    

    # Thalis
    {
        "id": "mutton-thali",
        "name": "Mutton Thali",
        "description": "Ahuna Mutton(3 Pcs), Steamed Basmati Rice, Lachha Onion, Lemon Slice",
        "price": 549.00,
        "original_price": 649.00,
        "image": "http://api.mrmutton.com/images/Mutton-Thali.png",
        "category": "Thali"
    },
    {
        "id": "chicken-thali",
        "name": "Chicken Thali",
        "description": "4 Piece Chicken and Rice",
        "price": 499.00,
        "original_price": 599.00,
        "image": "http://api.mrmutton.com/images/Chicken-Thali.png",
        "category": "Thali"
    },
    {
        "id": "fish-thali",
        "name": "Fish Thali",
        "description": "3 Piece Fish, Steamed Basmati Rice, Lachha Onion, Lemon Slice",
        "price": 549.00,
        "original_price": 649.00,
        "image": "http://api.mrmutton.com/images/Fish-Thali.png",
        "category": "Thali"
    },

    # Snacks
    # {
    #     "id": "combo-mutton-chicken",
    #     "name": "Chicken Seekh Kebab",
    #     "description": "A wholesome Serving of grilled Chicken seekh kebabs, crafted from tender ground chicken for lean protein and seasoned for balanced flavour.Paired with vitamin-rich onions and a fresh, herb-packed green chutney to add natural goodness.(7 Pieces)",
    #     "price": 499.00,
    #     "original_price": 599.00,
    #     "image": "http://localhost:8000/images/Chicken-Seekh-Kebab.png",
    #     "category": "Snacks"
    # },
    {
        "id": "mutton-seekh-kebab",
        "name": "Mutton Seekh Kebab",
        "description": "A wholesome Serving of grilled Mutton seekh kebabs, crafted from tender ground Mutton for lean protein and seasoned for balanced flavour.Paired with vitamin-rich onions and a fresh, herb-packed green chutney to add natural goodness.(4 Pieces)",
        "price": 399.00,
        "original_price": 499.00,
        "image": "http://api.mrmutton.com/images/Mutton-Seekh-Kebab.png",
        "category": "Snacks"
    },
    {
        "id": "chicken-seekh-kebab",
        "name": "Chicken Seekh Kebab",
        "description": "A wholesome Serving of grilled Chicken seekh kebabs, crafted from tender ground chicken for lean protein and seasoned for balanced flavour.Paired with vitamin-rich onions and a fresh, herb-packed green chutney to add natural goodness.(4) Pieces)",
        "price": 299.00,
        "original_price": 399.00,
        "image": "http://api.mrmutton.com/images/Chicken-Seekh-Kebab.png",
        "category": "Snacks"
    },
    # {
    #     "id": "combo-mutton-chicken",
    #     "name": "Mutton Seekh Kebab",
    #     "description": "A wholesome Serving of grilled Mutton seekh kebabs, crafted from tender ground Mutton for lean protein and seasoned for balanced flavour.Paired with vitamin-rich onions and a fresh, herb-packed green chutney to add natural goodness.(7 Pieces)",
    #     "price": 699.00,
    #     "original_price": 799.00,
    #     "image": "https://images.unsplash.com/photo-1727403851978-46fd1fd82d9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHxtdXR0b24lMjBoYW5kaSUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc3Mjk2NDk0N3ww&ixlib=rb-4.1.0&q=85",
    #     "category": "Snacks"
    # },
    {
        "id": "mutton-kaleji",
        "name": "Mutton Kaleji",
        "description": "6 Pieces of Mutton Kaleji",
        "price": 399.00,
        "original_price": 499.00,
        "image": "http://api.mrmutton.com/images/Mutton-Kaleji.png",
        "category": "Snacks"
    },
]


# ==================== API Routes ====================

@api_router.get("/")
async def root():
    return {"message": "WhatsApp Catalogue API"}


@api_router.get("/products", response_model=List[Product])
async def get_products():
    """Get all products"""
    return SAMPLE_PRODUCTS


@api_router.post("/razorpay/create-order", response_model=RazorpayOrderResponse)
async def create_razorpay_order(order_data: RazorpayOrderCreate):
    """Create Razorpay order for online payment"""
    try:
        # amount_in_paise = int(round(order_data.amount * 100))
        amount_in_paise = int(order_data.amount)
        razorpay_order = razorpay_client.order.create({
            "amount": amount_in_paise,
            "currency": "INR",
            "payment_capture": 1
        })
        
        return {
            "id": razorpay_order["id"],
            "amount": razorpay_order["amount"],
            "currency": razorpay_order["currency"],
            "key_id": razorpay_key_id
        }
    except Exception as e:
        logging.error(f"Razorpay order creation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to create payment order: {str(e)}")


@api_router.post("/orders", response_model=Order)
async def create_order(order_data: OrderCreate):
    """Create new order"""
    try:
        print("PAYMENT METHOD:", order_data.payment_method)
        print("FULL DATA:", order_data)
        # Verify Razorpay payment if online payment
        if order_data.payment_method == "ONLINE":
            if not order_data.razorpay_payment_id or not order_data.razorpay_signature:
                raise HTTPException(status_code=400, detail="Payment verification data missing")
            
            # Verify signature
            params_dict = {
                'razorpay_order_id': order_data.razorpay_order_id,
                'razorpay_payment_id': order_data.razorpay_payment_id,
                'razorpay_signature': order_data.razorpay_signature
            }

            try:
                razorpay_client.utility.verify_payment_signature(params_dict)
            except:
                raise HTTPException(status_code=400, detail="Payment verification failed")
            
            payment_status = "PAID"
        else:
            payment_status = "Token PAID"
        
        # Create order object
        order_dict = order_data.model_dump()
        order_obj = Order(
            **order_dict,
            payment_status=payment_status
        )
        
        # ✅ Maps link generate karo
        address_encoded = urllib.parse.quote(order_obj.customer_address)
        google_maps_link = f"https://www.google.com/maps/search/?api=1&query={address_encoded}"
        # # Save to MongoDB
        # doc = order_obj.model_dump()
        # doc['created_at'] = doc['created_at'].isoformat()
        
        # await db.orders.insert_one(doc)

        # Send order to Google Sheet
        def format_items(items):
            formatted = ""
            for item in items:
                addons_text = ""
                if item.addons:
                    addons_text = " (Add-ons: " + ", ".join(
                        [f"{a.name} ₹{a.price}" for a in item.addons]
                ) + ")"

                formatted += f"{item.name} x{item.quantity} = ₹{item.price * item.quantity}{addons_text}\n"

            return formatted

        sheet_data = {
            "order_id": order_obj.id,
            "customer_name": order_obj.customer_name,
            "phone": order_obj.customer_phone,
            "address": order_obj.customer_address,
            "location_link": google_maps_link,
            "items": format_items(order_obj.items),
            "schedule_date": order_obj.scheduled_date or "",
            "meal_type": order_obj.meal_type or "",
            "time_slot": order_obj.time_slot or "",
            "amount": order_obj.total_amount,
            "payment_method": order_obj.payment_method,
            "payment_status": payment_status,
            "time": order_obj.created_at.isoformat()
        }

        sheet_data["location_link"] = google_maps_link

        try:
            print("📤 Sending data to Google Sheet...")
            print(sheet_data)
            print("FINAL SHEET DATA 👉", sheet_data)

            response = requests.post(GOOGLE_SHEET_WEBHOOK, json=sheet_data)

            print("✅ Response status:", response.status_code)
            print("✅ Response text:", response.text)

        except Exception as e:
            print("❌ Google Sheet Error:", str(e))
        
        return order_obj
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Order creation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to create order: {str(e)}")


@api_router.get("/orders", response_model=List[Order])
async def get_orders():
    """Get all orders"""
    orders = await db.orders.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for order in orders:
        if isinstance(order.get('created_at'), str):
            order['created_at'] = datetime.fromisoformat(order['created_at'])
    
    return orders


@api_router.get("/orders/{order_id}", response_model=Order)
async def get_order(order_id: str):
    """Get order by ID"""
    order = await db.orders.find_one({"id": order_id}, {"_id": 0})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    if isinstance(order.get('created_at'), str):
        order['created_at'] = datetime.fromisoformat(order['created_at'])
    
    return order


# Include the router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# @app.on_event("shutdown")
# async def shutdown_db_client():
    # client.close()
    # pass
