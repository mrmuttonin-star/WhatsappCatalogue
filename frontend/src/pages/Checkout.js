// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ArrowLeft, CreditCard, Wallet } from 'lucide-react';
// import { toast } from 'sonner';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const Checkout = () => {
//   const { cart, getTotalAmount, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     customer_name: '',
//     customer_phone: '',
//     customer_address: '',
//   });
//   const [paymentMethod, setPaymentMethod] = useState('COD');

//   const totalAmount = getTotalAmount();

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const generateWhatsAppMessage = (order) => {
//     const itemsList = order.items
//       .map((item) => `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`)
//       .join('\n');

//     const message = `*New Order Received!*\n\n*Customer Details:*\nName: ${order.customer_name}\nPhone: ${order.customer_phone}\nAddress: ${order.customer_address}\n\n*Order Items:*\n${itemsList}\n\n*Total Amount: ₹${order.total_amount.toFixed(2)}*\n\n*Payment Method:* ${order.payment_method}\n*Payment Status:* ${order.payment_status}\n\n*Order ID:* ${order.id}`;

//     return encodeURIComponent(message);
//   };

//   const sendWhatsAppNotification = (order) => {
//     // WhatsApp Business number (environment variable se ya yahan directly)
//     // Format: Country code + phone number (no spaces, no + sign)
//     // India: 91 + 10 digit number
//     // Example: 919876543210
//     const whatsappNumber = '919220829266'; // ⚠️ IMPORTANT: Apna WhatsApp number yahan update karein

//     const message = generateWhatsAppMessage(order);
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

//     // Open WhatsApp in new tab
//     window.open(whatsappUrl, '_blank');
//   };

//   const handleCODOrder = async () => {
//     try {
//       setLoading(true);

//       const orderData = {
//         customer_name: formData.customer_name,
//         customer_phone: formData.customer_phone,
//         customer_address: formData.customer_address,
//         items: cart,
//         total_amount: totalAmount,
//         payment_method: 'COD',
//       };

//       const response = await axios.post(`${API}/orders`, orderData);

//       // Navigate to success page first
//       toast.success('Order placed successfully!');
//       navigate('/order-success', { state: { order: response.data } });

//       // Send WhatsApp notification
//       sendWhatsAppNotification(response.data);

//       // Clear cart after navigation
//       setTimeout(() => clearCart(), 100);
//     } catch (error) {
//       console.error('Order creation failed:', error);
//       toast.error('Failed to place order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOnlinePayment = async () => {
//     try {
//       setLoading(true);

//       // Create Razorpay order
//       const orderResponse = await axios.post(`${API}/razorpay/create-order`, {
//         amount: totalAmount,
//       });

//       const { id: order_id, amount, currency, key_id } = orderResponse.data;

//       // Initialize Razorpay
//       const options = {
//         key: key_id,
//         amount: amount,
//         currency: currency,
//         name: 'Mr. Mutton',
//         description: 'Food Order Payment',
//         order_id: order_id,
//         handler: async (response) => {
//           try {
//             // Create order with payment details
//             const orderData = {
//               customer_name: formData.customer_name,
//               customer_phone: formData.customer_phone,
//               customer_address: formData.customer_address,
//               items: cart,
//               total_amount: totalAmount,
//               payment_method: 'ONLINE',
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             };

//             const orderResult = await axios.post(`${API}/orders`, orderData);

//             // Navigate to success page first
//             toast.success('Payment successful! Order placed.');
//             navigate('/order-success', { state: { order: orderResult.data } });

//             // Send WhatsApp notification
//             sendWhatsAppNotification(orderResult.data);

//             // Clear cart after navigation
//             setTimeout(() => clearCart(), 100);
//           } catch (error) {
//             console.error('Order creation after payment failed:', error);
//             toast.error('Payment successful but order creation failed. Please contact support.');
//           }
//         },
//         prefill: {
//           name: formData.customer_name,
//           contact: formData.customer_phone,
//         },
//         theme: {
//           color: '#25D366',
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();

