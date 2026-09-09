import catSafari from "@/assets/cat-safari.jpg";
import catBeach from "@/assets/cat-beach.jpg";
import catBalloon from "@/assets/cat-balloon.jpg";
import catCulture from "@/assets/cat-culture.jpg";
import catMountain from "@/assets/cat-mountain.jpg";
import catCity from "@/assets/cat-city.jpg";
import catTransport from "@/assets/cat-transport.jpg";
import catStay from "@/assets/cat-stay.jpg";
import catGroups from "@/assets/cat-groups.jpg";
import destMara from "@/assets/dest-mara.jpg";
import destKilimanjaro from "@/assets/dest-kilimanjaro.jpg";
import destDiani from "@/assets/dest-diani.jpg";
import destSerengeti from "@/assets/dest-serengeti.jpg";
import itinMara from "@/assets/itin-mara.jpg";
import itinCoast from "@/assets/itin-coast.jpg";
import itinKili from "@/assets/itin-kili.jpg";

export const company = {
  name: "East Africa Adventures",
  licence: "KTLB 4128",
  bases: "Nairobi & Arusha",
  phoneDisplay: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsappHref: "https://wa.me/254700000000",
  email: "hello@eastafricaadventures.co.ke",
};

export type Package = {
  name: string;
  duration: string;
  usd: string;
  kes: string;
  summary: string;
};

export type Experience = {
  slug: string;
  path: string;
  title: string;
  duration: string;
  image: string;
  lead: string;
  intro: string;
  highlights: { title: string; body: string }[];
  packages: Package[];
};

export const pickupOptions = [
  "Jomo Kenyatta International Airport (JKIA)",
  "Wilson Airport, Nairobi",
  "Nairobi hotel or home address",
  "Moi International Airport, Mombasa",
  "Kilimanjaro International Airport",
  "I will arrange my own arrival",
];

export const roomOptions = [
  "Double / twin room sharing",
  "Single room (private)",
  "Family room or adjoining rooms",
  "Tented camp, en-suite",
  "Exclusive-use house or villa",
  "No preference — advise me",
];

