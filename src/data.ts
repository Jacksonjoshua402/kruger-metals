export const COMPANY = {
  name: "Krugers Metal Fabrication",
  tagline: "Precision Metal Fabrication & Architectural Design",
  phone: "+260 955 332 000",
  phoneHref: "tel:+260955332000",
  email: "krugersmetalfabrications@gmail.com",
  address: {
    line1: "18/13 off Simon Mwansa Kapwepwe Road",
    line2: "Chainda, Lusaka, Zambia, 10101",
  },
  founded: 2020,
  years: 6,
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cnc-pergola",
    title: "Shattered-Glass CNC Pergola & Screen Wall",
    category: "Architectural Metalwork",
    description:
      "A show-stopping laser-cut pergola roof paired with matching privacy screens and a feature gate, all sharing one fractured-glass motif. Customisable sizes and shapes with a seamless, professional installation.",
    image: "/images/cnc-pergola-1.jpg",
  },
  {
    id: "vine-gate",
    title: "Vine & Leaf Sliding Gate",
    category: "Custom Gates",
    description:
      "A statement sliding gate combining vertical steel bars with a laser-cut vine and leaf pattern. Delivered on time with the precision and professionalism our clients have come to expect.",
    image: "/images/vine-sliding-gate-1.jpg",
  },
  {
    id: "kumwitu",
    title: "KUMWITU Luxury Apartments — Entrance Gate",
    category: "Custom Gates",
    description:
      "A striking laser-cut leaf-pattern swing gate and matching pedestrian door installed at the entrance of KUMWITU Luxury Apartments, combining bold design with everyday security.",
    image: "/images/kumwitu-gate.jpg",
  },
  {
    id: "industrial-mesh",
    title: "Industrial Mesh-Panel Gate",
    category: "Custom Gates / Industrial",
    description:
      "A bold black gate combining solid panels, geometric cut-outs, and mesh infill for ventilation and visibility — built for durability in an industrial setting.",
    image: "/images/industrial-mesh-gate.jpg",
  },
  {
    id: "chifwema",
    title: "Chifwema Balcony Balustrade & Pergola",
    category: "Architectural Metalwork",
    description:
      "Matching CNC laser-cut balustrade and overhead pergola installed on a residential balcony in Chifwema — a cohesive design language carried across two structures.",
    image: "/images/chifwema-pergola.jpg",
  },
  {
    id: "steel-windows",
    title: "Steel Sliding Windows & Burglar Bars",
    category: "Steel Windows",
    description:
      "Durable, security-rated steel sliding windows in horizontal-bar and louvre styles, precision-fitted for a clean finish and lasting protection.",
    image: "/images/window-sliding-1.jpg",
  },
  {
    id: "structural-steel",
    title: "Commercial Steel Framework",
    category: "Structural Steel",
    description:
      "Load-bearing structural steel framework fabricated and installed for commercial construction. Engineered for strength, accuracy, and dependable long-term performance.",
    image: "/images/structural.jpg",
  },
  {
    id: "welding-showcase",
    title: "Precision Welding & Fabrication",
    category: "Welding Services",
    description:
      "Certified MIG, TIG, and arc welding across structural and architectural components, delivering clean, strong joints for both workshop fabrication and on-site repairs.",
    image: "/images/welding.jpg",
  },
  {
    id: "pergola",
    title: "Architectural Pergola / Modern Carport",
    category: "Architectural Metalwork",
    description:
      "Large-scale structure with laser-cut ornamental panels and geometric patterns. Weather-resistant, UV-stable coating. Functional and visually striking shade solution.",
    image: "/images/pergola.jpg",
  },
  {
    id: "zebra",
    title: "Zebra Pattern Decorative Gate",
    category: "Custom Gates",
    description:
      "Geometric ornamental design featuring intricate zebra striping. Powder-coated finish, bespoke specification for enhanced security with aesthetic appeal.",
    image: "/images/gate-zebra.jpg",
  },
];

