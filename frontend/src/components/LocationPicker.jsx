import React, { useState, useEffect } from "react";
import { MapPin, Navigation, Loader2, ChevronUp } from "lucide-react";
import { toast } from "sonner";

// Shop location: Vatika Chowk, Sector 66, Gurugram
const SHOP_LOCATION = {
  lat: 28.3962,
  lng: 77.0479,
  address: "Vatika Chowk, Sector 66, Gurugram, Haryana 122101",
};

const DELIVERY_RADIUS = 15; // delivery zone (km)
const FREE_DELIVERY_KM = 3; // free delivery limit
const PER_KM_RATE = 10; // ₹ per km after free

// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Check if coordinates are in Gurugram (rough bounding box)
const isInGurugram = (lat, lng) => {
  // Gurugram approximate bounds
  const bounds = {
    north: 28.6,
    south: 28.3,
    east: 77.2,
    west: 76.9,
  };

  return (
    lat >= bounds.south &&
    lat <= bounds.north &&
    lng >= bounds.west &&
    lng <= bounds.east
  );
};

// Reverse geocoding using browser's API (basic)
const getAddressFromCoords = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      {
        headers: {
          "accept-language": "en",
          "User-Agent": "MrMuttonApp/1.0",
        },
      },
    );

    const data = await response.json();

    return data.display_name || "Address not found";
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return "Unable to fetch address";
  }
};

