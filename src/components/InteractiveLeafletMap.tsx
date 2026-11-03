import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
  Globe,
  Clock,
  ArrowRight,
  Building2,
} from "lucide-react";

export interface OfficeLocation {
  id: string;
  name: string;
  country: string;
  city: string;
  state: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  coords: [number, number]; // [lat, lng]
  zoomLevel: number;
  timeZone: string;
  teamSize?: string;
  isHQ?: boolean;
}

export const THREE_LOCATIONS: OfficeLocation[] = [
  {
    id: "united-states",
    name: "ConfigUSA Global Headquarters",
    country: "United States",
    city: "Plainsboro",
    state: "New Jersey",
    tag: "Global Headquarters",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536",
    phone: "+1 (609) 934-3184",
    email: "usa@configusa.com",
    coords: [40.3340, -74.5938],
    zoomLevel: 12,
    timeZone: "EST (UTC-5)",
    teamSize: "150+ Onshore Experts",
    isHQ: true,
  },
  {
    id: "canada",
    name: "Toronto Canadian Hub",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    tag: "North America Hub",
    address: "1585 Markham Road, Suite # 309, Toronto, ON M1B 2W1",
    phone: "+1 (647) 557-6968",
    email: "canada@configusa.com",
    coords: [43.7915, -79.2274],
    zoomLevel: 12,
    timeZone: "EST (UTC-5)",
    teamSize: "50+ Technology Consultants",
  },
  {
    id: "india",
    name: "Global Delivery & Technology Center",
    country: "India",
    city: "Hyderabad",
    state: "Telangana",
    tag: "Offshore Delivery & Tech Hub",
    address: "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
    coords: [17.4474, 78.3762],
    zoomLevel: 12,
    timeZone: "IST (UTC+5:30)",
    teamSize: "350+ Global Engineers",
  },
];