//       razorpay.on('payment.failed', function (response) {
//         toast.error('Payment failed. Please try again.');
//       });
//     } catch (error) {
//       console.error('Payment initialization failed:', error);
//       toast.error('Failed to initialize payment. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (!formData.customer_name || !formData.customer_phone || !formData.customer_address) {
//       toast.error('Please fill all required fields');
//       return;
//     }

//     if (paymentMethod === 'COD') {
//       await handleCODOrder();
//     } else {
//       await handleOnlinePayment();
//     }
//   };

//   if (cart.length === 0) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-[#0B141A] pb-32">
//       {/* Header */}
//       <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
//           <button
//             onClick={() => navigate('/cart')}
//             className="p-2 hover:bg-[#2A3942] rounded-full transition-colors"
//             data-testid="back-to-cart-button"
//           >
//             <ArrowLeft className="w-6 h-6 text-[#E9EDEF]" />
//           </button>
//           <h1 className="text-2xl font-bold text-[#E9EDEF] font-['Outfit']" data-testid="checkout-title">
//             Checkout
//           </h1>
//         </div>
//       </header>

//       {/* Checkout Form */}
//       <div className="max-w-2xl mx-auto px-4 py-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Customer Details */}
//           <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
//             <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">Delivery Details</h2>

//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="customer_name" className="text-[#E9EDEF] mb-2 block">Full Name *</Label>
//                 <Input
//                   id="customer_name"
//                   name="customer_name"
//                   type="text"
//                   value={formData.customer_name}
//                   onChange={handleInputChange}
//                   className="bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]"
//                   placeholder="Enter your name"
//                   required
//                   data-testid="customer-name-input"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="customer_phone" className="text-[#E9EDEF] mb-2 block">Phone Number *</Label>
//                 <Input
//                   id="customer_phone"
//                   name="customer_phone"
//                   type="tel"
//                   value={formData.customer_phone}
//                   onChange={handleInputChange}
//                   className="bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]"
//                   placeholder="Enter your phone number"
//                   required
//                   data-testid="customer-phone-input"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="customer_address" className="text-[#E9EDEF] mb-2 block">Delivery Address *</Label>
//                 <textarea
//                   id="customer_address"
//                   name="customer_address"
//                   value={formData.customer_address}
//                   onChange={handleInputChange}
//                   className="bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366] rounded-lg px-4 py-3 w-full min-h-[100px]"
//                   placeholder="Enter your complete address"
//                   required
//                   data-testid="customer-address-input"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Payment Method */}
//           <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
//             <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">Payment Method</h2>

//             <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
//               <div className="flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] mb-3 cursor-pointer hover:border-[#25D366]/50 transition-colors" data-testid="cod-payment-option">
//                 <RadioGroupItem value="COD" id="cod" className="border-[#8696A0] text-[#25D366]" />
//                 <Label htmlFor="cod" className="flex items-center gap-3 cursor-pointer flex-1">
//                   <Wallet className="w-5 h-5 text-[#E9EDEF]" />
//                   <div>
//                     <p className="text-[#E9EDEF] font-medium">Cash on Delivery</p>
//                     <p className="text-sm text-[#8696A0]">Pay when you receive</p>
//                   </div>
//                 </Label>
//               </div>

//               <div className="flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] cursor-pointer hover:border-[#25D366]/50 transition-colors" data-testid="online-payment-option">
//                 <RadioGroupItem value="ONLINE" id="online" className="border-[#8696A0] text-[#25D366]" />
//                 <Label htmlFor="online" className="flex items-center gap-3 cursor-pointer flex-1">
//                   <CreditCard className="w-5 h-5 text-[#E9EDEF]" />
//                   <div>
//                     <p className="text-[#E9EDEF] font-medium">Online Payment</p>
//                     <p className="text-sm text-[#8696A0]">Pay via Razorpay</p>
//                   </div>
//                 </Label>
//               </div>
//             </RadioGroup>
//           </div>

