import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotalAmount, getTotalItems } =
    useCart();
  const navigate = useNavigate();

  const totalAmount = getTotalAmount();
  const savings = cart.reduce((total, item) => {
    // Assuming 20% savings for demo
    return total + item.price * 0.2 * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B141A] flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-24 h-24 text-[#8696A0] mb-4" />
        <h2 className="text-2xl font-bold text-[#E9EDEF] mb-2">
          Your cart is empty
        </h2>
        <p className="text-[#8696A0] mb-6">
          Add some delicious items to get started
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full px-6 py-2 transition-all shadow-lg active:scale-95"
          data-testid="back-to-catalogue-button"
        >
          Browse Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B141A] pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-[#2A3942] rounded-full transition-colors"
            data-testid="close-cart-button"
          >
            <X className="w-6 h-6 text-[#E9EDEF]" />
          </button>
          <h1
            className="text-2xl font-bold text-[#E9EDEF] font-['Outfit']"
            data-testid="cart-title"
          >
            Your cart
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-[#25D366] hover:text-[#1DA851] text-sm font-medium"
            data-testid="add-more-button"
          >
            Add more
          </button>
        </div>
      </header>

      {/* Cart Items */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-4">
          <p className="text-[#8696A0] text-sm">
            {getTotalItems()} item{getTotalItems() > 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item) => (
            <div
              key={`${item.product_id}-${item.addons?.map((a) => a.id).join("-") || "no-addons"}`}
              className="bg-[#111B21] rounded-lg border border-[#2A3942] overflow-hidden"
              data-testid={`cart-item-${item.product_id}`}
            >
              {/* Main Item */}
              <div className="flex items-center gap-4 p-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg ring-1 ring-white/10"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#E9EDEF] mb-1">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-[#202C33] rounded-full px-2 py-1 border border-[#2A3942]">
                      <button
                        onClick={() =>
                          removeFromCart(item.product_id, item.addons)
                        }
                        className="p-1 hover:bg-[#2A3942] rounded-full"
                      >
                        <Minus className="w-4 h-4 text-[#E9EDEF]" />
                      </button>

                      <span className="text-[#E9EDEF] font-bold min-w-[24px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          addToCart({
                            id: item.product_id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            addons: item.addons || [],
                            quantity: 1,
                          })
                        }
                        className="p-1 hover:bg-[#2A3942] rounded-full"
                      >
                        <Plus className="w-4 h-4 text-[#E9EDEF]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-lg font-bold text-[#E9EDEF]">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-[#8696A0] line-through">
                    ₹{(item.price * 1.2 * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              {/* Add-ons (Nested) */}
              {item.addons && item.addons.length > 0 && (
                <div className="px-4 pb-4 pt-0">
                  <div className="border-t border-[#2A3942] pt-3 space-y-2">
                    {item.addons.map((addon, idx) => (
                      <div
                        key={`${addon.id}-${idx}`}
                        className="flex items-center justify-between text-sm pl-4"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></div>
                          <span className="text-[#8696A0]">{addon.name}</span>
                        </div>
                        <span className="text-[#8696A0]">₹{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Total */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] z-50">
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-3">
            <div className="flex justify-between items-center text-sm text-[#22C55E] mb-2">
              <span>You save</span>
              <span data-testid="savings-amount">₹{savings.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#E9EDEF] text-lg">Estimated total</span>
              <span
                className="text-[#E9EDEF] text-2xl font-bold"
                data-testid="cart-total-amount"
              >
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#8696A0] leading-relaxed">
              {/* By continuing, you agree to share your cart, profile name and
              phone number with the business so it can confirm your order and
              total price, including any taxes, fees and discounts */}
            </p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg"
            data-testid="place-order-button"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

// const Cart = () => {
//   const { cart, addToCart, removeFromCart, getTotalAmount, getTotalItems } = useCart();
//   const navigate = useNavigate();

//   const totalAmount = getTotalAmount();
//   const savings = cart.reduce((total, item) => {
//     return total + (item.price * 0.2 * item.quantity);
//   }, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#0B141A] flex flex-col items-center justify-center p-4">
//         <ShoppingBag className="w-24 h-24 text-[#8696A0] mb-4\" />
//         <h2 className="text-2xl font-bold text-[#E9EDEF] mb-2\">Your cart is empty</h2>
//         <p className="text-[#8696A0] mb-6\">Add some delicious items to get started</p>
//         <button
//           onClick={() => navigate('/')}
//           className="bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full px-6 py-2 transition-all shadow-lg active:scale-95\"
//           data-testid="back-to-catalogue-button\"
//         >
//           Browse Catalogue
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0B141A] pb-32\">
//       {/* Header */}
//       <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]\">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between\">
//           <button
//             onClick={() => navigate('/')}
//             className="p-2 hover:bg-[#2A3942] rounded-full transition-colors\"
//             data-testid="close-cart-button\"
//           >
//             <X className="w-6 h-6 text-[#E9EDEF]\" />
//           </button>
//           <h1 className="text-2xl font-bold text-[#E9EDEF] font-['Outfit']\" data-testid="cart-title\">
//             Your cart
//           </h1>
//           <button
//             onClick={() => navigate('/')}
//             className="text-[#25D366] hover:text-[#1DA851] text-sm font-medium\"
//             data-testid="add-more-button\"
//           >
//             Add more
//           </button>
//         </div>
//       </header>

//       {/* Cart Items */}
//       <div className="max-w-4xl mx-auto px-4 py-6\">
//         <div className="mb-4\">
//           <p className="text-[#8696A0] text-sm\">{getTotalItems()} item{getTotalItems() > 1 ? 's' : ''}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4\">
//           {cart.map((item, index) => (
//             <div
//               key={`${item.product_id}-${index}`}
//               className="bg-[#111B21] rounded-lg border border-[#2A3942] overflow-hidden\"
//               data-testid={`cart-item-${item.product_id}`}
//             >
//               {/* Main Item */}
//               <div className="flex items-center gap-4 p-4\">
//                 {/* Product Image */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-lg ring-1 ring-white/10\"
//                 />

//                 {/* Product Details */}
//                 <div className="flex-1\">
//                   <h3 className="text-base md:text-lg font-medium text-[#E9EDEF] mb-2\" data-testid={`cart-item-name-${item.product_id}`}>
//                     {item.name}
//                   </h3>
//                   <div className="flex items-center gap-3\">
//                     {/* Quantity Controls */}
//                     <div className="flex items-center gap-2 bg-[#202C33] rounded-full px-2 py-1 border border-[#2A3942]\" data-testid={`cart-quantity-controls-${item.product_id}`}>
//                       <button
//                         onClick={() => removeFromCart(item.product_id)}
//                         className="p-1 hover:bg-[#2A3942] rounded-full transition-colors\"
//                         data-testid={`cart-minus-button-${item.product_id}`}
//                       >
//                         <Minus className="w-4 h-4 text-[#E9EDEF]\" />
//                       </button>
//                       <span className="text-[#E9EDEF] font-bold min-w-[24px] text-center\" data-testid={`cart-quantity-display-${item.product_id}`}>
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => addToCart({ id: item.product_id, name: item.name, price: item.price, image: item.image, addons: item.addons })}
//                         className="p-1 hover:bg-[#2A3942] rounded-full transition-colors\"
//                         data-testid={`cart-plus-button-${item.product_id}`}
//                       >
//                         <Plus className="w-4 h-4 text-[#E9EDEF]\" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Price */}
//                 <div className="text-right\">
//                   <p className="text-lg font-bold text-[#E9EDEF]\" data-testid={`cart-item-price-${item.product_id}`}>
//                     ₹{(item.price * item.quantity).toFixed(2)}
//                   </p>
//                   <p className="text-sm text-[#8696A0] line-through\">₹{((item.price * 1.2) * item.quantity).toFixed(2)}</p>
//                 </div>
//               </div>

//               {/* Add-ons (Zomato Style - Nested under main item) */}
//               {item.addons && item.addons.length > 0 && (
//                 <div className="px-4 pb-4 pt-0\">
//                   <div className="border-t border-[#2A3942] pt-3 space-y-2\">
//                     {item.addons.map((addon, idx) => (
//                       <div
//                         key={`${addon.id}-${idx}`}
//                         className="flex items-center justify-between text-sm pl-4\"
//                         data-testid={`addon-display-${addon.id}`}
//                       >
//                         <div className="flex items-center gap-2\">
//                           <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]\"></div>
//                           <span className="text-[#8696A0]\">{addon.name}</span>
//                         </div>
//                         <span className="text-[#8696A0]\">₹{addon.price}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer with Total */}
//       <div className="fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] z-50\">
//         <div className="max-w-4xl mx-auto p-4\">
//           <div className="mb-3\">
//             <div className="flex justify-between items-center text-sm text-[#22C55E] mb-2\">
//               <span>You save</span>
//               <span data-testid="savings-amount\">₹{savings.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between items-center mb-4\">
//               <span className="text-[#E9EDEF] text-lg\">Estimated total</span>
//               <span className="text-[#E9EDEF] text-2xl font-bold\" data-testid="cart-total-amount\">₹{totalAmount.toFixed(2)}</span>
//             </div>
//             <p className="text-xs text-[#8696A0] leading-relaxed\">
//               By continuing, you agree to share your cart, profile name and phone number with the business so it can confirm your order and total price, including any taxes, fees and discounts
//             </p>
//           </div>
//           <button
//             onClick={() => navigate('/checkout')}
//             className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg\"
//             data-testid="place-order-button\"
//           >
//             Place order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
