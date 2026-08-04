/**
 * Brand facts for Custom Home Network.
 * Copy and sitemap derived from customhomenetwork.com.
 */
export const site = {
  name: "Custom Home Network",
  shortName: "CHN",
  tagline: "Your Custom Home Journey Starts Here",
  sloganAlt: "Experience the Pinnacle of Custom Home Building",
  ctaPrimary: "Begin Your Journey",
  ctaSecondary: "Get in Touch",
  /** Short hero subhead for luxury scan */
  heroSubhead:
    "Complimentary white-glove. A vetted network. Seamless from concept to completion.",
  description:
    "Luxury custom home builder providing complimentary white-glove service from concept to completion: land, design, construction, finance, interiors, and project management at no cost to you.",
  url: "https://customhomenetwork.com",
  email: "info@customhomenetwork.com",
  phone: "" as string,
  phoneDisplay: "" as string,
  hours: "Monday to Friday, 9:00 AM to 5:00 PM",
  foundingYear: 2024,
  address: {
    street: "" as string,
    locality: "" as string,
    region: "" as string,
    postalCode: "" as string,
    country: "US",
  },
  serviceArea:
    "Serving local homeowners and families relocating from out of state",
  serviceAreaShort: "Local & relocating clients nationwide*",
  builderBonus: "0.5%",
  priceRange: "$$$",
  social: {
    twitter: "" as string,
    facebook: "" as string,
    instagram: "" as string,
    linkedin: "" as string,
    x: "" as string,
  },
  assets: {
    logoWhite: "/images/logo-white.png",
    heroImage: "/images/pinnaclebuilding.jpeg",
    heroVideo: "/video/CHN.mp4",
    ogImage: "/images/pinnaclebuilding.jpeg",
  },
};

export function hasPhone(): boolean {
  const phone = site.phone.trim();
  return phone.length > 0 && !phone.includes("XXX");
}

export function hasAddress(): boolean {
  const street = site.address.street.trim();
  return street.length > 0 && street !== "TBD";
}

export function hasSocial(): boolean {
  return Boolean(
    site.social.facebook ||
      site.social.instagram ||
      site.social.linkedin ||
      site.social.x ||
      site.social.twitter,
  );
}

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
  /** Legacy editorial fields retained only for data compatibility. */
  problem?: string;
  whatWeDo?: string;
  whoInNetwork?: string;
  outcomes?: string[];
};

/** Unique image per service (no reuse across the six). */
export const services: Service[] = [
  {
    slug: "land-acquisition",
    title: "Land Acquisition & Evaluation",
    shortTitle: "Land Acquisition",
    description:
      "Discover the perfect location with our land experts who understand the nuances of prime real estate.",
    icon: "MapPin",
    image: "/images/land-hills.jpg",
    problem:
      "The wrong lot is expensive forever: easements, utilities, views, and resale value hide in fine print.",
    whatWeDo:
      "We connect you with land specialists who evaluate sites with a builder's and architect's eye before you commit capital.",
    whoInNetwork:
      "Land brokers, local Realtors with custom-build experience, civil partners, and title resources.",
    outcomes: [
      "Clear go / no-go criteria before you fall in love with a parcel",
      "Diligence that includes buildability, not only comps",
      "Alignment with design intent from day one",
    ],
  },
  {
    slug: "architectural-design",
    title: "Architectural Design & Planning",
    shortTitle: "Architectural Design",
    description:
      "Collaborate with visionary architects and designers to bring your dream home to life with innovative and personalized designs.",
    icon: "PenTool",
    image: "/images/svc-architecture.jpg",
    problem:
      "Beautiful drawings that ignore how you live create friction later: change orders and regret.",
    whatWeDo:
      "We introduce architects who listen first, then design for light, privacy, and circulation with constructability in mind.",
    whoInNetwork:
      "Residential architects, planning consultants, and design partners for high-end residential work.",
    outcomes: [
      "Design rooted in how you actually live",
      "Early dialogue between design and build",
      "A clear narrative you can hold through construction",
    ],
  },
  {
    slug: "custom-building",
    title: "Custom Home Building",
    shortTitle: "Custom Building",
    description:
      "Entrust your project to our vetted network of builders known for exceptional craftsmanship and attention to detail.",
    icon: "Home",
    image: "/images/svc-framing.jpg",
    problem:
      "Not every custom builder is set up for true custom: communication and craftsmanship standards vary wildly.",
    whatWeDo:
      "We introduce builders vetted for process discipline and finish quality, with context kept aligned.",
    whoInNetwork:
      "Custom residential builders, superintendents, and specialty trade partners known for craft over volume.",
    outcomes: [
      "Builders matched to scope and ambition",
      "Clearer sequencing and fewer surprise gaps",
      "Exclusive 0.5% builder bonus pre-negotiated for network clients",
    ],
  },
  {
    slug: "finance-title",
    title: "Finance & Title Services",
    shortTitle: "Finance & Title",
    description:
      "Navigate financial complexities effortlessly with our specialized finance and title partners.",
    icon: "Landmark",
    image: "/images/svc-finance.jpg",
    problem:
      "Construction loans, draws, and title exceptions can derail strong design if capital paths stay opaque.",
    whatWeDo:
      "We bring finance and title partners who explain options plainly and align draws with the build plan.",
    whoInNetwork:
      "Residential lenders familiar with custom construction, mortgage advisors, and title professionals.",
    outcomes: [
      "Capital paths matched to project type",
      "Title diligence that supports clean closings",
      "Fewer last-minute financial surprises",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design & Finishing Touches",
    shortTitle: "Interior Design",
    description:
      "Enhance your home’s interior with bespoke design solutions that epitomize luxury and comfort.",
    icon: "Sofa",
    image: "/images/svc-interiors.jpg",
    problem:
      "Interiors bolted on late become catalogs of compromises or budgets that explode.",
    whatWeDo:
      "We introduce interior designers who work with the architectural language early: materials, millwork, and lighting.",
    whoInNetwork:
      "Interior designers, finish specialists, and lighting or millwork collaborators.",
    outcomes: [
      "Interiors integrated with architecture",
      "Finish decisions sequenced with construction",
      "Rooms that feel lived-in, not staged",
    ],
  },
  {
    slug: "project-management",
    title: "Personalized Project Management",
    shortTitle: "Project Management",
    description:
      "Benefit from comprehensive project management expertise with dedicated oversight through completion.",
    icon: "ClipboardCheck",
    image: "/images/svc-project.jpg",
    problem:
      "When no one owns the whole story, owners become project managers chasing answers across firms.",
    whatWeDo:
      "Our complimentary white-glove service coordinates introductions and sequencing across your full journey.",
    whoInNetwork:
      "Our network leads plus every specialist on your path, kept aligned through shared context.",
    outcomes: [
      "One coherent journey instead of six parallel ones",
      "Proactive communication, not reactive fire drills",
      "At no cost to you: partner-funded white-glove guidance",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We listen first (vision, lifestyle, timeline), then assemble the right partners for your path.",
  },
  {
    step: "02",
    title: "Land & Design",
    description:
      "Secure the site. Shape the plan. Architecture that belongs to how you actually live.",
  },
  {
    step: "03",
    title: "Build & Finish",
    description:
      "Craftsmanship under coordinated oversight: structure, systems, and the quiet finishing moves.",
  },
  {
    step: "04",
    title: "Move In",
    description:
      "Walk rooms that feel inevitable. A journey as considered as the home itself.",
  },
] as const;

export { insights, getInsightBySlug, getAllInsightSlugs } from "@/lib/insights";