//           {/* Order Summary */}
//           <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
//             <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">Order Summary</h2>

//             <div className="space-y-2 mb-4">
//               {cart.map((item) => (
//                 <div key={item.product_id} className="flex justify-between text-sm">
//                   <span className="text-[#8696A0]">{item.name} x{item.quantity}</span>
//                   <span className="text-[#E9EDEF]">₹{(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-[#2A3942] pt-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-[#E9EDEF] font-semibold">Total Amount</span>
//                 <span className="text-2xl font-bold text-[#E9EDEF]" data-testid="checkout-total-amount">₹{totalAmount.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Footer with Submit Button */}
//       <div className="fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] p-4 z-50">
//         <div className="max-w-2xl mx-auto">
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
//             data-testid="confirm-order-button"
//           >
//             {loading ? 'Processing...' : paymentMethod === 'COD' ? 'Confirm Order' : 'Proceed to Payment'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, CreditCard, Wallet } from "lucide-react";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import LocationPicker from "../components/LocationPicker";
import SchedulePicker from "../components/SchedulePicker";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = BACKEND_URL;
const API = process.env.REACT_APP_BACKEND_URL;

// Charges configuration
const CHARGES = {
  PACKAGING: 15,
  GST_PERCENT: 5, // 5% on items only
  COD_TOKEN: 100,
  FREE_DELIVERY_RADIUS_KM: 3,
  DELIVERY_RATE_PER_KM: 10,
};