export const experiences: Experience[] = [
  {
    slug: "safaris",
    path: "/safaris",
    title: "Wildlife Safaris",
    duration: "4–12 days",
    image: catSafari,
    lead: "Big-cat country, guided by people who read it daily.",
    intro:
      "Our safari routes follow the seasons rather than a fixed calendar: Maasai Mara and Amboseli in Kenya, Serengeti and Tarangire across the border. Small groups, open-roof 4x4s and a driver-guide who has worked these plains for years.",
    highlights: [
      {
        title: "Certified driver-guides",
        body: "Every guide holds a Kenya Professional Safari Guides Association bronze certification or higher.",
      },
      {
        title: "Seasonal routing",
        body: "We move your nights to where the game is — river crossings in season, southern plains when the herds calve.",
      },
      {
        title: "Camps we know",
        body: "From honest mid-range tented camps to conservancy lodges, every property is one we have slept in ourselves.",
      },
    ],
    packages: [
      {
        name: "Mara Classic",
        duration: "6 days",
        usd: "$2,890",
        kes: "KES 370,000",
        summary: "Four nights in the Maasai Mara, one in Amboseli, with a dawn balloon option.",
      },
      {
        name: "Northern Circuit",
        duration: "9 days",
        usd: "$4,180",
        kes: "KES 538,000",
        summary: "Serengeti, Ngorongoro Crater and Tarangire, with light-aircraft hops between parks.",
      },
      {
        name: "Weekend Bush Break",
        duration: "3 days",
        usd: "$720",
        kes: "KES 93,000",
        summary: "Resident-rate escape from Nairobi to Ol Pejeta or Tsavo, road transfers included.",
      },
    ],
  },
  {
    slug: "beaches",
    path: "/beaches",
    title: "Beach Holidays",
    duration: "5–10 days",
    image: catBeach,
    lead: "Powder-white sand, coral reefs and slow coastal mornings.",
    intro:
      "The Kenyan coast runs from Diani's wide reef-sheltered sand to the creeks of Watamu and the alleys of Lamu, and onward to Zanzibar. We pair beach nights with a safari, or leave them entirely alone.",
    highlights: [
      { title: "Reef and dhow days", body: "Snorkel drops at Kisite-Mpunguti, sunset dhow sails and kite-surf lessons in season." },
      { title: "Family-tested stays", body: "Hotels with proper kids' pools, shaded rooms and reliable transfers from Moi International." },
      { title: "Resident rates", body: "Kenyan and East African residents get citizen pricing wherever the property offers it." },
    ],
    packages: [
      {
        name: "Diani & Watamu Coast",
        duration: "5 days",
        usd: "$1,640",
        kes: "KES 212,000",
        summary: "Oceanfront suites, a reef snorkel day and a dhow sunset cruise.",
      },
      {
        name: "Bush & Beach",
        duration: "9 days",
        usd: "$3,240",
        kes: "KES 418,000",
        summary: "Three nights on safari in Tsavo, five on the sand at Diani, flights between.",
      },
      {
        name: "Zanzibar Spice Week",
        duration: "7 days",
        usd: "$2,150",
        kes: "KES 277,000",
        summary: "Stone Town, a spice farm morning and Nungwi beach nights.",
      },
    ],
  },
  {
    slug: "balloon",
    path: "/balloon",
    title: "Hot-Air Balloon Flights",
    duration: "from 1 day",
    image: catBalloon,
    lead: "Lift off in the dark, land to breakfast on the grass.",
    intro:
      "A balloon flight is the one morning nobody forgets. Pick-up is around 4:30am, the burner fires at first light, and you drift roughly an hour over the plains before a champagne bush breakfast where you land.",
    highlights: [
      { title: "Licensed operators only", body: "We book with balloon companies certified by the Kenya Civil Aviation Authority." },
      { title: "Mara, Serengeti, Naivasha", body: "Flights over the Maasai Mara and Serengeti plains, or the escarpment above Lake Naivasha." },
      { title: "Add it to any safari", body: "One flight slots neatly into a longer itinerary — we handle the early transfer." },
    ],
    packages: [
      {
        name: "Mara Dawn Flight",
        duration: "1 morning",
        usd: "$495",
        kes: "KES 64,000",
        summary: "One-hour flight, bush breakfast and park-side transfer, per person.",
      },
      {
        name: "Balloon & Two Nights",
        duration: "3 days",
        usd: "$1,380",
        kes: "KES 178,000",
        summary: "Two nights in a Mara tented camp with a dawn flight on day two.",
      },
      {
        name: "Serengeti Sunrise",
        duration: "1 morning",
        usd: "$599",
        kes: "KES 77,000",
        summary: "Flight over the Seronera plains with breakfast and park transfers.",
      },
    ],
  },
  {
    slug: "culture",
    path: "/culture",
    title: "Cultural Experiences",
    duration: "2–6 days",
    image: catCulture,
    lead: "Visits arranged with communities, not around them.",
    intro:
      "Cultural days are booked directly with the hosts: Maasai and Samburu manyattas, Swahili cooking in Lamu, Luo fishing mornings on Lake Victoria. Fees go to the community, and photography is always asked before it is taken.",
    highlights: [
      { title: "Community-paid visits", body: "Village fees are paid to the group's own committee, and we tell you the amount up front." },
      { title: "Craft and food", body: "Beadwork workshops, Swahili kitchens, coffee farms in Nyeri and drum sessions in Kampala." },
      { title: "Kiswahili or English", body: "Guides interpret in either language, and Kiswahili-first tours are available on request." },
    ],
    packages: [
      {
        name: "Maasai Days",
        duration: "3 days",
        usd: "$860",
        kes: "KES 111,000",
        summary: "Two nights near the Mara with a manyatta visit, beadwork workshop and walking safari.",
      },
      {
        name: "Swahili Coast Culture",
        duration: "5 days",
        usd: "$1,520",
        kes: "KES 196,000",
        summary: "Lamu old town, dhow building, Swahili cooking and a Mombasa spice market walk.",
      },
      {
        name: "Rift Valley Communities",
        duration: "4 days",
        usd: "$1,180",
        kes: "KES 152,000",
        summary: "Samburu, Pokot and Turkana hosts across the northern Rift, with conservancy nights.",
      },
    ],
  },
  {
    slug: "adventure",
    path: "/adventure",
    title: "Mountain & Adventure",
    duration: "5–9 days",
    image: catMountain,
    lead: "Five climate zones between the trailhead and the summit.",
    intro:
      "Kilimanjaro, Mount Kenya and the Rwenzoris, plus whitewater on the Nile and rock at Hell's Gate. Crews are properly paid and equipped, and every itinerary builds in real acclimatisation days.",
    highlights: [
      { title: "Fair-wage crews", body: "Porter loads and wages follow Kilimanjaro Porters Assistance Project guidelines." },
      { title: "Acclimatisation built in", body: "Extra nights at altitude, because summit success comes from patience, not pace." },
      { title: "Safety kit on every climb", body: "Pulse oximeters, oxygen and a written evacuation plan carried by the lead guide." },
    ],
    packages: [
      {
        name: "Kilimanjaro Traverse",
        duration: "8 days",
        usd: "$3,450",
        kes: "KES 445,000",
        summary: "Machame route with acclimatisation days and a certified mountain crew.",
      },
      {
        name: "Mount Kenya Sirimon",
        duration: "5 days",
        usd: "$1,290",
        kes: "KES 166,000",
        summary: "Sirimon up, Chogoria down, Point Lenana summit morning.",
      },
      {
        name: "Nile Whitewater",
        duration: "4 days",
        usd: "$1,140",
        kes: "KES 147,000",
        summary: "Jinja rafting, a kayak clinic and quad trails above the source of the Nile.",
      },
    ],
  },
  {
    slug: "city",
    path: "/city",
    title: "City Excursions",
    duration: "1–4 days",
    image: catCity,
    lead: "A city day that earns its place in the itinerary.",
    intro:
      "Nairobi, Mombasa, Kampala, Kigali and Dar es Salaam are more than transit stops. Day tours cover galleries and giraffes, markets and memorials, with a driver who knows the traffic windows.",
    highlights: [
      { title: "Half-day friendly", body: "Built around flight times, so a long layover becomes a proper outing." },
      { title: "Food-led routes", body: "Nyama choma pits, Swahili street food and coffee roasteries with the people who run them." },
      { title: "Business-hours flexible", body: "Popular with corporate visitors who have one free afternoon in town." },
    ],
    packages: [
      {
        name: "Nairobi in a Day",
        duration: "1 day",
        usd: "$180",
        kes: "KES 23,000",
        summary: "Nairobi National Park drive, elephant orphanage, giraffe centre and Karen museum.",
      },
      {
        name: "Mombasa Old Town",
        duration: "1 day",
        usd: "$155",
        kes: "KES 20,000",
        summary: "Fort Jesus, spice lanes, a Swahili lunch and Haller Park.",
      },
      {
        name: "Kigali & Kampala",
        duration: "4 days",
        usd: "$1,260",
        kes: "KES 162,000",
        summary: "Genocide memorial, Kigali art scene, Kampala markets and a Lake Victoria evening.",
      },
    ],
  },
  {
    slug: "transport",
    path: "/transport",
    title: "Transport & Transfers",
    duration: "hourly to full trip",
    image: catTransport,
    lead: "Vehicles, drivers and flights that hold the itinerary together.",
    intro:
      "Our own fleet of pop-roof Land Cruisers and safari vans covers the parks, with saloons and coasters for city and airport work. Domestic flights and cross-border road permits are arranged in-house.",
    highlights: [
      { title: "Maintained fleet", body: "Pop-roof Land Cruisers, 7-seat safari vans, saloons and 25-seat coasters, serviced on schedule." },
      { title: "Airport transfers", body: "Meet-and-greet at JKIA, Wilson, Moi Mombasa and Kilimanjaro, tracked against your flight." },
      { title: "Cross-border ready", body: "Kenya–Tanzania–Uganda permits, insurance and carnet paperwork handled before you travel." },
    ],
    packages: [
      {
        name: "Airport Transfer",
        duration: "one way",
        usd: "$35",
        kes: "KES 4,500",
        summary: "JKIA or Wilson to any Nairobi address, meet-and-greet included.",
      },
      {
        name: "4x4 with Driver-Guide",
        duration: "per day",
        usd: "$210",
        kes: "KES 27,000",
        summary: "Pop-roof Land Cruiser, fuel, driver-guide allowance and unlimited park mileage.",
      },
      {
        name: "Coaster Group Hire",
        duration: "per day",
        usd: "$320",
        kes: "KES 41,000",
        summary: "25-seat coaster with driver for conferences, school trips and church groups.",
      },
    ],
  },
  {
    slug: "accommodation",
    path: "/accommodation",
    title: "Accommodation",
    duration: "1 night upward",
    image: catStay,
    lead: "Camps, lodges and beach hotels we have stayed in ourselves.",
    intro:
      "We book across three honest tiers — comfort, premium and exclusive — and tell you plainly what changes between them. Resident and citizen rates are applied automatically where you qualify.",
    highlights: [
      { title: "Three clear tiers", body: "Comfort tented camps, premium lodges and exclusive-use conservancy houses." },
      { title: "Resident pricing", body: "East African residents pay citizen rates; bring an ID or work permit copy." },
      { title: "Honest descriptions", body: "If a camp has shared bathrooms or no power after 10pm, we say so before you book." },
    ],
    packages: [
      {
        name: "Comfort Tented Camp",
        duration: "per night",
        usd: "$140",
        kes: "KES 18,000",
        summary: "En-suite tent, full board, shared game drives. Per person sharing.",
      },
      {
        name: "Premium Lodge",
        duration: "per night",
        usd: "$310",
        kes: "KES 40,000",
        summary: "Conservancy lodge, full board, private vehicle option. Per person sharing.",
      },
      {
        name: "Exclusive-Use House",
        duration: "per night",
        usd: "$1,850",
        kes: "KES 239,000",
        summary: "Whole house, staff, chef and vehicle for up to eight guests.",
      },
    ],
  },
  {
    slug: "groups",
    path: "/groups",
    title: "Group & Corporate Travel",
    duration: "tailored",
    image: catGroups,
    lead: "Team retreats, incentives and family reunions, run to the minute.",
    intro:
      "We plan travel for boards, sales teams, conferences, schools and large families. One planner owns your file, prices come with a written cost breakdown, and invoices are issued in KES or USD to suit your finance team.",
    highlights: [
      { title: "One named planner", body: "A single point of contact from quote to final invoice, reachable on WhatsApp." },
      { title: "Finance-ready paperwork", body: "ETR invoices, purchase-order references, and KES or USD billing with clear payment terms." },
      { title: "On-ground coordinators", body: "For groups over 20, a coordinator travels with you to manage rooms, meals and timings." },
    ],
    packages: [
      {
        name: "Team Retreat",
        duration: "3 days",
        usd: "$540 pp",
        kes: "KES 70,000 pp",
        summary: "Naivasha or Nanyuki lodge, meeting room, facilitated activities and transport.",
      },
      {
        name: "Incentive Safari",
        duration: "5 days",
        usd: "$1,980 pp",
        kes: "KES 256,000 pp",
        summary: "Mara conservancy nights, sundowner dinner and a balloon flight for top performers.",
      },
      {
        name: "Conference & Excursion",
        duration: "tailored",
        usd: "On request",
        kes: "On request",
        summary: "Venue sourcing, delegate transfers, spouse programme and post-event safari.",
      },
    ],
  },
];

