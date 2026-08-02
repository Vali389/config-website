import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Building2,
  CheckCircle2,
  ExternalLink,
  X,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import interactiveMapImg from "@/assets/interactive-map.png";

interface LocationDetail {
  id: string;
  region: string;
  badge: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  pinColor: "blue" | "orange";
  coords: { x: number; y: number };
  mapUrl: string;
  points: string[];
  teamSize: string;
  timeZone: string;
}

const LOCATIONS_DATA: LocationDetail[] = [
  {
    id: "north-america",
    region: "North America (HQ)",
    badge: "Headquarters & Onshore Lead",
    role: "Client Partnership & Onshore Delivery",
    address: "1001 Woodbridge Center Dr, Woodbridge, NJ 07095, USA",
    phone: "+1 (800) 555-0199",
    email: "usa@configusa.com",
    pinColor: "blue",
    coords: { x: 23.5, y: 36.5 },
    mapUrl: "https://maps.google.com/?q=1001+Woodbridge+Center+Dr,+Woodbridge,+NJ+07095",
    teamSize: "150+ Onshore Experts",
    timeZone: "EST (UTC-5)",
    points: [
      "Strategic Account Management & Enterprise Consulting",
      "Onshore Technology Leaders & Architecture Squads",
      "Real-time Client Support & Same Timezone Alignment",
      "Executive Relationship & Contract Management",
    ],
  },
  {
    id: "india",
    region: "India (Global Delivery Center)",
    badge: "Offshore Engineering Hub",
    role: "Global Delivery & Engineering Center",
    address: "HITEC City, Hyderabad, Telangana 500081, India",
    phone: "+91 40 6600 8800",
    email: "india@configusa.com",
    pinColor: "orange",
    coords: { x: 69.8, y: 48.5 },
    mapUrl: "https://maps.google.com/?q=HITEC+City,+Hyderabad,+Telangana,+India",
    teamSize: "350+ Global Engineers",
    timeZone: "IST (UTC+5:30)",
    points: [
      "24/7 Continuous Engineering & Managed Operations",
      "Dedicated Full-Stack & Generative AI Delivery Squads",
      "Rapid Scaling Capability & Niche Tech Talent Pools",
      "ISO & SOC-2 Compliant Offshore Security Infrastructure",
    ],
  },
];

