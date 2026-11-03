import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building2,
  Navigation,
  Globe,
  Clock,
  Search,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";

export interface OfficeLocation {
  id: string;
  name: string;
  region: "north-america" | "india";
  country: string;
  city: string;
  state: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  coords: [number, number]; // [lat, lng]
  isHQ?: boolean;
  timeZone: string;
}

export const ALL_LOCATIONS: OfficeLocation[] = [
  // ── North America (38 Locations) ──
  {
    id: "plainsboro-nj",
    name: "ConfigUSA Global Headquarters",
    region: "north-america",
    country: "United States",
    city: "Plainsboro",
    state: "New Jersey",
    tag: "Global Headquarters",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536",
    phone: "+1 (609) 934-3184",
    email: "usa@configusa.com",
    coords: [40.3340, -74.5938],
    isHQ: true,
    timeZone: "EST (UTC-5)",
  },
  {
    id: "new-york-ny",
    name: "New York Financial District Office",
    region: "north-america",
    country: "United States",
    city: "New York",
    state: "New York",
    tag: "Financial Practice Hub",
    address: "140 Broadway, 46th Floor, New York, NY 10005",
    phone: "+1 (609) 934-3184",
    email: "ny@configusa.com",
    coords: [40.7081, -74.0094],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "toronto-on",
    name: "Toronto Canadian Headquarters",
    region: "north-america",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    tag: "Canada Hub",
    address: "1585 Markham Road, Suite 309, Toronto, ON M1B 2W1",
    phone: "+1 (647) 557-6968",
    email: "canada@configusa.com",
    coords: [43.7915, -79.2274],
    isHQ: true,
    timeZone: "EST (UTC-5)",
  },
  {
    id: "san-jose-ca",
    name: "Silicon Valley Innovation Hub",
    region: "north-america",
    country: "United States",
    city: "San Jose",
    state: "California",
    tag: "AI & Cloud Practice",
    address: "2033 Gateway Place, 5th Floor, San Jose, CA 95110",
    phone: "+1 (408) 550-6200",
    email: "sv@configusa.com",
    coords: [37.3719, -121.9213],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "san-francisco-ca",
    name: "San Francisco Technology Center",
    region: "north-america",
    country: "United States",
    city: "San Francisco",
    state: "California",
    tag: "Digital Engineering",
    address: "500 Howard Street, Suite 400, San Francisco, CA 94105",
    phone: "+1 (415) 890-4100",
    email: "sf@configusa.com",
    coords: [37.7885, -122.3970],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "austin-tx",
    name: "Austin Technology Hub",
    region: "north-america",
    country: "United States",
    city: "Austin",
    state: "Texas",
    tag: "Enterprise Engineering",
    address: "100 Congress Avenue, Suite 2000, Austin, TX 78701",
    phone: "+1 (512) 640-3300",
    email: "austin@configusa.com",
    coords: [30.2642, -97.7444],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "dallas-tx",
    name: "Dallas / Plano Delivery Center",
    region: "north-america",
    country: "United States",
    city: "Plano",
    state: "Texas",
    tag: "Workforce Delivery",
    address: "5601 Granite Parkway, Suite 300, Plano, TX 75024",
    phone: "+1 (972) 850-7100",
    email: "dallas@configusa.com",
    coords: [33.0902, -96.8236],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "houston-tx",
    name: "Houston Energy Tech Office",
    region: "north-america",
    country: "United States",
    city: "Houston",
    state: "Texas",
    tag: "Energy & Infrastructure",
    address: "1200 Smith Street, Suite 1600, Houston, TX 77002",
    phone: "+1 (713) 955-4020",
    email: "houston@configusa.com",
    coords: [29.7565, -95.3698],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "chicago-il",
    name: "Chicago Midwest Hub",
    region: "north-america",
    country: "United States",
    city: "Chicago",
    state: "Illinois",
    tag: "Midwest Headquarters",
    address: "233 S Wacker Drive, 84th Floor, Chicago, IL 60606",
    phone: "+1 (312) 775-9000",
    email: "chicago@configusa.com",
    coords: [41.8789, -87.6359],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "atlanta-ga",
    name: "Atlanta Southeast Hub",
    region: "north-america",
    country: "United States",
    city: "Atlanta",
    state: "Georgia",
    tag: "Southeast Practice",
    address: "3344 Peachtree Road NE, Suite 800, Atlanta, GA 30326",
    phone: "+1 (404) 937-2200",
    email: "atlanta@configusa.com",
    coords: [33.8463, -84.3644],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "charlotte-nc",
    name: "Charlotte Financial Tech Office",
    region: "north-america",
    country: "United States",
    city: "Charlotte",
    state: "North Carolina",
    tag: "Banking & Finance Hub",
    address: "201 S College Street, Suite 1400, Charlotte, NC 28244",
    phone: "+1 (704) 820-9100",
    email: "charlotte@configusa.com",
    coords: [35.2246, -80.8436],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "raleigh-nc",
    name: "Raleigh / Research Triangle Center",
    region: "north-america",
    country: "United States",
    city: "Durham",
    state: "North Carolina",
    tag: "Life Sciences & Tech",
    address: "4819 Emperor Blvd, Suite 400, Durham, NC 27703",
    phone: "+1 (919) 433-8500",
    email: "rtp@configusa.com",
    coords: [35.8893, -78.8687],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "boston-ma",
    name: "Boston Innovation Practice",
    region: "north-america",
    country: "United States",
    city: "Boston",
    state: "Massachusetts",
    tag: "Healthcare & Fintech",
    address: "100 Federal Street, 19th Floor, Boston, MA 02110",
    phone: "+1 (617) 918-7200",
    email: "boston@configusa.com",
    coords: [42.3551, -71.0560],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "seattle-wa",
    name: "Seattle Cloud & AI Center",
    region: "north-america",
    country: "United States",
    city: "Seattle",
    state: "Washington",
    tag: "Cloud Architecture",
    address: "1201 3rd Avenue, Suite 2200, Seattle, WA 98101",
    phone: "+1 (206) 693-5500",
    email: "seattle@configusa.com",
    coords: [47.6074, -122.3364],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "denver-co",
    name: "Denver Mountain West Office",
    region: "north-america",
    country: "United States",
    city: "Denver",
    state: "Colorado",
    tag: "Regional Technology Hub",
    address: "1144 15th Street, Suite 2700, Denver, CO 80202",
    phone: "+1 (303) 872-9100",
    email: "denver@configusa.com",
    coords: [39.7495, -104.9965],
    timeZone: "MST (UTC-7)",
  },
  {
    id: "philadelphia-pa",
    name: "Philadelphia Mid-Atlantic Office",
    region: "north-america",
    country: "United States",
    city: "Philadelphia",
    state: "Pennsylvania",
    tag: "Enterprise Workforce",
    address: "1735 Market Street, Suite 3800, Philadelphia, PA 19103",
    phone: "+1 (215) 867-4200",
    email: "philly@configusa.com",
    coords: [39.9536, -75.1692],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "pittsburgh-pa",
    name: "Pittsburgh Robotics & AI Hub",
    region: "north-america",
    country: "United States",
    city: "Pittsburgh",
    state: "Pennsylvania",
    tag: "Autonomous & AI",
    address: "500 Grant Street, Suite 2900, Pittsburgh, PA 15219",
    phone: "+1 (412) 620-3100",
    email: "pittsburgh@configusa.com",
    coords: [40.4398, -79.9959],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "herndon-va",
    name: "Northern Virginia / DC Metro Hub",
    region: "north-america",
    country: "United States",
    city: "Herndon",
    state: "Virginia",
    tag: "Federal & Public Sector",
    address: "2121 Cooperative Way, Suite 130, Herndon, VA 20171",
    phone: "+1 (703) 674-4500",
    email: "dc@configusa.com",
    coords: [38.9565, -77.3878],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "richmond-va",
    name: "Richmond Commonwealth Office",
    region: "north-america",
    country: "United States",
    city: "Richmond",
    state: "Virginia",
    tag: "State & Commercial Solutions",
    address: "901 E Byrd Street, Suite 1100, Richmond, VA 23219",
    phone: "+1 (804) 554-2000",
    email: "richmond@configusa.com",
    coords: [37.5366, -77.4384],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "tampa-fl",
    name: "Tampa Bay Technology Hub",
    region: "north-america",
    country: "United States",
    city: "Tampa",
    state: "Florida",
    tag: "Financial & Healthcare",
    address: "100 N Tampa Street, Suite 2100, Tampa, FL 33602",
    phone: "+1 (813) 490-6200",
    email: "tampa@configusa.com",
    coords: [27.9478, -82.4584],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "miami-fl",
    name: "Miami Latin America Gateway",
    region: "north-america",
    country: "United States",
    city: "Miami",
    state: "Florida",
    tag: "Cross-Border Solutions",
    address: "600 Brickell Avenue, Suite 1900, Miami, FL 33131",
    phone: "+1 (305) 728-9400",
    email: "miami@configusa.com",
    coords: [25.7681, -80.1906],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "orlando-fl",
    name: "Orlando Digital Engineering Hub",
    region: "north-america",
    country: "United States",
    city: "Orlando",
    state: "Florida",
    tag: "Simulation & Modeling",
    address: "200 S Orange Avenue, Suite 1200, Orlando, FL 32801",
    phone: "+1 (407) 830-1500",
    email: "orlando@configusa.com",
    coords: [28.5414, -81.3789],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "minneapolis-mn",
    name: "Minneapolis Upper Midwest Office",
    region: "north-america",
    country: "United States",
    city: "Minneapolis",
    state: "Minnesota",
    tag: "Retail & Medical Devices",
    address: "80 S 8th Street, Suite 900, Minneapolis, MN 55402",
    phone: "+1 (612) 345-8100",
    email: "minneapolis@configusa.com",
    coords: [44.9759, -93.2721],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "phoenix-az",
    name: "Phoenix Southwest Hub",
    region: "north-america",
    country: "United States",
    city: "Phoenix",
    state: "Arizona",
    tag: "Semiconductor & Aerospace",
    address: "2375 E Camelback Road, Suite 600, Phoenix, AZ 85016",
    phone: "+1 (602) 794-5200",
    email: "phoenix@configusa.com",
    coords: [33.5092, -112.0305],
    timeZone: "MST (UTC-7)",
  },
  {
    id: "columbus-oh",
    name: "Columbus Ohio Valley Center",
    region: "north-america",
    country: "United States",
    city: "Columbus",
    state: "Ohio",
    tag: "InsurTech & Cloud",
    address: "100 E Broad Street, Suite 1800, Columbus, OH 43215",
    phone: "+1 (614) 923-4100",
    email: "columbus@configusa.com",
    coords: [39.9626, -82.9988],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "cincinnati-oh",
    name: "Cincinnati Commercial Center",
    region: "north-america",
    country: "United States",
    city: "Cincinnati",
    state: "Ohio",
    tag: "Consumer Goods & Logistics",
    address: "312 Walnut Street, Suite 1600, Cincinnati, OH 45202",
    phone: "+1 (513) 760-2200",
    email: "cincinnati@configusa.com",
    coords: [39.1009, -84.5113],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "cleveland-oh",
    name: "Cleveland Great Lakes Office",
    region: "north-america",
    country: "United States",
    city: "Cleveland",
    state: "Ohio",
    tag: "Healthcare & Advanced Mfg",
    address: "200 Public Square, Suite 2800, Cleveland, OH 44114",
    phone: "+1 (216) 430-8900",
    email: "cleveland@configusa.com",
    coords: [41.4998, -81.6917],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "detroit-mi",
    name: "Detroit Mobility & Automotive Hub",
    region: "north-america",
    country: "United States",
    city: "Detroit",
    state: "Michigan",
    tag: "Automotive Software",
    address: "1001 Woodward Avenue, Suite 500, Detroit, MI 48226",
    phone: "+1 (313) 590-7300",
    email: "detroit@configusa.com",
    coords: [42.3314, -83.0478],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "indianapolis-in",
    name: "Indianapolis Heartland Center",
    region: "north-america",
    country: "United States",
    city: "Indianapolis",
    state: "Indiana",
    tag: "BioTech & Enterprise Apps",
    address: "111 Monument Circle, Suite 2400, Indianapolis, IN 46204",
    phone: "+1 (317) 644-8800",
    email: "indy@configusa.com",
    coords: [39.7684, -86.1581],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "nashville-tn",
    name: "Nashville Healthcare IT Hub",
    region: "north-america",
    country: "United States",
    city: "Nashville",
    state: "Tennessee",
    tag: "Health Services & Platforms",
    address: "222 2nd Avenue S, Suite 1700, Nashville, TN 37201",
    phone: "+1 (615) 891-6400",
    email: "nashville@configusa.com",
    coords: [36.1587, -86.7744],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "st-louis-mo",
    name: "St. Louis Gateway Office",
    region: "north-america",
    country: "United States",
    city: "St. Louis",
    state: "Missouri",
    tag: "Agritech & Financial",
    address: "100 N Broadway, Suite 1900, St. Louis, MO 63102",
    phone: "+1 (314) 830-5200",
    email: "stlouis@configusa.com",
    coords: [38.6270, -90.1892],
    timeZone: "CST (UTC-6)",
  },
  {
    id: "salt-lake-city-ut",
    name: "Salt Lake City Silicon Slopes Hub",
    region: "north-america",
    country: "United States",
    city: "Salt Lake City",
    state: "Utah",
    tag: "SaaS & Cloud Engineering",
    address: "111 S Main Street, Suite 2400, Salt Lake City, UT 84111",
    phone: "+1 (801) 940-7700",
    email: "slc@configusa.com",
    coords: [40.7667, -111.8910],
    timeZone: "MST (UTC-7)",
  },
  {
    id: "san-diego-ca",
    name: "San Diego Biotech & Telecom Center",
    region: "north-america",
    country: "United States",
    city: "San Diego",
    state: "California",
    tag: "Wireless & Life Sciences",
    address: "401 B Street, Suite 1400, San Diego, CA 92101",
    phone: "+1 (619) 550-3200",
    email: "sandiego@configusa.com",
    coords: [32.7174, -117.1611],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "irvine-ca",
    name: "Orange County / Irvine Office",
    region: "north-america",
    country: "United States",
    city: "Irvine",
    state: "California",
    tag: "Digital Commerce",
    address: "18100 Von Karman Avenue, Suite 850, Irvine, CA 92612",
    phone: "+1 (949) 720-6500",
    email: "irvine@configusa.com",
    coords: [33.6846, -117.8488],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "portland-or",
    name: "Portland Pacific Northwest Center",
    region: "north-america",
    country: "United States",
    city: "Portland",
    state: "Oregon",
    tag: "Silicon Forest Center",
    address: "1120 NW Couch Street, Suite 700, Portland, OR 97209",
    phone: "+1 (503) 890-4400",
    email: "portland@configusa.com",
    coords: [45.5236, -122.6826],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "hartford-ct",
    name: "Hartford Insurance Tech Center",
    region: "north-america",
    country: "United States",
    city: "Hartford",
    state: "Connecticut",
    tag: "Insurance & Actuarial Tech",
    address: "100 Pearl Street, 14th Floor, Hartford, CT 06103",
    phone: "+1 (860) 740-8800",
    email: "hartford@configusa.com",
    coords: [41.7658, -72.6734],
    timeZone: "EST (UTC-5)",
  },
  {
    id: "vancouver-bc",
    name: "Vancouver Pacific Canada Hub",
    region: "north-america",
    country: "Canada",
    city: "Vancouver",
    state: "British Columbia",
    tag: "Western Canada Practice",
    address: "1055 W Georgia Street, Suite 1500, Vancouver, BC V6E 4N7",
    phone: "+1 (604) 900-3840",
    email: "vancouver@configusa.com",
    coords: [49.2860, -123.1216],
    timeZone: "PST (UTC-8)",
  },
  {
    id: "montreal-qc",
    name: "Montreal AI & Technology Center",
    region: "north-america",
    country: "Canada",
    city: "Montreal",
    state: "Quebec",
    tag: "AI Research & Solutions",
    address: "1000 de La Gauchetière St W, Suite 2400, Montreal, QC H3B 4W5",
    phone: "+1 (514) 800-4750",
    email: "montreal@configusa.com",
    coords: [45.4988, -73.5668],
    timeZone: "EST (UTC-5)",
  },

  // ── India & APAC Delivery Hubs (6 Major Hubs) ──
  {
    id: "hyderabad-ts",
    name: "Hyderabad Global Delivery & GCC Center",
    region: "india",
    country: "India",
    city: "Hyderabad",
    state: "Telangana",
    tag: "Global Delivery Center",
    address: "Trendz Sapphire, 3rd Floor, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
    coords: [17.4483, 78.3815],
    isHQ: true,
    timeZone: "IST (UTC+5:30)",
  },
  {
    id: "bengaluru-ka",
    name: "Bengaluru AI & Engineering Hub",
    region: "india",
    country: "India",
    city: "Bengaluru",
    state: "Karnataka",
    tag: "AI & Innovation Labs",
    address: "Whitefield EPIP Zone, ITPL Main Road, Bengaluru, Karnataka – 560066",
    phone: "+91 80 4920 7000",
    email: "bengaluru@configusa.com",
    coords: [12.9845, 77.7289],
    timeZone: "IST (UTC+5:30)",
  },
  {
    id: "noida-up",
    name: "Noida / NCR Enterprise Platforms Hub",
    region: "india",
    country: "India",
    city: "Noida",
    state: "Uttar Pradesh",
    tag: "Enterprise Platforms (SAP/Cloud)",
    address: "Sector 62, Institutional Area, Noida, Uttar Pradesh – 201301",
    phone: "+91 120 488 5100",
    email: "ncr@configusa.com",
    coords: [28.6279, 77.3726],
    timeZone: "IST (UTC+5:30)",
  },
  {
    id: "pune-mh",
    name: "Pune Cloud & DevOps Center",
    region: "india",
    country: "India",
    city: "Pune",
    state: "Maharashtra",
    tag: "Cloud & Microservices Hub",
    address: "Kharadi IT Park, Next to Reliance Mall, Pune, Maharashtra – 411014",
    phone: "+91 20 6730 4200",
    email: "pune@configusa.com",
    coords: [18.5526, 73.9515],
    timeZone: "IST (UTC+5:30)",
  },
  {
    id: "chennai-tn",
    name: "Chennai Banking & Digital Delivery Center",
    region: "india",
    country: "India",
    city: "Chennai",
    state: "Tamil Nadu",
    tag: "BFSI Practice Hub",
    address: "OMR IT Corridor, Greeta Tech Park, Perungudi, Chennai, Tamil Nadu – 600096",
    phone: "+91 44 4890 3100",
    email: "chennai@configusa.com",
    coords: [12.9656, 80.2455],
    timeZone: "IST (UTC+5:30)",
  },
  {
    id: "mumbai-mh",
    name: "Mumbai Financial Services Center",
    region: "india",
    country: "India",
    city: "Mumbai",
    state: "Maharashtra",
    tag: "Institutional Tech Hub",
    address: "Hiranandani Business Park, Powai / Thane, Mumbai, Maharashtra – 400076",
    phone: "+91 22 6150 9900",
    email: "mumbai@configusa.com",
    coords: [19.1197, 72.9051],
    timeZone: "IST (UTC+5:30)",
  },
];