export const experienceBySlug = (slug: string) =>
  experiences.find((experience) => experience.slug === slug)!;

export type Destination = {
  name: string;
  country: string;
  image: string;
  body: string;
};

export const destinations: Destination[] = [
  {
    name: "Maasai Mara",
    country: "Kenya",
    image: destMara,
    body: "The great migration, big-cat country and riverside camps under wide skies.",
  },
  {
    name: "Kilimanjaro",
    country: "Tanzania",
    image: destKilimanjaro,
    body: "Africa's highest summit, guided across five climate zones.",
  },
  {
    name: "Diani",
    country: "Kenya",
    image: destDiani,
    body: "Powder-white sand, coral reefs and slow coastal mornings.",
  },
  {
    name: "Serengeti & Zanzibar",
    country: "Tanzania",
    image: destSerengeti,
    body: "Plain to spice island: migration country by day, stone-town markets by week's end.",
  },
];

export const wideDestinations: Destination[] = [
  {
    name: "Amboseli",
    country: "Kenya",
    image: catSafari,
    body: "Elephant herds crossing dust flats beneath the snows of Kilimanjaro.",
  },
  {
    name: "Bwindi",
    country: "Uganda",
    image: catMountain,
    body: "Mountain gorilla trekking in dense forest — permits are allocated months ahead.",
  },
  {
    name: "Lake Naivasha",
    country: "Kenya",
    image: catBalloon,
    body: "Boat mornings among hippos, Crescent Island walks and escarpment balloon flights.",
  },
  {
    name: "Zanzibar",
    country: "Tanzania",
    image: destDiani,
    body: "Stone Town alleys, spice farms and reef beaches on the Indian Ocean.",
  },
  {
    name: "Nairobi",
    country: "Kenya",
    image: catCity,
    body: "A capital with a national park on its doorstep, and East Africa's best food scene.",
  },
  {
    name: "Kigali",
    country: "Rwanda",
    image: catCulture,
    body: "Hills, memorials and a coffee culture that rewards a slow two days.",
  },
];

export const signatureItineraries = [
  {
    category: "Safari",
    name: "Mara Classic",
    duration: "6 days",
    usd: "$2,890",
    kes: "KES 370,000",
    body: "Four nights in the Mara, one in Amboseli, with a dawn balloon option.",
    image: itinMara,
    path: "/safaris",
  },
  {
    category: "Beach",
    name: "Diani & Watamu Coast",
    duration: "5 days",
    usd: "$1,640",
    kes: "KES 212,000",
    body: "Oceanfront suites, a reef snorkel day and a dhow sunset cruise.",
    image: itinCoast,
    path: "/beaches",
  },
  {
    category: "Mountain",
    name: "Kilimanjaro Traverse",
    duration: "8 days",
    usd: "$3,450",
    kes: "KES 445,000",
    body: "Machame route with acclimatisation days and a certified mountain crew.",
    image: itinKili,
    path: "/adventure",
  },
] as const;
