import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Package, User, Phone, MapPin, CreditCard, Calendar, RefreshCw } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL;

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, cod, online

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/orders`);
      // Sort by date (newest first)
      const sortedOrders = response.data.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setOrders(sortedOrders);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    if (filter === 'cod') return order.payment_method === 'COD';
    if (filter === 'online') return order.payment_method === 'ONLINE';
    return true;
  });

  const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.total_amount, 0);
  const codOrders = orders.filter(o => o.payment_method === 'COD').length;
  const onlineOrders = orders.filter(o => o.payment_method === 'ONLINE').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B141A] flex items-center justify-center">
        <div className="text-[#E9EDEF] text-xl">Loading orders...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B141A] pb-8">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#E9EDEF] font-['Outfit']">
              📦 Orders Dashboard
            </h1>
            <button
              onClick={fetchOrders}
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full px-4 py-2 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#202C33] rounded-lg p-4 border border-[#2A3942]">
              <p className="text-[#8696A0] text-sm mb-1">Total Orders</p>
              <p className="text-2xl font-bold text-[#E9EDEF]">{orders.length}</p>
            </div>
            <div className="bg-[#202C33] rounded-lg p-4 border border-[#2A3942]">
              <p className="text-[#8696A0] text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-[#25D366]">₹{totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-[#202C33] rounded-lg p-4 border border-[#2A3942]">
              <p className="text-[#8696A0] text-sm mb-1">COD Orders</p>
              <p className="text-2xl font-bold text-[#E9EDEF]">{codOrders}</p>
            </div>
            <div className="bg-[#202C33] rounded-lg p-4 border border-[#2A3942]">
              <p className="text-[#8696A0] text-sm mb-1">Online Payments</p>
              <p className="text-2xl font-bold text-[#E9EDEF]">{onlineOrders}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]'
              }`}
            >
              All ({orders.length})
            </button>
            <button
              onClick={() => setFilter('cod')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === 'cod'
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]'
              }`}
            >
              COD ({codOrders})
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === 'online'
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]'
              }`}
            >
              Online ({onlineOrders})
            </button>
          </div>
        </div>
      </header>

      {/* Orders List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredOrders.length === 0 ? (
          <div className="bg-[#202C33] rounded-xl p-12 text-center border border-[#2A3942]">
            <Package className="w-16 h-16 text-[#8696A0] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#E9EDEF] mb-2">No orders found</h2>
            <p className="text-[#8696A0]">Orders will appear here once customers place them</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className="bg-[#202C33] rounded-xl p-6 border border-[#2A3942] hover:border-[#25D366]/50 transition-colors"
              >
                {/* Order Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#8696A0] mb-1">Order #{index + 1}</p>
                    <p className="text-xs text-[#8696A0] font-mono">{order.id}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.payment_method === 'COD'
                          ? 'bg-[#F59E0B]/20 text-[#F59E0B]'
                          : 'bg-[#25D366]/20 text-[#25D366]'
                      }`}
                    >
                      {order.payment_method}
                    </span>
                    <p className="text-sm text-[#8696A0] mt-2">{order.payment_status}</p>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="bg-[#111B21] rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-[#8696A0]" />
                    <span className="text-[#E9EDEF] font-medium">{order.customer_name}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-[#8696A0]" />
                    <span className="text-[#8696A0] text-sm">{order.customer_phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#8696A0] mt-0.5" />
                    <span className="text-[#8696A0] text-sm">{order.customer_address}</span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-4">
                  <p className="text-sm text-[#8696A0] mb-2">Items:</p>
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm bg-[#111B21] rounded-lg p-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg ring-1 ring-white/10"
                          />
                          <div>
                            <p className="text-[#E9EDEF] font-medium">{item.name}</p>
                            <p className="text-[#8696A0] text-xs">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="text-[#E9EDEF] font-medium">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Total */}
                <div className="border-t border-[#2A3942] pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#8696A0] text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(order.created_at).toLocaleString('en-IN', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#8696A0] mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-[#25D366]">
                      ₹{order.total_amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
