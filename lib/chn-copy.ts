/**
 * Canonical copy transcribed from the approved public CHN source page.
 * Keep presentation components separate from these business messages.
 */
export const chnCopy = {
  hero: {
    eyebrow: "",
    title: "Your Custom Home Journey Starts Here",
    body:
      "Our complimentary white-glove service and vetted network make your custom home journey seamless and extraordinary from concept to completion.",
    primaryCta: "Begin Your Journey",
    scroll: "SCROLL",
  },
  experience: {
    title: "Experience the Pinnacle of Custom Home Building",
    paragraphs: [
      "At Custom Home Network, we specialize in transforming your unique vision into a breathtaking reality. Our white-glove service seamlessly guides you through every step of the custom home-building process, providing unparalleled access to our exclusive network of top-tier Realtors, architects, builders, and financial experts.",
      "Whether you’re a local resident seeking to elevate your lifestyle or transitioning from another state, we are your trusted partner in crafting a home that reflects your individuality and aspirations.",
    ],
  },
  value: {
    eyebrow: "Unlocking Additional Value At No Cost To You",
    paragraphs: [
      "When you use our white glove service, we work for you at no cost. Our network partners cover all our expenses, enabling us to provide the ultimate home-building experience with absolutely no financial commitment from you.",
      "Plus, receive an additional 0.5% bonus incentive pre-negotiated with builders exclusively for our clients.",
    ],
  },
  services: {
    title: "Our Comprehensive Suite of Services",
    subtitle: "A Seamless Experience Tailored to You",
  },
  whoWeAre: {
    title: "Who We Are",
    paragraphs: [
      "Custom Home Network was founded on the principle that building your dream custom home should be an inspiring and joyful experience, not a source of stress. We are dedicated to transforming the industry by providing unparalleled expertise, personalized service, and access to the finest professionals in the business.",
      "Our mission is simple: to make your custom home journey as smooth and rewarding as the home you’ll live in for years to come.",
    ],
  },
  insights: {
    title: "Discover how to infuse your personality into every room.",
    cta: "Explore Our Insights",
  },
  contact: {
    eyebrow: "Ready to Begin Your Journey?",
    title: "Let’s Craft Your Home. Together.",
    body:
      "Contact us today to schedule a personalized consultation and take the first step to partnering with you on this exciting journey.",
    cta: "Get in Touch",
  },
  newsletter: {
    title: "Our Newsletter",
    body: "Stay updated with the latest news and insights from the custom home building industry.",
    cta: "Subscribe",
  },
  /** Live header labels (customhomenetwork.com). */
  nav: {
    links: ["Home", "Services", "About"],
    cta: "Contact Us",
  },
  /** Live footer copy, verbatim (including the © 2024 line and emoji icons). */
  footer: {
    wordmark: ["CUSTOM HOME", "NETWORK"],
    tagline:
      "Your trusted partner in creating exceptional custom homes that reflect your unique vision and lifestyle.",
    quickLinksTitle: "Quick Links",
    quickLinks: ["Home", "Buyers", "Partners", "Contact"],
    connectTitle: "Connect",
    connect: [
      { label: "Facebook", icon: "📘" },
      { label: "Instagram", icon: "📷" },
      { label: "LinkedIn", icon: "💼" },
    ],
    copyright: "© 2024 Custom Home Network. All rights reserved.",
  },
} as const;

export const sourceServices = [
  {
    slug: "land-acquisition",
    title: "Land Acquisition & Evaluation",
    description:
      "Discover the perfect location with our land experts who understand the nuances of prime real estate.",
  },
  {
    slug: "architectural-design",
    title: "Architectural Design & Planning",
    description:
      "Collaborate with visionary architects and designers to bring your dream home to life with innovative and personalized designs.",
  },
  {
    slug: "custom-building",
    title: "Custom Home Building",
    description:
      "Entrust your project to our vetted network of builders known for exceptional craftsmanship and attention to detail.",
  },
  {
    slug: "finance-title",
    title: "Finance & Title Services",
    description:
      "Navigate financial complexities effortlessly with our specialized finance and title partners.",
  },
  {
    slug: "interior-design",
    title: "Interior Design & Finishing Touches",
    description:
      "Enhance your home’s interior with bespoke design solutions that epitomize luxury and comfort.",
  },
  {
    slug: "project-management",
    title: "Personalized Project Management",
    description:
      "Benefit from our comprehensive project management expertise with dedicated oversight through completion.",
  },
] as const;