const LocationPicker = ({ onLocationSelect, currentLocation }) => {
  const [loading, setLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    currentLocation || null,
  );
  const [landmark, setLandmark] = useState("");
  const [isExpanded, setIsExpanded] = useState(!currentLocation);
  const [locationQuery, setLocationQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (currentLocation) {
      setSelectedLocation(currentLocation);
      setIsExpanded(false);
    }
  }, [currentLocation]);

  useEffect(() => {
    const q = locationQuery.trim();
    if (q.length < 3) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSuggesting(true);
      try {
        const viewbox = "76.8,28.8,77.4,27.9"; // NCR area
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(q)}&limit=5&countrycodes=in&viewbox=${viewbox}&bounded=1`,
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsSuggesting(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [locationQuery]);

  // const fetchCurrentLocation = () => {
  //   // Check if geolocation is supported
  //   if (!navigator.geolocation) {
  //     toast.error('Geolocation is not supported by your browser');
  //     return;
  //   }

  //   setLoading(true);

  //   // Request location with better options
  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       try {
  //       const { latitude, longitude } = position.coords;

  //         console.log('Location fetched:', latitude, longitude);

  //       // Check if in Gurugram
  //       const inGurugram = isInGurugram(latitude, longitude);

  //       if (!inGurugram) {
  //         setLoading(false);
  //         toast.error('Your area is out of our delivery zone', {
  //             description: 'We only deliver in Gurugram'
  //           });
  //            // Still show location but mark as out of zone
  //           const distance = calculateDistance(latitude, longitude, SHOP_LOCATION.lat, SHOP_LOCATION.lng);
  //           const address = await getAddressFromCoords(latitude, longitude);

  //           const location = {
  //             lat: latitude,
  //             lng: longitude,
  //             distance: distance,
  //             address: address,
  //             inDeliveryZone: false
  //           };

  //           setSelectedLocation(location);
  //         return;
  //       }

  //       const distance = calculateDistance(
  //         latitude,
  //         longitude,
  //         SHOP_LOCATION.lat,
  //         SHOP_LOCATION.lng
  //       );

  //       const address = await getAddressFromCoords(latitude, longitude);

  //       const location = {
  //         lat: latitude,
  //         lng: longitude,
  //         distance: distance,
  //         address: address,
  //         inDeliveryZone: true
  //       };

  //       setSelectedLocation(location);
  //       onLocationSelect(location);
  //       setLoading(false);
  //       setIsExpanded(false);
  //       toast.success('Location fetched successfully!', {
  //         description: `Distance: ${distance.toFixed(2)} km from shop`
  //       });
  //       } catch (error) {
  //         console.error('Error processing location:', error);
  //         setLoading(false);
  //         toast.error('Failed to process location');
  //       }
  //     },
  //     (error) => {
  //       setLoading(false);

  //       console.error('Geolocation error:', error);

  //       // More detailed error messages
  //       let errorMessage = 'Unable to fetch location';
  //       let errorDescription = '';

  //       switch(error.code) {
  //         case error.PERMISSION_DENIED:
  //           errorMessage = 'Location permission denied';
  //           errorDescription = 'Please allow location access in your browser settings';
  //           break;
  //         case error.POSITION_UNAVAILABLE:
  //           errorMessage = 'Location unavailable';
  //           errorDescription = 'Your device cannot determine location';
  //           break;
  //         case error.TIMEOUT:
  //           errorMessage = 'Location request timed out';
  //           errorDescription = 'Please try again';
  //           break;
  //         default:
  //           errorMessage = 'Location error occurred';
  //           errorDescription = 'Please enter address manually';
  //       }

  //       toast.error(errorMessage, { description: errorDescription });
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 15000, // Increased timeout to 15 seconds
  //       maximumAge: 0
  //     }
  //   );
  // };

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude, accuracy } = position.coords;

          console.log("Location:", latitude, longitude, "Accuracy:", accuracy);

          // ✅ Accuracy check
          if (accuracy > 150) {
            toast.error("Low accuracy. Turn on GPS or move outside");
          }

          // ✅ Distance calculation
          const distance = calculateDistance(
            latitude,
            longitude,
            SHOP_LOCATION.lat,
            SHOP_LOCATION.lng,
          );

          // ✅ Wrong location detect (important)
          if (distance > 25) {
            toast.error("Location seems incorrect. Please enter manually");
            setLoading(false);
            return;
          }

          // ✅ Get real address
          const address = await getAddressFromCoords(latitude, longitude);

          // ✅ Delivery zone check
          const inZone = distance <= DELIVERY_RADIUS;

          const location = {
            lat: latitude,
            lng: longitude,
            address,
            inDeliveryZone: inZone,
          };

          setSelectedLocation(location);
          onLocationSelect(location);

          setLoading(false);
          setIsExpanded(false);

          if (inZone) {
            toast.success("Location detected successfully 🎉");
          } else {
            toast.error("Outside delivery zone");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Failed to fetch location");
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          toast.error("Allow location permission");
        } else {
          toast.error("Location error");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  };

  const applySelectedLocation = (place) => {
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);

    const distance = calculateDistance(
      lat,
      lng,
      SHOP_LOCATION.lat,
      SHOP_LOCATION.lng,
    );

    const inZone = distance <= DELIVERY_RADIUS;

    const location = {
      lat,
      lng,
      address: place.display_name,
      inDeliveryZone: inZone,
    };

    setSelectedLocation(location);
    onLocationSelect(location);
    setLocationQuery("");
    setSuggestions([]);
    setIsExpanded(false);

    if (inZone) {
      toast.success("Location selected 🎉");
    } else {
      toast.error("Outside delivery zone");
    }
  };

  const handleManualAddressChange = (value) => {
    setManualAddress(value);

    // Auto-validate for Gurugram
    if (
      value.toLowerCase().includes("gurugram") ||
      value.toLowerCase().includes("gurgaon")
    ) {
      // Simulate location with default distance
      const location = {
        address: value,
        // distance: 5, // Default distance for manual entry
        inDeliveryZone: true,
        isManual: true,
      };
      setSelectedLocation(location);
      onLocationSelect(location);
    } else if (value.length > 10) {
      // If address doesn't mention Gurugram and is long enough
      toast.error("Please enter a Gurugram address");
    }
  };

  return (
    <div className="space-y-3">
      {/* Selected Location Display (Collapsed View) */}
      {selectedLocation && !isExpanded && (
        <div
          className="bg-[#111B21] rounded-xl p-4 border border-[#F59E0B] cursor-pointer hover:bg-[#1A2530] transition-colors\"
          onClick={() => setIsExpanded(true)}
          data-testid="selected-location-collapsed\"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0\">
              <h3 className="text-[#E9EDEF] font-semibold text-sm mb-1">
                Delivery Location
              </h3>
              <p className="text-[#8696A0] text-sm line-clamp-1">
                {selectedLocation.address}
              </p>
              {landmark && (
                <p className="text-[#8696A0] text-xs mt-1">
                  Landmark: {landmark}
                </p>
              )}
            </div>
            <ChevronUp className="w-5 h-5 text-[#8696A0] flex-shrink-0" />
          </div>
        </div>
      )}

      {/* Expanded Location Picker */}
      {isExpanded && (
        <div className="space-y-3">
          {/* Current Location Button */}
          <button
            type="button"
            onClick={fetchCurrentLocation}
            disabled={loading}
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium rounded-xl py-3.5 px-4 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="fetch-location-button"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Fetching location...
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5" />
                Use Current Location
              </>
            )}
          </button>

          {/* Help text for location access */}
          <p className="text-xs text-[#8696A0] text-center">
            Click "Allow" when browser asks for location permission
          </p>

          <div className="relative">
            <div className="flex items-center gap-2 my-3">
              <div className="flex-1 h-px bg-[#2A3942]"></div>
              <span className="text-xs text-[#8696A0]">OR</span>
              <div className="flex-1 h-px bg-[#2A3942]"></div>
            </div>
          </div>

          {/* Manual Address Input */}
          <div>
            <div className="relative mb-3">
              <MapPin className="absolute left-4 top-4 w-5 h-5 text-[#8696A0] pointer-events-none z-10" />
              <input
                type="text"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="bg-[#2A3942] border border-[#2A3942] text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-2 focus:ring-[#25D366] focus:border-transparent rounded-xl pl-12 pr-4 py-3.5 w-full text-sm"
                placeholder="Start typing your area / society / sector..."
              />
              {locationQuery.length >= 3 && (
                <div className="mt-2 bg-[#111B21] border border-[#2A3942] rounded-xl overflow-hidden">
                  {isSuggesting ? (
                    <div className="p-3 text-sm text-[#8696A0]">
                      Searching...
                    </div>
                  ) : (
                    suggestions.map((place) => (
                      <button
                        key={place.place_id}
                        onClick={() => applySelectedLocation(place)}
                        className="w-full text-left p-3 hover:bg-[#1A2530] border-b border-[#2A3942] last:border-0"
                      >
                        <div className="text-sm text-[#E9EDEF]">
                          {place.display_name.split(",")[0]}
                        </div>
                        <div className="text-xs text-[#8696A0]">
                          {place.display_name}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Landmark Input (Optional) */}
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="bg-[#2A3942] border border-[#2A3942] text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-2 focus:ring-[#25D366] focus:border-transparent rounded-xl px-4 py-3 w-full text-sm"
              placeholder="Landmark (optional)"
              data-testid="landmark-input"
            />
          </div>

          <p className="text-xs text-[#8696A0] text-center italic">
            Auto-detected location may not be exact. Please verify.
          </p>
        </div>
      )}

      {/* Delivery Zone Status */}
      {selectedLocation && (
        <div
          className={`rounded-xl p-3 flex items-start gap-2 ${
            selectedLocation.inDeliveryZone
              ? "bg-[#22C55E]/10 border border-[#22C55E]/30"
              : "bg-[#EF4444]/10 border border-[#EF4444]/30"
          }`}
          data-testid="delivery-zone-status"
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              selectedLocation.inDeliveryZone ? "bg-[#22C55E]" : "bg-[#EF4444]"
            }`}
          >
            {selectedLocation.inDeliveryZone ? (
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
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                selectedLocation.inDeliveryZone
                  ? "text-[#22C55E]"
                  : "text-[#EF4444]"
              }`}
            >
              {selectedLocation.inDeliveryZone
                ? "Your location is in our delivery zone! ✓"
                : "Your area is out of our delivery zone"}
            </p>
            {selectedLocation.inDeliveryZone && (
              <p className="text-xs text-[#8696A0] mt-1">
                Distance: {selectedLocation.distance?.toFixed(2)} km •
                {selectedLocation.distance <= FREE_DELIVERY_KM
                  ? " Free Delivery"
                  : ` ₹${Math.max(0, Math.round(selectedLocation.distance - FREE_DELIVERY_KM)) * PER_KM_RATE} delivery charge`}
              </p>
            )}
            {/* {selectedLocation.inDeliveryZone && selectedLocation.lat && (
              <p className="text-xs text-[#8696A0] mt-1">
                Location selected successfully
              </p>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
