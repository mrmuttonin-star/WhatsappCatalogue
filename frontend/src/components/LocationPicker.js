import React, { useState, useEffect, useMemo } from 'react';
import { MapPin, Navigation, Loader2, Search, ChevronUp, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

// Shop location: Vatika Chowk, Sector 66, Gurugram
const SHOP_LOCATION = {
  lat: 28.4089,
  lng: 77.0337,
  name: 'Vatika Chowk, Sector 66, Gurugram'
};

const DELIVERY_RADIUS_KM = 15;

// Calculate distance using Haversine formula (same as reference)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const LocationPicker = ({ onLocationSelect, currentLocation }) => {
  const [loading, setLoading] = useState(false);
  const [locationQuery, setLocationQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(currentLocation || null);
  const [landmark, setLandmark] = useState('');
  const [isExpanded, setIsExpanded] = useState(!currentLocation);

  useEffect(() => {
    if (currentLocation) {
      setSelectedLocation(currentLocation);
      setIsExpanded(false);
    }
  }, [currentLocation]);

  // Fetch suggestions from Nominatim API (like reference code)
  useEffect(() => {
    const q = locationQuery.trim();
    if (!isExpanded) return;
    if (q.length < 3) {
      setSuggestions([]);
      setIsSuggesting(false);
      return;
    }
    if (q.length > 200) return;

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      setIsSuggesting(true);
      try {
        // Bounded to NCR region
        const viewbox = '76.8,28.8,77.4,27.9'; // left,top,right,bottom
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(q)}&addressdetails=1&limit=6&countrycodes=in&viewbox=${viewbox}&bounded=1`;
        const res = await fetch(url, {
          signal: controller.signal,
          headers: { 'accept-language': 'en', 'User-Agent': 'MrMuttonFoodApp/1.0' }
        });
        const data = await res.json();
        setSuggestions(Array.isArray(data) ? data : []);
      } catch (e) {
        // Ignore aborts
      } finally {
        setIsSuggesting(false);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [locationQuery, isExpanded]);

  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation not supported', {
        description: 'Your browser does not support location services'
      });
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude, accuracy } = position.coords;

          console.log('Location fetched:', latitude, longitude, 'Accuracy:', accuracy);

          // Accuracy check
          if (accuracy > 150) {
            toast.error('Low location accuracy', {
              description: 'Please turn on GPS or move near a window'
            });
          }

          // Distance calculation
          const distance = calculateDistance(
            latitude,
            longitude,
            SHOP_LOCATION.lat,
            SHOP_LOCATION.lng
          );

          const isInZone = distance <= DELIVERY_RADIUS_KM;

          // Sanity check (wrong city / old location)
          if (distance > 20) {
            toast.error('Location mismatch', {
              description: 'Detected location seems incorrect. Please enter address manually.'
            });
            setLoading(false);
            return;
          }

          // Reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                'accept-language': 'en',
                'User-Agent': 'MrMuttonFoodApp/1.0'
              }
            }
          );

          const data = await response.json();

          const location = {
            lat: latitude,
            lng: longitude,
            distance: distance,
            address: data.display_name || `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`,
            inDeliveryZone: isInZone
          };

          setSelectedLocation(location);
          onLocationSelect(location);
          setLoading(false);
          setIsExpanded(false);

          if (isInZone) {
            toast.success('Great news! 🎉', {
              description: `You're within our ${DELIVERY_RADIUS_KM}km delivery zone`
            });
          } else {
            toast.error('Out of delivery zone', {
              description: 'Your area is out of our delivery zone'
            });
          }
        } catch (error) {
          console.error('Location processing error:', error);
          toast.error('Location error', {
            description: 'Failed to detect location. Please enter address manually.'
          });
          setLoading(false);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        
        let errorMessage = 'Unable to fetch location';
        let errorDescription = 'Please enter address manually';
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permission denied';
            errorDescription = 'Please allow location access in browser settings';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location unavailable';
            errorDescription = 'Your device cannot determine location';
            break;
          case error.TIMEOUT:
            errorMessage = 'Request timed out';
            errorDescription = 'Please try again';
            break;
        }
        
        toast.error(errorMessage, { description: errorDescription });
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    );
  };

  const applySelectedLocation = (displayName, latitude, longitude) => {
    const distance = calculateDistance(
      latitude,
      longitude,
      SHOP_LOCATION.lat,
      SHOP_LOCATION.lng
    );

    const isInZone = distance <= DELIVERY_RADIUS_KM;

    const location = {
      lat: latitude,
      lng: longitude,
      distance: distance,
      address: displayName,
      inDeliveryZone: isInZone
    };

    setSelectedLocation(location);
    onLocationSelect(location);
    setIsExpanded(false);
    setLocationQuery('');
    setSuggestions([]);

    if (isInZone) {
      toast.success('Great news! 🎉', {
        description: `You're within our ${DELIVERY_RADIUS_KM}km delivery zone`
      });
    } else {
      toast.error('Out of delivery zone', {
        description: 'Your area is out of our delivery zone'
      });
    }
  };

  const searchManualAddress = async () => {
    const q = locationQuery.trim();
    if (!q) {
      toast.error('Enter an address', {
        description: 'Please type your delivery address'
      });
      return;
    }

    // If we have suggestions, pick the top one
    if (suggestions.length > 0) {
      const top = suggestions[0];
      applySelectedLocation(top.display_name, parseFloat(top.lat), parseFloat(top.lon));
      return;
    }

    setIsSuggesting(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(q)}&addressdetails=1&limit=1&countrycodes=in`,
        { headers: { 'accept-language': 'en', 'User-Agent': 'MrMuttonFoodApp/1.0' } }
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0];
        applySelectedLocation(display_name, parseFloat(lat), parseFloat(lon));
      } else {
        toast.error('Address not found', {
          description: 'Try adding sector/landmark (e.g., \"Spaze Plaza, Sector 69 Gurugram\")'
        });
      }
    } catch (error) {
      toast.error('Search failed', {
        description: 'Please try again'
      });
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <div className="space-y-3">
      {/* Selected Location Display (Collapsed View) */}
      {selectedLocation && !isExpanded && (
        <div 
          className="bg-[#111B21] rounded-xl p-4 border border-[#F59E0B] cursor-pointer hover:bg-[#1A2530] transition-colors"
          onClick={() => setIsExpanded(true)}
          data-testid="selected-location-collapsed"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0\">
              <h3 className="text-[#E9EDEF] font-semibold text-sm mb-1">Delivery Location</h3>
              <p className="text-[#8696A0] text-sm line-clamp-2">{selectedLocation.address}</p>
              {landmark && (
                <p className="text-[#8696A0] text-xs mt-1">Landmark: {landmark}</p>
              )}
            </div>
            <ChevronUp className="w-5 h-5 text-[#8696A0] flex-shrink-0" />
          </div>
        </div>
      )}

      {/* Expanded Location Picker */}
      {isExpanded && (
        <div className="space-y-3">
          {/* Search Input with Suggestions */}
          <div className="relative">
            <div className="flex items-center gap-2 rounded-xl border border-[#2A3942] bg-[#2A3942] px-4 py-3">
              <MapPin className="w-5 h-5 text-[#8696A0] flex-shrink-0" />
              <input
                type="text"
                placeholder="Start typing your area / society / sector…"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && searchManualAddress()}
                className="flex-1 bg-transparent outline-none text-[#E9EDEF] text-sm placeholder:text-[#8696A0]"
                autoComplete="off"
                data-testid="location-search-input"
              />
              <button
                type="button"
                onClick={searchManualAddress}
                className="p-1 rounded-md hover:bg-[#3A4952] transition-colors"
                aria-label="Search address"
              >
                {isSuggesting ? (
                  <Loader2 className="w-5 h-5 animate-spin text-[#8696A0]" />
                ) : (
                  <Search className="w-5 h-5 text-[#8696A0]" />
                )}
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {locationQuery.trim().length >= 3 && (suggestions.length > 0 || isSuggesting) && (
              <div className="mt-2 w-full overflow-hidden rounded-xl border border-[#2A3942] bg-[#202C33] shadow-lg">
                <div className="max-h-40 overflow-auto">
                  {isSuggesting && suggestions.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-[#8696A0]">Searching…</div>
                  ) : (
                    suggestions.map((s) => (
                      <button
                        key={s.place_id}
                        type="button"
                        onClick={() =>
                          applySelectedLocation(s.display_name, parseFloat(s.lat), parseFloat(s.lon))
                        }
                        className="w-full text-left px-4 py-3 hover:bg-[#2A3942] transition-colors border-b border-[#2A3942]/50 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-[#E9EDEF] line-clamp-1">
                          {s.display_name.split(',')[0]}
                        </div>
                        <div className="text-xs text-[#8696A0] line-clamp-1 mt-0.5">
                          {s.display_name}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-[#2A3942]" />
            <span className="text-xs text-[#8696A0]">or</span>
            <div className="flex-1 h-px bg-[#2A3942]" />
          </div>

          {/* Fetch Current Location Button */}
          <button
            type="button"
            onClick={fetchCurrentLocation}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="fetch-location-button"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Fetching location...</span>
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5" />
                <span>Use Current Location</span>
              </>
            )}
          </button>

          <p className="text-xs text-[#8696A0] text-center">
            Auto-detected location may not be exact. Please verify.
          </p>

          {/* Landmark Input */}
          {selectedLocation && selectedLocation.inDeliveryZone && (
            <input
              type="text"
              placeholder="Landmark (optional)"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full px-4 py-3 bg-[#2A3942] border border-[#2A3942] text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-2 focus:ring-[#25D366] focus:border-transparent rounded-xl text-sm"
              data-testid="landmark-input"
            />
          )}
        </div>
      )}

      {/* Delivery Zone Status */}
      {selectedLocation && selectedLocation.inDeliveryZone !== undefined && (
        <div 
          className={`rounded-xl p-3 flex items-start gap-2 ${
            selectedLocation.inDeliveryZone 
              ? 'bg-[#22C55E]/10 border border-[#22C55E]/30' 
              : 'bg-[#EF4444]/10 border border-[#EF4444]/30'
          }`}
          data-testid="delivery-zone-status"
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
            selectedLocation.inDeliveryZone ? 'bg-[#22C55E]' : 'bg-[#EF4444]'
          }`}>
            {selectedLocation.inDeliveryZone ? (
              <CheckCircle2 className="w-3 h-3 text-white" />
            ) : (
              <XCircle className="w-3 h-3 text-white" />
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${
              selectedLocation.inDeliveryZone ? 'text-[#22C55E]' : 'text-[#EF4444]'
            }`}>
              {selectedLocation.inDeliveryZone 
                ? 'Your location is in our delivery zone! ✓' 
                : 'Your area is out of our delivery zone'}
            </p>
            {selectedLocation.inDeliveryZone && (
              <p className="text-xs text-[#8696A0] mt-1">
                Distance: {selectedLocation.distance.toFixed(2)} km from {SHOP_LOCATION.name}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Service Area Info */}
      <div className="flex items-center gap-2 p-3 bg-[#F59E0B]/5 rounded-xl">
        <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
        <p className="text-xs text-[#8696A0]">
          We deliver within <span className="font-semibold text-[#E9EDEF]">{DELIVERY_RADIUS_KM}km</span> of {SHOP_LOCATION.name}
        </p>
      </div>
    </div>
  );
};

export default LocationPicker;
