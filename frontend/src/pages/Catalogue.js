import React, { useState, useEffect ,useCallback} from "react";
import axios from "axios";
import { ShoppingCart, Plus, Minus, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CustomizationModal from "../components/CustomizationModal";
import logo from "../assets/Mr-Logo(9JanFinal) (1).png";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = BACKEND_URL;
const API = process.env.REACT_APP_BACKEND_URL;

console.log("API URL:", process.env.REACT_APP_BACKEND_URL);

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCustomization, setShowCustomization] = useState(false);
  const { addToCart, removeFromCart, getItemQuantity, getTotalItems } =
    useCart();
  const navigate = useNavigate();

  
//   const fetchProducts = useCallback(async () => {
//     try {
//       const response = await axios.get(`${API}/api/products`);
//       const data = response.data?.data || response.data?.products || [];
//       setProducts(Array.isArray(data) ? data : []);
//       console.log("API RESPONSE:", response.data);
//       console.log("FULL RESPONSE:", response);
//       console.log("DATA:", response.data);
//       console.log("PRODUCTS:", products);
// console.log("IS ARRAY:", Array.isArray(products));
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//       toast.error("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//  }, [products]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API}/products`);

      // ✅ Direct data use karo
      setProducts(Array.isArray(response.data) ? response.data : []);

      console.log("API RESPONSE:", response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  const groupedProducts = (Array.isArray(products) ? products : []).reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {},
  );

  const handleAddToCart = (product) => {
    // Open customization modal instead of direct add
    setSelectedProduct(product);
    setShowCustomization(true);
  };

  const handleCustomizationComplete = (productWithAddons) => {
    addToCart(productWithAddons);
    setShowCustomization(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B141A] flex items-center justify-center">
        <div className="text-[#E9EDEF] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B141A] pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-[#2A3942] rounded-full transition-colors"
              data-testid="back-button"
            >
              <ArrowLeft className="w-6 h-6 text-[#E9EDEF]" />
            </button>
            <h1
              className="text-2xl font-bold text-[#E9EDEF] font-['Outfit']"
              data-testid="catalogue-title"
            >
              Catalogue
            </h1>
          </div>
          <button
            className="p-2 hover:bg-[#2A3942] rounded-full transition-colors relative"
            onClick={() => navigate("/cart")}
            data-testid="cart-icon-button"
          >
            <ShoppingCart className="w-6 h-6 text-[#E9EDEF]" />
            {getTotalItems() > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-[#25D366] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                data-testid="cart-count-badge"
              >
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={logo}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B141A] to-transparent flex items-end">
          <div className="p-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-white font-['Outfit']"
              data-testid="hero-title"
            >
              Mr. Mutton
            </h2>
            <p className="text-[#E9EDEF] text-lg mt-2">
              Slow Cooked. Soul Satisfied.
            </p>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#E9EDEF] font-['Outfit']"
                data-testid={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </h2>
              <button className="text-[#25D366] hover:text-[#1DA851] text-sm font-medium">
                See all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryProducts.map((product) => {
                const quantity = getItemQuantity(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-[#202C33] rounded-xl border border-[#2A3942] hover:border-[#25D366]/50 transition-colors overflow-hidden h-full"
                    data-testid={`product-card-${product.id}`}
                  >
                    <div className="flex md:flex-col gap-4 p-4 h-full">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 md:w-full md:h-48 object-cover rounded-lg ring-1 ring-white/10"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3
                            className="text-base md:text-lg font-medium text-[#E9EDEF] mb-1"
                            data-testid={`product-name-${product.id}`}
                          >
                            {product.name}
                          </h3>
                          <p className="text-xs md:text-sm text-[#8696A0] mb-2">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className="text-lg md:text-xl font-bold text-[#E9EDEF]"
                              data-testid={`product-price-${product.id}`}
                            >
                              ₹{product.price.toFixed(2)}
                            </span>
                            {product.original_price && (
                              <span className="text-xs md:text-sm text-[#8696A0] line-through">
                                ₹{product.original_price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Add to Cart Controls */}
                        <div className="flex items-center justify-end md:justify-start">
                          {quantity === 0 ? (
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="bg-[#202C33] hover:bg-[#2A3942] text-[#E9EDEF] border border-[#2A3942] rounded-full px-6 py-2 transition-all active:scale-95 flex items-center gap-2"
                              data-testid={`add-button-${product.id}`}
                            >
                              <Plus className="w-5 h-5" />
                            </button>
                          ) : (
                            <div
                              className="flex items-center gap-2 bg-[#111B21] rounded-full px-2 py-1 border border-[#25D366]"
                              data-testid={`quantity-controls-${product.id}`}
                            >
                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="p-1.5 hover:bg-[#2A3942] rounded-full transition-colors"
                                data-testid={`minus-button-${product.id}`}
                              >
                                <Minus className="w-5 h-5 text-[#25D366]" />
                              </button>
                              <span
                                className="text-[#E9EDEF] font-bold min-w-[24px] text-center"
                                data-testid={`quantity-display-${product.id}`}
                              >
                                {quantity}
                              </span>
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="p-1.5 hover:bg-[#2A3942] rounded-full transition-colors"
                                data-testid={`plus-button-${product.id}`}
                              >
                                <Plus className="w-5 h-5 text-[#25D366]" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Floating View Cart Button */}
      {getTotalItems() > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] p-4 z-50 backdrop-blur-lg md:left-auto md:right-4 md:bottom-4 md:w-auto md:rounded-full md:border"
          data-testid="view-cart-footer"
        >
          <button
            onClick={() => navigate("/cart")}
            className="w-full md:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 px-6 transition-all shadow-lg active:scale-95 text-lg"
            data-testid="view-cart-button"
          >
            View cart ({getTotalItems()})
          </button>
        </div>
      )}

      {/* Customization Modal */}
      <CustomizationModal
        isOpen={showCustomization}
        onClose={() => {
          setShowCustomization(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onAddToCart={handleCustomizationComplete}
      />
    </div>
  );
};

export default Catalogue;