export function InteractiveLeafletMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [id: string]: any }>({});
  
  const [activeRegion, setActiveRegion] = useState<"north-america" | "india" | "all">("north-america");
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(ALL_LOCATIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapReady, setMapReady] = useState(false);

  const filteredLocations = ALL_LOCATIONS.filter((loc) => {
    const matchesRegion = activeRegion === "all" || loc.region === activeRegion;
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const naCount = ALL_LOCATIONS.filter((l) => l.region === "north-america").length;
  const inCount = ALL_LOCATIONS.filter((l) => l.region === "india").length;

  // Initialize Leaflet Map in browser
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;
    let isCancelled = false;

    async function loadMap() {
      const L = (await import("leaflet")).default;
      if (isCancelled || !mapContainerRef.current) return;

      // Clean up previous instance if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initial center: North America centered around USA [39.8283, -98.5795]
      const map = L.map(mapContainerRef.current, {
        center: [39.8283, -98.5795],
        zoom: 4,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: true,
        scrollWheelZoom: false, // Don't hijack page scroll
      });

      // CartoDB Positron / OSM Light style tiles (crisp clean corporate map like in reference image)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
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

  // Update Markers whenever filteredLocations or selectedOffice changes
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

      // Add pins for visible locations
      filteredLocations.forEach((loc) => {
        const isSelected = selectedOffice.id === loc.id;

        // Custom DivIcon matching the reference image (circular blue/navy icon, glowing red/amber when selected)
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
          map.flyTo(loc.coords, Math.max(map.getZoom(), 7), { duration: 0.8 });
        });

        markersRef.current[loc.id] = marker;
      });
    }

    updatePins();

    return () => {
      isCancelled = false;
    };
  }, [mapReady, filteredLocations, selectedOffice]);

  // Handle Region Change (Fly camera to continent view)
  const handleRegionChange = async (region: "north-america" | "india" | "all") => {
    setActiveRegion(region);

    if (mapInstanceRef.current) {
      if (region === "north-america") {
        mapInstanceRef.current.flyTo([39.8283, -98.5795], 4, { duration: 1.2 });
        const defaultNa = ALL_LOCATIONS.find((l) => l.region === "north-america");
        if (defaultNa) setSelectedOffice(defaultNa);
      } else if (region === "india") {
        mapInstanceRef.current.flyTo([20.5937, 78.9629], 5, { duration: 1.2 });
        const defaultIn = ALL_LOCATIONS.find((l) => l.region === "india");
        if (defaultIn) setSelectedOffice(defaultIn);
      } else {
        mapInstanceRef.current.flyTo([25.0, 0.0], 2, { duration: 1.2 });
      }
    }
  };

  // Click on office from list -> pan & highlight
  const handleOfficeClick = (loc: OfficeLocation) => {
    setSelectedOffice(loc);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(loc.coords, 9, { duration: 1 });
    }
  };

  return (
    <div className="w-full">
      {/* ── Top Bar matching the user's reference screenshot: "● 38 locations · North America" ── */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        {/* Top Header Strip */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm sm:text-base font-bold text-[#071326] tracking-tight">
              {activeRegion === "north-america"
                ? `${naCount} locations · North America`
                : activeRegion === "india"
                ? `${inCount} locations · India & APAC Hubs`
                : `${ALL_LOCATIONS.length} locations · Global Network`}
            </span>
          </div>

          {/* Region Tabs (North America / India / Global) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleRegionChange("north-america")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeRegion === "north-america"
                  ? "bg-[#07172f] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              North America ({naCount})
            </button>
            <button
              onClick={() => handleRegionChange("india")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeRegion === "india"
                  ? "bg-[#07172f] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              India Delivery Hubs ({inCount})
            </button>
            <button
              onClick={() => handleRegionChange("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeRegion === "all"
                  ? "bg-[#07172f] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe className="h-3.5 w-3.5 inline mr-1" /> All ({ALL_LOCATIONS.length})
            </button>
          </div>
        </div>

        {/* Map & Office Detail Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
          {/* Left/Main Column: Leaflet Interactive Map Canvas (8 cols on lg) */}
          <div className="lg:col-span-8 relative h-[420px] sm:h-[480px] lg:h-full bg-slate-100">
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

            {/* Reset Map View Button */}
            <button
              onClick={() => handleRegionChange(activeRegion)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
            >
              Reset View
            </button>
          </div>

          {/* Right Column: Active Office Detail Card + Searchable Directory (4 cols on lg) */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/90 bg-white flex flex-col justify-between max-h-[640px]">
            {/* Top Section: Highlighted Selected Office (Matches interactive popup) */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
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
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/90 space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{selectedOffice.address}</span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-slate-600">
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
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Directions Button */}
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

            {/* Bottom Section: Search & Scrollable Location List */}
            <div className="p-4 flex-1 flex flex-col overflow-hidden">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city, state or hub..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-8.5 pr-3 py-2 text-xs text-[#071326] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="overflow-y-auto pr-1 space-y-2 flex-1 scrollbar-thin">
                {filteredLocations.map((loc) => {
                  const isCurrent = loc.id === selectedOffice.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleOfficeClick(loc)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isCurrent
                          ? "bg-blue-50/80 border border-blue-200 shadow-xs"
                          : "hover:bg-slate-50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                            isCurrent ? "bg-red-600 ring-2 ring-red-200" : "bg-blue-600"
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#071326] truncate">
                            {loc.city}, {loc.state}
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
    </div>
  );
}
