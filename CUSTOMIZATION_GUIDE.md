# 🛠️ WhatsApp Catalogue App - Complete Customization Guide

## 📥 Apne VS Code Mein Project Kaise Kholein

### Method 1: GitHub Se Download Karke (Recommended)

1. **Emergent Dashboard Se Code Download Karein:**
   - Emergent dashboard pe jaakar "Download Code" ya "Push to GitHub" option use karein
   - Agar GitHub pe push kiya hai, to repository clone karein:
   ```bash
   git clone your-repo-url
   cd your-project-folder
   ```

2. **VS Code Mein Open Karein:**
   - VS Code open karein
   - File → Open Folder → Downloaded folder select karein
   - Ya terminal se: `code .` (project folder mein)

3. **Dependencies Install Karein:**
   ```bash
   # Backend dependencies
   cd backend
   pip install -r requirements.txt
   
   # Frontend dependencies  
   cd ../frontend
   yarn install
   # ya npm install
   ```

### Method 2: Direct Emergent Se

Emergent dashboard se "Export to VS Code" option use karein (if available)

---

## 🔧 Common Modifications - Step by Step Guide

### 1. WhatsApp Number Change Karna

**File:** `/app/frontend/src/pages/Checkout.js`

**Line 49-50** ko edit karein:
```javascript
const sendWhatsAppNotification = (order) => {
  // Yahan apna WhatsApp number daalein (country code ke saath, bina + ke)
  const whatsappNumber = '919999999999'; // ✏️ YAHAN CHANGE KAREIN
  // Format: 91 (India code) + 10 digit mobile number
  // Example: 919876543210
```

**Steps:**
1. VS Code mein file open karein
2. Line 49 pe jaakar number change karein
3. Ctrl+S (Windows) ya Cmd+S (Mac) se save karein

---

### 2. Product Images Change Karna

**Option A: Images Ko Product List Mein Change Karein**

**File:** `/app/backend/server.py`

**Line 82-150** (approximately) mein `SAMPLE_PRODUCTS` array hai:

```python
SAMPLE_PRODUCTS = [
    {
        "id": "mutton-250",
        "name": "Ahuna Mutton (250g)",
        "description": "Mutton 3 Pieces",
        "price": 499.00,
        "original_price": 599.00,
        "image": "YOUR_IMAGE_URL_HERE",  # ✏️ YAHAN IMAGE URL CHANGE KAREIN
        "category": "Mutton Handi"
    },
    # ... aur products
]
```

**Image URL Kahan Se Laayein:**
- Unsplash: https://unsplash.com/ (free images)
- Apne server se host karein
- Cloudinary, AWS S3, ya koi image hosting service use karein

**Steps:**
1. Image upload karein (Cloudinary/imgur/apna server)
2. Image URL copy karein
3. `server.py` mein `"image"` field mein paste karein
4. Backend restart karein

---

### 3. Products Add/Edit/Remove Karna

**Same file:** `/app/backend/server.py`

**Naya Product Add Karna:**
```python
{
    "id": "unique-id-here",  # Unique ID daalein
    "name": "Product Ka Naam",
    "description": "Product ki description",
    "price": 299.00,  # Selling price
    "original_price": 399.00,  # MRP (optional)
    "image": "image-url-here",
    "category": "Mutton Handi"  # Ya koi aur category
}
```

**Steps:**
1. SAMPLE_PRODUCTS list mein naya product object add karein
2. File save karein
3. Backend restart karein: `sudo supervisorctl restart backend`

---

### 4. Razorpay Keys Configure Karna (Online Payment Ke Liye)

**File:** `/app/backend/.env`

```bash
RAZORPAY_KEY_ID="rzp_live_XXXXXXXXXXXXX"  # ✏️ Apni key yahan
RAZORPAY_KEY_SECRET="XXXXXXXXXXXXXXXXXXXX"  # ✏️ Apni secret yahan
```

**Razorpay Keys Kaise Prapt Karein:**
1. https://razorpay.com/ pe jaakar account banayein
2. Dashboard → Settings → API Keys
3. Generate Test Keys (testing ke liye) ya Live Keys (production ke liye)
4. Key ID aur Secret copy karke `.env` file mein paste karein

**Important:**
- Test keys: `rzp_test_` se shuru hoti hain
- Live keys: `rzp_live_` se shuru hoti hain
- Live keys use karne se pehle business verification complete karein

---

### 5. Restaurant/Business Details Change Karna

**File:** `/app/frontend/src/pages/Catalogue.js`

**Line 66-71** (approximately):
```jsx
<h2 className="text-3xl md:text-4xl font-bold text-white font-['Outfit']">
  Mr. Mutton  {/* ✏️ YAHAN BUSINESS NAME CHANGE KAREIN */}
</h2>
<p className="text-[#E9EDEF] text-lg mt-2">
  Slow Cooked. Soul Satisfied.  {/* ✏️ YAHAN TAGLINE CHANGE KAREIN */}
</p>
```

**Hero Banner Image Change:**
Same file, line 62:
```jsx
<img
  src="YOUR_HERO_IMAGE_URL"  {/* ✏️ YAHAN HERO IMAGE URL CHANGE KAREIN */}
  alt="Restaurant"
  className="w-full h-full object-cover"
/>
```

---

### 6. Apne Server Pe Deploy Karna

#### Option A: Vercel (Easiest - Frontend Only)

**Frontend Deploy:**
1. Vercel account banayein: https://vercel.com
2. GitHub se project connect karein
3. Frontend folder select karein
4. Deploy button click karein