export function InteractiveWorldMap() {
  const [selectedLocId, setSelectedLocId] = useState<string | null>("north-america");
  const [hoveredLocId, setHoveredLocId] = useState<string | null>(null);

  const selectedLoc = LOCATIONS_DATA.find((l) => l.id === selectedLocId);

  return (
    <div className="relative w-full overflow-hidden bg-[#040c1a] py-10 px-4 sm:px-6 lg:px-8 text-white rounded-3xl border border-blue-900/40 shadow-2xl">
      {/* Background glow ambiance */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[120px]" />

      {/* Header controls */}
      <div className="relative z-20 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Global Presence
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Click any location pin to view site details
          </h3>
        </div>

        {/* Quick select location buttons */}
        <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md self-start md:self-auto">
          {LOCATIONS_DATA.map((loc) => {
            const isSelected = selectedLocId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocId(loc.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? loc.pinColor === "blue"
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      : "bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.6)]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isSelected ? "animate-ping" : ""
                  } ${loc.pinColor === "blue" ? "bg-blue-300" : "bg-amber-300"}`}
                />
                {loc.region.split(" ")[0]} {loc.id === "north-america" ? "HQ" : "Delivery Center"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full aspect-[16/9] min-h-[400px] max-h-[620px] rounded-2xl overflow-hidden border border-blue-500/20 shadow-inner group">
        {/* Futuristic map image background */}
        <img
          src={interactiveMapImg}
          alt="ConfigUSA Interactive World Map"
          className="w-full h-full object-cover select-none filter brightness-105 contrast-110"
        />

        {/* Subtle grid line overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(96, 165, 250, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Location Pins */}
        {LOCATIONS_DATA.map((loc) => {
          const isSelected = selectedLocId === loc.id;
          const isHovered = hoveredLocId === loc.id;
          const isBlue = loc.pinColor === "blue";

          return (
            <div
              key={loc.id}
              style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-full z-30 cursor-pointer group/pin"
              onClick={() => setSelectedLocId(isSelected ? null : loc.id)}
              onMouseEnter={() => setHoveredLocId(loc.id)}
              onMouseLeave={() => setHoveredLocId(null)}
            >
              {/* Pulsing radar rings underneath pin base */}
              <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    isBlue ? "border-blue-400/80 bg-blue-500/20" : "border-amber-400/80 bg-amber-500/20"
                  } animate-ping`}
                  style={{ width: isSelected ? "75px" : "45px", height: isSelected ? "75px" : "45px", animationDuration: "2.5s" }}
                />
                <span
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    isBlue ? "border-blue-400/40 bg-blue-500/10" : "border-amber-400/40 bg-amber-500/10"
                  } animate-pulse`}
                  style={{ width: "110px", height: "110px" }}
                />
              </div>

              {/* Pin Icon Teardrop */}
              <motion.div
                animate={{
                  y: isSelected || isHovered ? -8 : 0,
                  scale: isSelected ? 1.25 : isHovered ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="relative flex flex-col items-center"
              >
                {/* Glowing pin badge */}
                <div
                  className={`relative flex items-center justify-center h-12 w-10 sm:h-14 sm:w-12 rounded-t-full rounded-br-full shadow-2xl transform rotate-[-45deg] transition-all duration-300 ${
                    isBlue
                      ? "bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-800 border-2 border-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                      : "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-700 border-2 border-amber-200 shadow-[0_0_30px_rgba(245,158,11,0.8)]"
                  }`}
                >
                  {/* White circle inside teardrop */}
                  <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white flex items-center justify-center shadow-inner transform rotate-[45deg]">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        isBlue ? "bg-blue-600" : "bg-orange-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Hover Tooltip Label */}
                <AnimatePresence>
                  {(isHovered || isSelected) && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ opacity: 1, y: -4, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className={`absolute bottom-full mb-2 whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-xl border backdrop-blur-md z-40 ${
                        isBlue
                          ? "bg-blue-950/95 border-blue-400/50 text-blue-200"
                          : "bg-amber-950/95 border-amber-400/50 text-amber-200"
                      }`}
                    >
                      {loc.region}
                      <span className="block text-[0.65rem] font-normal text-white/80">Click pin to expand details</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}

        {/* Helper instruction floating badge inside map */}
        {!selectedLocId && (
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 border border-white/15 text-xs text-white/90 backdrop-blur-md shadow-lg animate-bounce">
            <MapPin className="h-4 w-4 text-blue-400" /> Click location pins on the map to display details
          </div>
        )}
      </div>

      {/* Popover / Modal Details view when location pin is clicked */}
      <AnimatePresence>
        {selectedLoc && (
          <motion.div
            key={selectedLoc.id}
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-6 relative z-30 rounded-3xl bg-slate-900/95 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left"
          >
            {/* Top color accent stripe */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl ${
                selectedLoc.pinColor === "blue"
                  ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                  : "bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600"
              }`}
            />

            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${
                    selectedLoc.pinColor === "blue"
                      ? "bg-gradient-to-br from-blue-500 to-indigo-700 shadow-blue-500/30"
                      : "bg-gradient-to-br from-amber-500 to-orange-700 shadow-amber-500/30"
                  }`}
                >
                  <Building2 className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedLoc.region}
                    </h4>
                    <span
                      className={`px-3 py-0.5 rounded-full text-[0.7rem] font-bold uppercase tracking-wider ${
                        selectedLoc.pinColor === "blue"
                          ? "bg-blue-500/20 border border-blue-400/40 text-blue-300"
                          : "bg-amber-500/20 border border-amber-400/40 text-amber-300"
                      }`}
                    >
                      {selectedLoc.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 mt-1 font-medium">
                    {selectedLoc.role} • {selectedLoc.timeZone}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedLocId(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close location details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Grid Content */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Address & Contacts */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[0.65rem] uppercase font-extrabold tracking-wider text-white/50">
                        Office Location Address
                      </p>
                      <p className="text-sm text-white font-medium mt-0.5 leading-snug">
                        {selectedLoc.address}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-blue-400" /> {selectedLoc.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-blue-400" /> {selectedLoc.email}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedLoc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-lg hover:scale-[1.03] transition-all"
                  >
                    Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all"
                  >
                    Contact Office <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Key Capability Highlights */}
              <div className="lg:col-span-7 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <p className="text-[0.65rem] uppercase font-extrabold tracking-wider text-white/50 mb-3">
                  Site Capabilities & Strategic Operations
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedLoc.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-white/90 leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
