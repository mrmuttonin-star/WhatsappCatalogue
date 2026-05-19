import React, { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import GreenChutney from "../assets/Green_Chutney.png";
import LachhaPyaj from "../assets/Pyaj.png";
import GulabJamun from "../assets/gulab-jamun.jpeg";
import CutlerySet from "../assets/cutlery.png";

// Add-ons data
const ADD_ONS = {
  extras: [
    {
      id: "chutney",
      name: "Chutney",
      description: "50gm",
      price: 19,
      image: GreenChutney,
    },
    {
      id: "lachha-pyaj",
      name: "Lachha Pyaj",
      description: "Fresh onion rings",
      price: 9,
      image: LachhaPyaj,
    },
  ],
  desserts: [
    {
      id: "gulab-jamun",
      name: "Gulab Jamun",
      description: "2 pieces",
      price: 49,
      image: GulabJamun,
    },
  ],
  mealEssentials: [
    {
      id: "cutlery",
      name: "Cutlery Set",
      description: "Spoon, fork, napkin",
      price: 5,
      image: CutlerySet,
    },
  ],
};

const CustomizationModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState("medium");

  useEffect(() => {
    if (isOpen) {
      setSelectedAddons([]);
      setQuantity(1);
      // Disable body scroll when modal opens
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      }
      return [...prev, addon];
    });
  };

  const isSelected = (addonId) => selectedAddons.some((a) => a.id === addonId);

  const calculateTotal = () => {
    const itemTotal = product.price * quantity;
    const addonsTotal = selectedAddons.reduce(
      (sum, addon) => sum + addon.price,
      0,
    );
    return itemTotal + addonsTotal;
  };

  const handleAddToCart = () => {
    const generateCartId = () => {
      const addonIds = selectedAddons
        .map((a) => a.id)
        .sort()
        .join("-");
      return `${product.id}-${addonIds}`;
    };

    onAddToCart({
      ...product,
      cartId: generateCartId(),
      quantity,
      addons: selectedAddons,
      spiceLevel, // ⭐ ADD THIS
    });
    toast.success(`${product.name} added to cart`);
    onClose();
  };

  if (!product || !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#202C33] rounded-t-3xl z-50 transform transition-transform duration-300 ease-out max-h-[85vh] flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-[#8696A0] rounded-full"></div>
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 px-6 py-4 border-b border-[#2A3942]">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg ring-1 ring-white/10"
          />
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#E9EDEF]">{product.name}</h2>
            <p className="text-sm text-[#8696A0] mt-1">{product.description}</p>
            <p className="text-base font-bold text-[#25D366] mt-1">
              ₹{product.price}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#2A3942] rounded-full transition-colors"
            data-testid="close-customization"
          >
            <X className="w-5 h-5 text-[#8696A0]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Extras Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#E9EDEF] mb-2">
              Extras
            </h3>
            <p className="text-xs text-[#8696A0] mb-3">Add some flavor</p>
            <div className="space-y-2">
              {ADD_ONS.extras.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected(addon.id)
                      ? "border-[#25D366] bg-[#25D366]/5"
                      : "border-[#2A3942] bg-[#111B21]"
                  }`}
                  data-testid={`addon-${addon.id}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-[#E9EDEF] font-medium text-sm">
                        {addon.name}
                      </p>
                      <p className="text-xs text-[#8696A0]">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E9EDEF] font-bold text-sm">
                      ₹{addon.price}
                    </span>
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected(addon.id)
                          ? "border-[#25D366] bg-[#25D366]"
                          : "border-[#8696A0]"
                      }`}
                    >
                      {isSelected(addon.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spice Level Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#E9EDEF] mb-2">
              Spice Level
            </h3>
            <p className="text-xs text-[#8696A0] mb-3">
              Choose your preference
            </p>

            <div className="flex gap-3">
              {["low", "medium", "high"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSpiceLevel(level)}
                  className={`px-4 py-2 rounded-full border text-sm capitalize transition-all ${
                    spiceLevel === level
                      ? "bg-[#25D366] text-white border-[#25D366]"
                      : "bg-[#111B21] text-[#8696A0] border-[#2A3942]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#E9EDEF] mb-2">
              Desserts
            </h3>
            <p className="text-xs text-[#8696A0] mb-3">End on a sweet note</p>
            <div className="space-y-2">
              {ADD_ONS.desserts.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected(addon.id)
                      ? "border-[#25D366] bg-[#25D366]/5"
                      : "border-[#2A3942] bg-[#111B21]"
                  }`}
                  data-testid={`addon-${addon.id}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-[#E9EDEF] font-medium text-sm">
                        {addon.name}
                      </p>
                      <p className="text-xs text-[#8696A0]">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E9EDEF] font-bold text-sm">
                      ₹{addon.price}
                    </span>
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected(addon.id)
                          ? "border-[#25D366] bg-[#25D366]"
                          : "border-[#8696A0]"
                      }`}
                    >
                      {isSelected(addon.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meal Essentials Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#E9EDEF] mb-2">
              Meal Essentials
            </h3>
            <p className="text-xs text-[#8696A0] mb-3">Don't forget these</p>
            <div className="space-y-2">
              {ADD_ONS.mealEssentials.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    isSelected(addon.id)
                      ? "border-[#25D366] bg-[#25D366]/5"
                      : "border-[#2A3942] bg-[#111B21]"
                  }`}
                  data-testid={`addon-${addon.id}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-[#E9EDEF] font-medium text-sm">
                        {addon.name}
                      </p>
                      <p className="text-xs text-[#8696A0]">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E9EDEF] font-bold text-sm">
                      ₹{addon.price}
                    </span>
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected(addon.id)
                          ? "border-[#25D366] bg-[#25D366]"
                          : "border-[#8696A0]"
                      }`}
                    >
                      {isSelected(addon.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer for bottom bar */}
          <div className="h-24"></div>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="border-t border-[#2A3942] bg-[#202C33] px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 bg-[#111B21] rounded-full px-3 py-1.5 border border-[#2A3942]">
              <button
                onClick={() => {
                  if (quantity === 1) {
                    onClose(); // modal band ho jayega (item add nahi hoga)
                  } else {
                    setQuantity(quantity - 1);
                  }
                }}
                className="p-1 hover:bg-[#2A3942] rounded-full transition-colors"
                data-testid="quantity-minus"
              >
                <Minus className="w-4 h-4 text-[#25D366]" />
              </button>
              <span
                className="text-[#E9EDEF] font-bold min-w-[30px] text-center"
                data-testid="quantity-display"
              >
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:bg-[#2A3942] rounded-full transition-colors"
                data-testid="quantity-plus"
              >
                <Plus className="w-4 h-4 text-[#25D366]" />
              </button>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#8696A0]">Total</p>
              <p
                className="text-xl font-bold text-[#25D366]"
                data-testid="modal-total"
              >
                ₹{calculateTotal()}
              </p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95"
            data-testid="add-item-button"
          >
            Add item · ₹{calculateTotal()}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomizationModal;
