# 🚀 Quick Start Guide - VS Code Se Development

## ⚡ 5 Minute Setup

### Step 1: Project Download Karein

Emergent dashboard se **"Download Code"** button click karein ya GitHub repository clone karein.

### Step 2: VS Code Mein Open Karein

```bash
cd your-project-folder
code .
```

### Step 3: Dependencies Install Karein

**Terminal 1 (Backend):**
```bash
cd backend
pip install -r requirements.txt
```

**Terminal 2 (Frontend):**
```bash
cd frontend
yarn install
```

### Step 4: Important Files Edit Karein

#### 📱 WhatsApp Number Change (ZAROORI!)

**File:** `frontend/src/pages/Checkout.js` (Line 52)
```javascript
const whatsappNumber = '919999999999'; // ⬅️ YAHAN APNA NUMBER
```

#### 💳 Razorpay Keys Add Karein

**File:** `backend/.env`
```bash
RAZORPAY_KEY_ID="rzp_test_XXXXXXX"     # ⬅️ Razorpay dashboard se
RAZORPAY_KEY_SECRET="XXXXXXXXXXXXXXX"  # ⬅️ Copy karke yahan paste
```

**Razorpay Keys Kaise Lein:**
1. https://razorpay.com pe signup karein
2. Dashboard → Settings → API Keys
3. Generate Test Keys
4. Copy karke `.env` file mein paste karein

### Step 5: Run Karein

**Backend (Terminal 1):**
```bash
cd backend
python server.py
```

**Frontend (Terminal 2):**
```bash
cd frontend
yarn start
```

Browser automatically `http://localhost:3000` pe khulega!

---

## 🎯 Common Modifications

### 1️⃣ Products Change Karna

**File:** `backend/server.py` (Line 82 se shuru)

**Naya product add:**
```python
{
    "id": "paneer-tikka",
    "name": "Paneer Tikka (500g)",
    "description": "8 Pieces Paneer",
    "price": 299.00,
    "original_price": 349.00,
    "image": "https://your-image-url.com/image.jpg",
    "category": "Starters"
}
```

**Price change karna:**
Simply `price` field edit karein aur save karein.

**Image change karna:**
`image` field mein naya URL paste karein.

---

### 2️⃣ Business Name/Details Change

**File:** `frontend/src/pages/Catalogue.js` (Line 66-70)

```jsx
<h2>Mr. Mutton</h2>  {/* ⬅️ YAHAN NAAM CHANGE */}
<p>Slow Cooked. Soul Satisfied.</p>  {/* ⬅️ TAGLINE CHANGE */}
```

---

### 3️⃣ Colors/Theme Change

**File:** `frontend/src/index.css` (Line 28)

```css
--primary: 142 76% 49%;  /* WhatsApp Green */
```

**Popular Colors (HSL format):**
- Blue: `217 91% 60%`
- Red: `0 84% 60%`
- Orange: `25 95% 53%`
- Purple: `271 76% 53%`

---

## 🌐 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend)

**Frontend (Vercel):**
1. https://vercel.com pe login karein
2. Import Git Repository
3. Root Directory: `frontend`
4. Deploy button click karein

**Backend (Railway):**
1. https://railway.app pe login karein
2. New Project → Deploy from GitHub
3. Root Directory: `backend`
4. Add MongoDB service
5. Environment variables add karein
6. Deploy!

### Option 2: Single Server Deployment

**Requirements:**
- Ubuntu VPS (DigitalOcean/Linode/AWS)
- Domain name (optional)

**Quick Commands:**
```bash
# Install dependencies
sudo apt update
sudo apt install python3-pip nodejs npm mongodb nginx

# Clone project
git clone your-repo
cd your-project

# Setup backend
cd backend
pip3 install -r requirements.txt
python3 server.py &

# Setup frontend
cd ../frontend
npm install
npm run build

# Configure Nginx
sudo nano /etc/nginx/sites-available/your-site
# Add nginx config
sudo ln -s /etc/nginx/sites-available/your-site /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

---

## 💾 Database Setup

### Local MongoDB:
Already configured! Check `.env`:
```bash
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
```

### MongoDB Atlas (Cloud - Free):
1. https://www.mongodb.com/atlas pe signup
2. Free cluster create karein
3. User create karein (Database Access)
4. Network access allow karein (0.0.0.0/0 for testing)
5. Connection string copy karein
6. `.env` file update karein:

```bash
MONGO_URL="mongodb+srv://username:password@cluster.mongodb.net/mydb"
```

---

## 🐛 Troubleshooting

### Frontend Nahi Chal Raha:
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
yarn start
```

### Backend Error Aa Raha:
```bash
cd backend
pip install -r requirements.txt --force-reinstall
```

### Port Already in Use:
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Kill process on port 8001
kill -9 $(lsof -ti:8001)
```

### MongoDB Connection Error:
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# Start MongoDB
sudo systemctl start mongodb
```

---

## 📝 Testing Before Live

### ✅ Checklist:
- [ ] WhatsApp number updated ho gaya
- [ ] Razorpay keys (test mode) configured hain
- [ ] Products aur images sahi dikh rahe hain
- [ ] Mobile pe responsive hai
- [ ] Cart add/remove kaam kar raha hai
- [ ] Checkout form validation hai
- [ ] COD order place ho raha hai
- [ ] Orders database mein save ho rahe hain

### Test Cards (Razorpay Test Mode):
- **Success:** 4111 1111 1111 1111
- **Failure:** 4111 1111 1111 1234
- CVV: Any 3 digits
- Expiry: Any future date

---

## 🔧 Advanced Customization

### Email Notifications Add Karna:
SendGrid ya Nodemailer use karein

### SMS Notifications:
Twilio integration karein

### Admin Dashboard:
Backend mein admin routes add karein

### Analytics:
Google Analytics ya Mixpanel integrate karein

---

## 📚 Useful Resources

- **React Docs:** https://react.dev
- **FastAPI Docs:** https://fastapi.tiangolo.com
- **MongoDB Docs:** https://docs.mongodb.com
- **Razorpay Docs:** https://razorpay.com/docs

---

## 💬 Need Help?

Agar koi problem ho:
1. Error message screenshot lein
2. Console logs check karein (F12 → Console)
3. Backend logs check karein
4. Specific issue ke saath help mangein

---

**Khush Rahein! Happy Coding! 🎉**