export type Service = {
  id: string;
  title: string;
  icon: string;
  short: string;
  long: string;
  image?: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "custom-gates",
    title: "Custom Gates",
    icon: "gate",
    short:
      "From decorative residential to industrial security gates. Bespoke designs, precision fabrication, premium finishes.",
    long: "We design and fabricate gates that combine security with striking aesthetics — from ornate decorative residential entrances to heavy-duty industrial security barriers. Every gate is engineered to specification with premium powder-coated finishes and motorization-ready options.",
    image: "/images/gate-zebra.jpg",
    features: [
      "Decorative & ornamental gates",
      "Sliding & swing gate systems",
      "Motorization-ready fabrication",
      "Powder-coated premium finishes",
    ],
  },
  {
    id: "architectural-metalwork",
    title: "Architectural Metalwork",
    icon: "building",
    short:
      "Pergolas, carports, canopies, shade structures, decorative panels. Design-driven, weather-resistant solutions.",
    long: "Our architectural metalwork transforms outdoor and indoor spaces with design-led steel structures. We produce pergolas, carports, canopies and laser-cut decorative panels using weather-resistant, UV-stable coatings for lasting beauty.",
    image: "/images/pergola.jpg",
    features: [
      "Pergolas & shade structures",
      "Carports & canopies",
      "Laser-cut decorative panels",
      "Balustrades & railings",
    ],
  },
  {
    id: "structural-steel",
    title: "Structural Steel",
    icon: "beam",
    short:
      "Load-bearing frameworks, building frames, industrial structures. Engineered for strength and precision.",
    long: "We fabricate load-bearing steel frameworks for buildings and industrial applications, engineered for strength, safety and precision. From building frames to platforms and mezzanines, we deliver structural integrity you can trust.",
    image: "/images/structural.jpg",
    features: [
      "Building frames & trusses",
      "Industrial structures",
      "Platforms & mezzanines",
      "Engineered load-bearing designs",
    ],
  },
  {
    id: "machinery-parts",
    title: "Machinery Parts",
    icon: "gear",
    short:
      "Custom-machined and fabricated components, repairs, and replacement parts for industrial equipment.",
    long: "Keep your operations running with custom-fabricated machinery parts, replacements and repairs. We reverse-engineer worn components and manufacture precision parts to keep your equipment productive.",
    features: [
      "Custom component fabrication",
      "Replacement & repair parts",
      "Reverse engineering",
      "Precision machining",
    ],
  },
  {
    id: "welding-services",
    title: "Welding Services",
    icon: "weld",
    short:
      "Professional MIG, TIG, and arc welding for fabrication, repairs, and on-site work.",
    long: "Our certified welders deliver clean, strong, professional welds across MIG, TIG and arc processes. Whether workshop fabrication or on-site repairs, we guarantee structural quality and finish.",
    image: "/images/welding.jpg",
    features: [
      "MIG, TIG & arc welding",
      "On-site welding & repairs",
      "Stainless & mild steel",
      "Certified quality welds",
    ],
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    icon: "pencil",
    short:
      "Sketch-to-CAD conversion and 3D visualization. We turn your concept into precision-engineered reality.",
    long: "Our design service bridges imagination and fabrication. Bring us a sketch, a photo or just an idea — we convert it into detailed CAD drawings and 3D visualizations, refining every dimension before a single cut is made.",
    features: [
      "Sketch-to-CAD conversion",
      "3D visualization & renders",
      "Material & finish advice",
      "Detailed technical drawings",
    ],
  },
];

export const VALUES = [
  {
    title: "Precision",
    icon: "target",
    desc: "Every measurement, cut, and weld meets exacting standards. Accuracy is non-negotiable.",
  },
  {
    title: "Creativity",
    icon: "bulb",
    desc: "We approach each project as a design challenge, blending functionality with aesthetic innovation.",
  },
  {
    title: "Quality",
    icon: "shield",
    desc: "Uncompromising commitment to materials, techniques, and finishes that stand the test of time.",
  },
  {
    title: "Reliability",
    icon: "handshake",
    desc: "We deliver on timelines, communicate transparently, and stand behind every project.",
  },
];