**Backend Ke Liye:**
- Railway, Render, ya Heroku use karein (paid/free options available)

#### Option B: Own VPS/Server (Complete Control)

**Requirements:**
- Ubuntu/Linux VPS
- Node.js, Python, MongoDB installed

**Steps:**
```bash
# 1. Server pe code upload karein (SCP/SFTP/Git)
git clone your-repo-url
cd your-project

# 2. MongoDB setup karein
sudo apt install mongodb

# 3. Backend setup
cd backend
pip install -r requirements.txt
# .env file configure karein

# 4. Frontend build karein
cd ../frontend
yarn install
yarn build

# 5. nginx configure karein (web server)
# 6. SSL certificate setup karein (Let's Encrypt)
```

**Detailed deployment guide:** https://www.digitalocean.com/community/tutorials

---

### 7. Apne Database Mein Orders Save Karna

**Aapke orders already MongoDB mein save ho rahe hain!**

**Database Access Karna:**

**File:** `/app/backend/.env`
```bash
MONGO_URL="mongodb://localhost:27017"  # ✏️ Apna MongoDB URL yahan
DB_NAME="test_database"  # ✏️ Apna database name yahan
```

**MongoDB Atlas (Cloud) Use Karna:**
1. https://www.mongodb.com/atlas pe free account banayein
2. Cluster create karein
3. Connection string copy karein
4. `.env` mein MONGO_URL update karein:
   ```bash
   MONGO_URL="mongodb+srv://username:password@cluster.mongodb.net/dbname"
   ```

**Orders Dekhne Ke Liye:**
```bash
# Terminal mein
mongo
use test_database
db.orders.find().pretty()
```

Ya MongoDB Compass (GUI tool) use karein: https://www.mongodb.com/products/compass

---

## 🎨 Design Customization

### Colors Change Karna

**File:** `/app/frontend/src/index.css`

**WhatsApp Green ko kisi aur color se replace karna:**
```css
--primary: 142 76% 49%;  /* ✏️ YAHAN HSL color values change karein */
```

**Background Color:**
```css
--background: 210 20% 6%;  /* Dark background */
```

**Useful Tools:**
- HSL Color Picker: https://hslpicker.com/
- Tailwind Color Generator: https://uicolors.app/create

---

## 🚀 Local Development Testing

### Backend Start Karna:
```bash
cd backend
python server.py
# Runs on: http://localhost:8001
```

### Frontend Start Karna:
```bash
cd frontend
yarn start
# Runs on: http://localhost:3000
```

### Changes Dekhne Ke Liye:
1. Code edit karein VS Code mein
2. File save karein (Ctrl+S)
3. Browser refresh karein (Frontend auto-reload ho jayega)
4. Backend changes ke liye server restart karein

---

## 📱 Mobile Testing

**Browser DevTools:**
1. Chrome/Firefox open karein
2. F12 press karein (Developer Tools)
3. Mobile icon click karein (Responsive Mode)
4. Different devices select karein (iPhone, iPad, etc.)

**Real Device Pe:**
1. Same WiFi network pe hona chahiye
2. `http://YOUR_LOCAL_IP:3000` browser mein open karein
3. Local IP find karna: `ipconfig` (Windows) ya `ifconfig` (Mac/Linux)

---

## 🔐 Security Best Practices

1. **API Keys Hide Karein:**
   - `.env` file kabhi Git pe push na karein
   - `.gitignore` mein `.env` add karein

2. **Environment Variables:**
   - Production mein alag keys use karein
   - Test keys development mein hi use karein

3. **HTTPS Use Karein:**
   - Production pe SSL certificate lagayein
   - Let's Encrypt free SSL provide karta hai

---

## 📧 Common Issues & Solutions

### Issue 1: Images Nahi Dikh Rahe
**Solution:** Image URLs valid hain check karein, CORS enable hai ensure karein

### Issue 2: Backend API Call Fail Ho Rahi
**Solution:** 
- Backend chal raha hai check karein
- CORS_ORIGINS properly set hai verify karein
- Network tab mein errors dekhein (Browser DevTools)

### Issue 3: Orders Database Mein Save Nahi Ho Rahe
**Solution:**
- MongoDB running hai check karein: `sudo systemctl status mongodb`
- Connection string sahi hai verify karein

### Issue 4: Payment Gateway Fail Ho Raha
**Solution:**
- Valid Razorpay keys use kar rahe hain confirm karein
- Test mode mein test cards use karein
- Razorpay dashboard mein logs dekhein

---

## 📞 Support & Help

**Documentation:**
- React: https://react.dev/
- FastAPI: https://fastapi.tiangolo.com/
- MongoDB: https://docs.mongodb.com/
- Razorpay: https://razorpay.com/docs/

**Communities:**
- Stack Overflow
- Reddit: r/reactjs, r/fastapi
- Discord: React/FastAPI communities

---

## ✅ Quick Checklist Before Going Live

- [ ] WhatsApp number update kiya
- [ ] Products aur images update kiye
- [ ] Razorpay live keys configure kiye
- [ ] Business name aur details update kiye
- [ ] Database connection apne server se hai
- [ ] SSL certificate install kiya
- [ ] Mobile aur desktop pe test kiya
- [ ] Payment testing (test mode) kiya
- [ ] Order placement se lekar WhatsApp notification tak pura flow test kiya

---

**Happy Coding! 🎉**

Agar koi specific problem ho to error message share karein, main help karunga!
