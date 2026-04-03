import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B141A] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-[#202C33] rounded-xl p-8 border border-[#2A3942] text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#25D366]/20 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-[#25D366]" />
            </div>
          </div>

          {/* Success Message */}
          <h1
            className="text-3xl font-bold text-[#E9EDEF] mb-3 font-['Outfit']"
            data-testid="success-title"
          >
            Order Confirmed!
          </h1>
          <p className="text-[#8696A0] mb-6">
            Your order has been placed successfully. We'll notify you on
            WhatsApp with the order details.
          </p>

          {/* Order Details */}
          <div className="bg-[#111B21] rounded-lg p-4 mb-6 text-left">
            <div className="mb-3">
              <p className="text-sm text-[#8696A0]">Order ID</p>
              <p
                className="text-[#E9EDEF] font-mono text-sm"
                data-testid="order-id"
              >
                {order.id}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-sm text-[#8696A0]">Payment Method</p>
              <p className="text-[#E9EDEF]" data-testid="payment-method">
                {order.payment_method}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-sm text-[#8696A0]">Payment Status</p>
              <p className="text-[#25D366]" data-testid="payment-status">
                {order.payment_status}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#8696A0]">Total Amount</p>
              <p
                className="text-2xl font-bold text-[#E9EDEF]"
                data-testid="order-total"
              >
                ₹{order.total_amount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Items List */}
          <div className="bg-[#111B21] rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-[#8696A0] mb-3">Items Ordered</p>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="mb-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#E9EDEF]">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-[#E9EDEF]">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {item.addons && item.addons.length > 0 && (
                    <div className="ml-4 mt-1 text-xs text-[#8696A0]">
                      {item.addons.map((addon, idx) => (
                        <div key={idx}>
                          • {addon.name} (+₹{addon.price})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-[#111B21] rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-[#8696A0] mb-2">Delivery Address</p>
            <p className="text-[#E9EDEF] text-sm">{order.customer_name}</p>
            <p className="text-[#E9EDEF] text-sm">{order.customer_phone}</p>
            <p className="text-[#8696A0] text-sm mt-2">
              {order.customer_address}
            </p>
          </div>

          {/* Action Buttons */}

          <div className="space-y-3">
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  `Hey, I have ordered from Mr. Mutton! Order ID: ${order.id}`,
                );
                window.open(
                  `https://wa.me/919220829266?text=${message}`,
                  "_blank",
                );
              }}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2"
              data-testid="chat-whatsapp-button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z\" />
              </svg>
              Chat on WhatsApp
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-[#2A3942] hover:bg-[#3A4952] text-[#E9EDEF] font-medium rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2"
              data-testid="back-to-home-button"
            >
              <Home className="w-5 h-5" />
              Back to Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