const Checkout = () => {
  const { cart, getTotalAmount, getItemsSubtotal, clearCart } = useCart();

  console.log("CART DATA 👉", cart);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [location, setLocation] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [showCODTokenModal, setShowCODTokenModal] = useState(false);

  // Calculate all charges
  const itemsSubtotal = getItemsSubtotal();
  const packagingCharge = CHARGES.PACKAGING;
  const gstAmount = (itemsSubtotal * CHARGES.GST_PERCENT) / 100;

  const deliveryCharge = location
    ? location.distance <= CHARGES.FREE_DELIVERY_RADIUS_KM
      ? 0
      : Math.ceil(location.distance - CHARGES.FREE_DELIVERY_RADIUS_KM) *
        CHARGES.DELIVERY_RATE_PER_KM
    : 0;

  const grandTotal =
    itemsSubtotal + packagingCharge + gstAmount + deliveryCharge;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppMessage = (order) => {
    const itemsList = order.items
      .map((item) => {
        // main item total
        const itemTotal = item.price * item.quantity;

        // addons total calculate
        const addonsTotal = (item.addons || []).reduce(
          (sum, a) => sum + a.price * item.quantity,
          0,
        );

        // addons text
        const addonsText =
          item.addons && item.addons.length > 0
            ? "\n   ➤ Add-ons:\n" +
              item.addons
                .map((a) => `      - ${a.name} (₹${a.price})`)
                .join("\n")
            : "";

        return `• ${item.name} x${item.quantity} = ₹${itemTotal.toFixed(2)}${addonsText}`;
      })
      .join("\n\n");

    let scheduleText = "ASAP";

if (order.scheduled_date && order.meal_type && order.time_slot) {
  scheduleText = `
📅 ${order.scheduled_date}
🍽️ ${order.meal_type === "lunch" ? "Lunch" : "Dinner"}
⏰ ${order.time_slot}
`;
}

    const message = `🛒 *NEW ORDER RECEIVED*

━━━━━━━━━━━━━━━
👤 *Customer Details*
Name: ${order.customer_name}
Phone: ${order.customer_phone}

📍 *Delivery Address*
${order.delivery_location?.address || "N/A"}
📌 Location: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.customer_address)}

🕒 *Schedule*
${scheduleText}
━━━━━━━━━━━━━━━
📦 *Order Items*
${itemsList}

━━━━━━━━━━━━━━━
💰 *Bill Summary*
Subtotal: ₹${order.items_subtotal.toFixed(2)}
Packaging: ₹${order.packaging_charge.toFixed(2)}
Delivery: ₹${order.delivery_charge.toFixed(2)}
GST: ₹${order.gst_amount.toFixed(2)}

🟢 *Total: ₹${order.total_amount.toFixed(2)}*

💳 Payment: ${order.payment_method}
📌 Status: ${order.payment_status}

🆔 Order ID: ${order.id}
━━━━━━━━━━━━━━━`;

    return encodeURIComponent(message);
  };

  const sendWhatsAppNotification = (order) => {
    const whatsappNumber = "919220829266";
    const message = generateWhatsAppMessage(order);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // ✅ open in new tab
    const win = window.open(whatsappUrl, "_blank");

    // fallback (if blocked)
    if (!win) {
      window.location.href = whatsappUrl;
    }
  };

  const validateForm = () => {
    if (!formData.customer_name || !formData.customer_phone) {
      toast.error("Please fill all required fields");
      return false;
    }
    if (!location) {
      toast.error("Please select delivery location");
      return false;
    }
    if (!schedule) {
      toast.error("Please select delivery schedule");
      return false;
    }
    return true;
  };

  const handleCODTokenPayment = async () => {
    try {
      setLoading(true);

      console.log("STEP 1");

      // Create Razorpay order for ₹100 token
      const orderResponse = await axios.post(`${API}/api/razorpay/create-order`, {
        amount: CHARGES.COD_TOKEN * 100,
      });

      console.log("STEP 2");
      console.log("ORDER RESPONSE:", orderResponse.data);

      const { id: order_id, amount, currency, key_id } = orderResponse.data;

      // Initialize Razorpay for token payment
      const options = {
        key: key_id,
        amount: amount,
        currency: currency,
        name: "Mr. Mutton",
        description: "COD Token Payment",
        order_id: order_id,
        handler: async (response) => {
          try {
            // Token payment successful, now create COD order
            await createOrder(
              "COD",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              true,
            );
          } catch (error) {
            console.error("Order creation after token payment failed:", error);
            toast.error(
              "Token payment successful but order creation failed. Please contact support.",
            );
          }
        },
        prefill: {
          name: formData.customer_name,
          contact: formData.customer_phone,
        },
        theme: {
          color: "#25D366",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", function (response) {
        console.error("RAZORPAY ERROR:", response.error);
        toast.error(response.error.description);
        setLoading(false);
      });

      setShowCODTokenModal(false);
    } catch (error) {
      console.error("Token payment initialization failed:", error);
      toast.error("Failed to initialize token payment. Please try again.");
      setLoading(false);
    }
  };

  const createOrder = async (
    method,
    paymentDetails = {},
    openWhatsApp = true,
  ) => {
    try {
      const formattedItems = cart
        .map((item) => {
          const addons =
            item.addons && item.addons.length > 0
              ? `\n   ➤ Add-ons: ${item.addons
                  .map((a) => `${a.name} (₹${a.price})`)
                  .join(", ")}`
              : "";

          return `${item.name} x${item.quantity}${addons}`;
        })
        .join("\n\n");
      const orderData = {
        customer_name: formData.customer_name,
        customer_phone: formData.customer_phone,
        customer_address: location.address,
        items: cart,
        items_text: formattedItems,
        items_subtotal: itemsSubtotal,
        packaging_charge: packagingCharge,
        delivery_charge: deliveryCharge,
        gst_amount: gstAmount,
        total_amount: grandTotal,
        payment_method: method,
        delivery_location: location,
        scheduled_date: schedule?.dateLabel,
        meal_type: schedule?.mealType,
        time_slot: schedule?.timeSlot,
        ...paymentDetails,
      };

      const response = await axios.post(`${API}/api/orders`, orderData);

      // // ✅ WhatsApp FIRST
      // if (openWhatsApp) {
      //   sendWhatsAppNotification(response.data);
      // }

      // // ✅ Delay navigation (VERY IMPORTANT)
      // setTimeout(() => {
      //   toast.success("Order placed successfully!");
      //   navigate("/order-success", { state: { order: response.data } });
      // }, 2000);
      // ✅ Step 1: navigate FIRST
      toast.success("Order placed successfully!");
      navigate("/order-success", { state: { order: response.data } });

      // ✅ Step 2: WhatsApp open AFTER small delay
      if (openWhatsApp) {
        setTimeout(() => {
          sendWhatsAppNotification(response.data);
        }, 1000);
      }

      // Clear cart after navigation
      setTimeout(() => clearCart(), 3000);
    } catch (error) {
      console.error("Order creation failed:", error);
      toast.error("Failed to place order. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleOnlinePayment = async () => {
    console.log("GRAND TOTAL:", grandTotal);
    try {
      setLoading(true);

      // Create Razorpay order for full amount
      const orderResponse = await axios.post(`${API}/api/razorpay/create-order`, {
        // amount: grandTotal,
        amount: Math.round(grandTotal * 100),
      });

      const { id: order_id, amount, currency, key_id } = orderResponse.data;

      // Initialize Razorpay
      const options = {
        key: key_id,
        amount: amount,
        currency: currency,
        name: "Mr. Mutton",
        description: "Food Order Payment",
        order_id: order_id,
        handler: async (response) => {
          console.log("PAYMENT SUCCESS:", response);
          try {
            await createOrder(
              "ONLINE",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              true,
            );
          } catch (error) {
            console.error("Order creation after payment failed:", error);
          }
        },
        prefill: {
          name: formData.customer_name,
          contact: formData.customer_phone,
        },
        theme: {
          color: "#25D366",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", function (response) {
        console.error("RAZORPAY ERROR:", response.error);
        toast.error(response.error.description);
        setLoading(false);
      });
    } catch (error) {
      console.error("Payment initialization failed:", error);
      toast.error("Failed to initialize payment. Please try again.");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (paymentMethod === "COD") {
      // Show COD token modal
      setShowCODTokenModal(true);
    } else {
      await handleOnlinePayment();
    }
  };

  // if (cart.length === 0) {
  //   navigate("/");
  //   return null;
  // }
  if (cart.length === 0 && window.location.pathname !== "/order-success") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B141A] pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="p-2 hover:bg-[#2A3942] rounded-full transition-colors"
            data-testid="back-to-cart-button"
          >
            <ArrowLeft className="w-6 h-6 text-[#E9EDEF]" />
          </button>
          <h1
            className="text-2xl font-bold text-[#E9EDEF] font-['Outfit']"
            data-testid="checkout-title"
          >
            Checkout
          </h1>
        </div>
      </header>

      {/* Checkout Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Details */}
          <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
            <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">
              Customer Details
            </h2>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="customer_name"
                  className="text-[#E9EDEF] mb-2 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="customer_name"
                  name="customer_name"
                  type="text"
                  value={formData.customer_name}
                  onChange={handleInputChange}
                  className="bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]"
                  placeholder="Enter your name"
                  required
                  data-testid="customer-name-input"
                />
              </div>

              <div>
                <Label
                  htmlFor="customer_phone"
                  className="text-[#E9EDEF] mb-2 block"
                >
                  Phone Number *
                </Label>
                <Input
                  id="customer_phone"
                  name="customer_phone"
                  type="tel"
                  value={formData.customer_phone}
                  onChange={handleInputChange}
                  className="bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]"
                  placeholder="Enter your phone number"
                  required
                  data-testid="customer-phone-input"
                />
              </div>
            </div>
          </div>

          {/* Location Picker */}
          <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
            <LocationPicker onLocationSelect={setLocation} />
          </div>

          {/* Schedule Picker */}
          <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
            <SchedulePicker onScheduleSelect={setSchedule} />
          </div>

          {/* Order Summary */}
          <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
            <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">
              Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.product_id}-${index}`}
                  className="flex justify-between text-sm"
                >
                  <div>
                    <span className="text-[#E9EDEF]">
                      {item.name} x{item.quantity}
                    </span>
                    {item.addons && item.addons.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.addons.map((addon, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-[#8696A0]"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#25D366]"></div>
                            {addon.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[#E9EDEF]">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2A3942] pt-4 space-y-2">
              <div className="flex justify-between text-sm text-[#8696A0]">
                <span>Items Subtotal</span>
                <span className="text-[#E9EDEF]">
                  ₹{itemsSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-[#8696A0]">
                <span>Packaging Charge</span>
                <span className="text-[#E9EDEF]">
                  ₹{packagingCharge.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-[#8696A0]">
                <span>Delivery Charge</span>
                <span
                  className={
                    deliveryCharge === 0 ? "text-[#22C55E]" : "text-[#E9EDEF]"
                  }
                >
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm text-[#8696A0]">
                <span>GST (5% on items)</span>
                <span className="text-[#E9EDEF]">₹{gstAmount.toFixed(2)}</span>
              </div>
              <div className="border-t border-[#2A3942] pt-3 flex justify-between items-center">
                <span className="text-lg text-[#E9EDEF] font-semibold">
                  Grand Total
                </span>
                <span
                  className="text-2xl font-bold text-[#25D366]"
                  data-testid="checkout-total-amount"
                >
                  ₹{grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942]">
            <h2 className="text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']">
              Payment Method
            </h2>

            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div
                className="flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] mb-3 cursor-pointer hover:border-[#25D366]/50 transition-colors"
                data-testid="cod-payment-option"
              >
                <RadioGroupItem
                  value="COD"
                  id="cod"
                  className="border-[#8696A0] text-[#25D366]"
                />
                <Label
                  htmlFor="cod"
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <Wallet className="w-5 h-5 text-[#E9EDEF]" />
                  <div>
                    <p className="text-[#E9EDEF] font-medium">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-[#8696A0]">
                      Pay ₹100 token now, rest on delivery
                    </p>
                  </div>
                </Label>
              </div>

              <div
                className="flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] cursor-pointer hover:border-[#25D366]/50 transition-colors"
                data-testid="online-payment-option"
              >
                <RadioGroupItem
                  value="ONLINE"
                  id="online"
                  className="border-[#8696A0] text-[#25D366]"
                />
                <Label
                  htmlFor="online"
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <CreditCard className="w-5 h-5 text-[#E9EDEF]" />
                  <div>
                    <p className="text-[#E9EDEF] font-medium">Online Payment</p>
                    <p className="text-xs text-[#8696A0]">
                      Pay full amount via Razorpay
                    </p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>

      {/* Footer with Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] p-4 z-50">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleSubmit}
            // onClick={handleOnlinePayment}
            type="submit"
            disabled={loading}
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="confirm-order-button"
          >
            {loading
              ? "Processing..."
              : paymentMethod === "COD"
                ? `Pay ₹${CHARGES.COD_TOKEN} Token`
                : `Pay ₹${grandTotal.toFixed(2)}`}
          </button>
        </div>
      </div>

      {/* COD Token Modal */}
      <Dialog open={showCODTokenModal} onOpenChange={setShowCODTokenModal}>
        <DialogContent className="bg-[#202C33] border-[#2A3942] text-[#E9EDEF]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#E9EDEF]">
              COD Token Payment
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-[#111B21] rounded-lg p-4 mb-4 border border-[#25D366]">
              <p className="text-[#E9EDEF] mb-2">
                You need to pay{" "}
                <span className="text-[#25D366] font-bold text-xl">
                  ₹{CHARGES.COD_TOKEN}
                </span>{" "}
                token amount to confirm your order as COD.
              </p>
              <p className="text-sm text-[#8696A0]">
                Remaining amount (₹{(grandTotal - CHARGES.COD_TOKEN).toFixed(2)}
                ) will be collected on delivery.
              </p>
            </div>
            <button
              onClick={handleCODTokenPayment}
              disabled={loading}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 disabled:opacity-50"
              data-testid="pay-token-button"
            >
              {loading
                ? "Processing..."
                : `Continue to Pay ₹${CHARGES.COD_TOKEN}`}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
