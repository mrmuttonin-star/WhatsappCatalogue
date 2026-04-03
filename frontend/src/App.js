import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { Toaster } from './components/ui/sonner';
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import AdminOrders from './pages/AdminOrders';

function App() {
  return (
    <CartProvider>
      <div className="App dark">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Catalogue />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </div>
    </CartProvider>
  );
}

export default App;
