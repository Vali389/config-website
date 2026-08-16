import React from "react";
import {
  MapPin,
  Building2,
  ExternalLink,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";

interface LocationDetail {
  id: string;
  region: string;
  badge: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  embedUrl: string;
  mapUrl: string;
  teamSize: string;
  timeZone: string;
  flag: string;
}

const LOCATIONS_DATA: LocationDetail[] = [
  {
    id: "north-america",
    region: "North America (HQ)",
    badge: "Headquarters & Onshore Lead",
    role: "Client Partnership & Onshore Delivery",
    address: "1001 Woodbridge Center Dr, Woodbridge, NJ 07095, USA",
    phone: "+1 (732) 220-2921",
    email: "usa@configusa.com",
    embedUrl:
      "https://maps.google.com/maps?q=1001+Woodbridge+Center+Dr,+Woodbridge,+NJ+07095&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapUrl:
      "https://maps.google.com/?q=1001+Woodbridge+Center+Dr,+Woodbridge,+NJ+07095",
    teamSize: "150+ Onshore Experts",
    timeZone: "EST (UTC-5)",
    flag: "🇺🇸",
  },
  {
    id: "india",
    region: "India (Global Delivery Center)",
    badge: "Offshore Engineering Hub",
    role: "Global Delivery & Engineering Center",
    address: "HITEC City, Hyderabad, Telangana 500081, India",
    phone: "+91 40 6600 8800",
    email: "india@configusa.com",
    embedUrl:
      "https://maps.google.com/maps?q=HITEC+City,+Hyderabad,+Telangana+500081,+India&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapUrl:
      "https://maps.google.com/?q=HITEC+City,+Hyderabad,+Telangana,+India",
    teamSize: "350+ Global Engineers",
    timeZone: "IST (UTC+5:30)",
    flag: "🇮🇳",
  },
];

export function InteractiveWorldMap() {
  return (
    <div className="relative w-full">
      {/* 2 Maps Side-by-Side Grid Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {LOCATIONS_DATA.map((loc) => (
          <div
            key={loc.id}
            className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-blue-500/20">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                        <span>{loc.flag}</span> {loc.region}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {loc.role}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[0.68rem] font-bold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                  {loc.badge}
                </span>
              </div>

              {/* Live Google Map Frame */}
              <div className="relative w-full aspect-[16/10] min-h-[260px] max-h-[320px] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 mb-6 group">
                <iframe
                  src={loc.embedUrl}
                  title={`${loc.region} Google Map`}
                  className="w-full h-full border-0 filter contrast-[1.02]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Floating Top Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  <span>{loc.region.split(" ")[0]} Location</span>
                </div>

                {/* Quick Link Button */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-brand hover:brightness-110 text-white text-xs font-bold shadow-md backdrop-blur-md transition-all hover:scale-105"
                >
                  <span>Open Map</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Office Address & Contacts */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.65rem] uppercase font-extrabold tracking-wider text-slate-400">
                      Office Address
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-0.5 leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-5 text-xs text-slate-700">
                  <a
                    href={`tel:${loc.phone}`}
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600" /> {loc.phone}
                  </a>
                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-600" /> {loc.email}
                  </a>
                </div>
              </div>

              {/* Timezone & Team Size Badges */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold">
                  <Clock className="h-3.5 w-3.5 text-blue-600" /> {loc.timeZone}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold">
                  <Users className="h-3.5 w-3.5 text-blue-600" /> {loc.teamSize}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md hover:scale-[1.02] transition-all"
              >
                Directions in Google Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-all"
              >
                Contact Office <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