export function InteractiveLeafletMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [id: string]: any }>({});
  const [mapReady, setMapReady] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(THREE_LOCATIONS[0]);
  const [viewMode, setViewMode] = useState<string>("united-states");

  // Initialize Leaflet map safely on client side
  useEffect(() => {
    let isCancelled = false;

    async function loadMap() {
      if (typeof window === "undefined" || !mapContainerRef.current) return;

      const L = (await import("leaflet")).default;
      if (isCancelled || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initial view centered on Plainsboro NJ HQ
      const map = L.map(mapContainerRef.current, {
        center: THREE_LOCATIONS[0].coords,
        zoom: 10,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // OpenStreetMap global tiles (100% free, no API key required, no watermarks)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
      setMapReady(true);
    }

    loadMap();

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers when selectedOffice changes
  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;
    let isCancelled = false;

    async function updatePins() {
      const L = (await import("leaflet")).default;
      if (isCancelled || !mapInstanceRef.current) return;

      const map = mapInstanceRef.current;

      // Clear existing markers
      Object.values(markersRef.current).forEach((m: any) => m.remove());
      markersRef.current = {};

      // Add pins for the 3 locations
      THREE_LOCATIONS.forEach((loc) => {
        const isSelected = selectedOffice.id === loc.id;

        // Custom circular pin matching LanceSoft interactive map style
        const customIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: isSelected
            ? `<div class="relative flex items-center justify-center">
                 <div class="absolute -inset-2 rounded-full bg-red-500/30 animate-ping"></div>
                 <div class="absolute -inset-1 rounded-full bg-red-500/40"></div>
                 <div class="relative h-6 w-6 rounded-full bg-red-600 border-[2.5px] border-white shadow-lg flex items-center justify-center">
                   <div class="h-2 w-2 rounded-full bg-white"></div>
                 </div>
               </div>`
            : `<div class="relative flex items-center justify-center group cursor-pointer">
                 <div class="h-4.5 w-4.5 rounded-full bg-[#0b2545] border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-125 group-hover:bg-blue-600"></div>
               </div>`,
          iconSize: isSelected ? [30, 30] : [20, 20],
          iconAnchor: isSelected ? [15, 15] : [10, 10],
        });

        const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);

        marker.on("click", () => {
          setSelectedOffice(loc);
          setViewMode(loc.id);
          map.flyTo(loc.coords, loc.zoomLevel, { duration: 1 });
        });

        markersRef.current[loc.id] = marker;
      });
    }

    updatePins();

    return () => {
      isCancelled = true;
    };
  }, [mapReady, selectedOffice]);

  // Click on office selector button
  const handleSelectOffice = (loc: OfficeLocation) => {
    setSelectedOffice(loc);
    setViewMode(loc.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(loc.coords, loc.zoomLevel, { duration: 1.2 });
    }
  };

  // Show all 3 locations on map
  const handleShowAll = async () => {
    setViewMode("all");
    if (mapInstanceRef.current) {
      const L = (await import("leaflet")).default;
      const bounds = L.latLngBounds(THREE_LOCATIONS.map((l) => l.coords));
      mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 5, duration: 1.2 });
    }
  };

  return (
    <div className="w-full">
      {/* ── Outer Card matching LanceSoft Interactive Map Style ── */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        {/* Top Header Strip */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm sm:text-base font-bold text-[#071326] tracking-tight">
              3 Strategic Locations · Global Delivery Network
            </span>
          </div>

          {/* Quick Selector Pills (NO flag emojis) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleShowAll}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === "all"
                  ? "bg-[#07172f] text-[#f5a623] shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe className="h-3.5 w-3.5 inline mr-1" />
              All 3 Locations
            </button>
            {THREE_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleSelectOffice(loc)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedOffice.id === loc.id && viewMode !== "all"
                    ? "bg-[#07172f] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                {loc.country}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Office Detail Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
          {/* Left/Main Column: Leaflet Interactive Map Canvas */}
          <div className="lg:col-span-7 xl:col-span-8 relative h-[380px] sm:h-[440px] lg:h-full bg-slate-100">
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Floating Map Legend Indicator */}
            <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-4 px-4 py-2 rounded-xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#0b2545] border border-white" />
                <span>Office Location</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-600 border border-white" />
                <span>Selected Office</span>
              </div>
            </div>

            {/* Reset View Button */}
            <button
              onClick={() => handleSelectOffice(selectedOffice)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
            >
              Focus Office
            </button>
          </div>

          {/* Right Column: Active Office Detail Card + Fast Location Switcher */}
          <div className="lg:col-span-5 xl:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/90 bg-white flex flex-col justify-between">
            {/* Top Section: Highlighted Selected Office */}
            <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                  {selectedOffice.tag}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {selectedOffice.timeZone}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-[#071326] leading-snug">
                {selectedOffice.name}
              </h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                {selectedOffice.city}, {selectedOffice.state} • {selectedOffice.country}
              </p>

              {/* Physical Address */}
              <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200/90 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{selectedOffice.address}</span>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-slate-600">
                  <a
                    href={`tel:${selectedOffice.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-1.5 font-bold text-[#071326] hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#f5a623]" />
                    <span>{selectedOffice.phone}</span>
                  </a>
                  <a
                    href={`mailto:${selectedOffice.email}`}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>{selectedOffice.email}</span>
                  </a>
                </div>

                {selectedOffice.teamSize && (
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Presence:</span> {selectedOffice.teamSize}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${selectedOffice.name}, ${selectedOffice.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#07172f] hover:bg-[#0d2345] px-4 py-2.5 text-xs font-bold text-white transition-all shadow-xs"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#f5a623]" />
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition-all"
                >
                  <span>Inquire</span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Bottom Section: Clickable List of the 3 Locations */}
            <div className="p-5 sm:p-6 space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Office Location
              </p>
              {THREE_LOCATIONS.map((loc) => {
                const isCurrent = loc.id === selectedOffice.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => handleSelectOffice(loc)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isCurrent
                        ? "bg-blue-50/90 border border-blue-200 shadow-xs"
                        : "hover:bg-slate-50 border border-slate-200/80 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`h-3 w-3 rounded-full shrink-0 ${
                          isCurrent ? "bg-red-600 ring-4 ring-red-100" : "bg-blue-600"
                        }`}
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#071326] truncate">
                          {loc.city}, {loc.country}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">{loc.name}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                      {loc.tag.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
