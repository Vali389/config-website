import React, { useState } from "react";
import {
  MapPin,
  Building2,
  ExternalLink,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Users,
  Globe,
} from "lucide-react";

interface LocationDetail {
  id: string;
  country: string;
  region: string;
  badge: string;
  role: string;
  address: string;
  phone: string;
  email?: string;
  embedUrl: string;
  mapUrl: string;
  teamSize: string;
  timeZone: string;
  flag: string;
}

const LOCATIONS_DATA: LocationDetail[] = [
  {
    id: "united-states",
    country: "United States",
    region: "United States (HQ)",
    badge: "Global Headquarters",
    role: "Client Partnership & Executive Delivery",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536, USA",
    phone: "+1 (609) 934-3184",
    email: "usa@configusa.com",
    embedUrl:
      "https://maps.google.com/maps?q=666+Plainsboro+Road,+Suite+1237,+Plainsboro,+NJ+08536&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapUrl:
      "https://maps.google.com/?q=666+Plainsboro+Road,+Suite+1237,+Plainsboro,+NJ+08536",
    teamSize: "150+ Onshore Experts",
    timeZone: "EST (UTC-5)",
    flag: "🇺🇸",
  },
  {
    id: "canada",
    country: "Canada",
    region: "Canada (Toronto Hub)",
    badge: "North America Hub",
    role: "Regional Delivery & Technology Solutions",
    address: "1585 Markham Road, Suite # 309, Toronto, ON M1B 2W1, Canada",
    phone: "+1 (647) 557-6968",
    embedUrl:
      "https://maps.google.com/maps?q=1585+Markham+Road,+Suite+309,+Toronto,+ON+M1B+2W1&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapUrl:
      "https://maps.google.com/?q=1585+Markham+Road,+Suite+309,+Toronto,+ON+M1B+2W1",
    teamSize: "50+ Technology Consultants",
    timeZone: "EST (UTC-5)",
    flag: "🇨🇦",
  },
  {
    id: "india",
    country: "India",
    region: "India (Global Delivery Center)",
    badge: "Offshore Engineering Hub",
    role: "Global Delivery & Innovation Center",
    address:
      "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081, India",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
    embedUrl:
      "https://maps.google.com/maps?q=Trendz+Sapphire,+Vittal+Rao+Nagar,+Madhapur,+Hitech+City,+Hyderabad+500081&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapUrl:
      "https://maps.google.com/?q=Trendz+Sapphire,+Vittal+Rao+Nagar,+Madhapur,+Hitech+City,+Hyderabad+500081",
    teamSize: "350+ Global Engineers",
    timeZone: "IST (UTC+5:30)",
    flag: "🇮🇳",
  },
];

export function InteractiveWorldMap() {
  const [selectedId, setSelectedId] = useState<string>("all");

  const visibleLocations =
    selectedId === "all"
      ? LOCATIONS_DATA
      : LOCATIONS_DATA.filter((l) => l.id === selectedId);

  return (
    <div className="relative w-full space-y-8">
      {/* Location Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-2">
        <button
          onClick={() => setSelectedId("all")}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            selectedId === "all"
              ? "bg-[#071326] text-[#f5a623] shadow-md shadow-slate-900/10"
              : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
          }`}
        >
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> All Locations ({LOCATIONS_DATA.length})
          </span>
        </button>

        {LOCATIONS_DATA.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedId(loc.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedId === loc.id
                ? "bg-[#071326] text-[#f5a623] shadow-md shadow-slate-900/10"
                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>{loc.flag}</span> {loc.country}
            </span>
          </button>
        ))}
      </div>

      {/* Locations Displayed One-by-One with 2-Column Row Layout */}
      <div className="space-y-8">
        {visibleLocations.map((loc) => (
          <div
            key={loc.id}
            className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl hover:border-blue-400/80 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Column 1: Live Interactive Google Map Frame (6 cols) */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 group">
                  <iframe
                    src={loc.embedUrl}
                    title={`${loc.region} Google Map`}
                    className="w-full h-full border-0 filter contrast-[1.02]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Map Floating Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 border border-slate-200 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    <span>{loc.country} Location</span>
                  </div>

                  {/* Open in Google Maps Button */}
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#071326] hover:bg-blue-600 text-white text-xs font-bold shadow-md backdrop-blur-md transition-all hover:scale-105"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Column 2: Office Details & Actions (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-blue-500/20">
                        <Building2 className="h-6 w-6" />
                      </span>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-[#071326] flex items-center gap-2">
                          <span>{loc.flag}</span> {loc.region}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                          {loc.role}
                        </p>
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-[#b26a00] shrink-0">
                      {loc.badge}
                    </span>
                  </div>

                  {/* Physical Address Block */}
                  <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-200/70 text-blue-600 mt-0.5">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                          Office Address
                        </p>
                        <p className="text-sm sm:text-base text-slate-800 font-semibold mt-0.5 leading-relaxed">
                          {loc.address}
                        </p>
                      </div>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="pt-3 border-t border-slate-200/70 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <a
                        href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                        className={`flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:text-blue-600 text-slate-700 transition-colors font-medium shadow-xs ${
                          !loc.email ? "sm:col-span-2" : ""
                        }`}
                      >
                        <Phone className="h-4 w-4 text-[#e89218] shrink-0" />
                        <span className="truncate">{loc.phone}</span>
                      </a>
                      {loc.email && (
                        <a
                          href={`mailto:${loc.email}`}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:text-blue-600 text-slate-700 transition-colors font-medium shadow-xs"
                        >
                          <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                          <span className="truncate">{loc.email}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Operational Metrics */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold">
                      <Clock className="h-3.5 w-3.5 text-blue-600" /> Timezone: {loc.timeZone}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold">
                      <Users className="h-3.5 w-3.5 text-slate-600" /> Team: {loc.teamSize}
                    </span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071326] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.01] transition-all"
                  >
                    Directions in Google Maps <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 hover:border-blue-300 transition-all shadow-xs"
                  >
                    Contact This Office <ArrowRight className="h-4 w-4 text-[#e89218]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
