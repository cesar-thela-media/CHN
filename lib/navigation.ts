/** Shared multi-page IA for CHN chrome (header / footer / stubs). */

export type NavLink = {
  href: string;
  label: string;
};

/** Primary nav: Contact is CTA button only (Begin Your Journey), not a text link. */
export const primaryNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/buyers", label: "Buyers" },
  { href: "/partners", label: "Partners" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
];

/** Services mega items, real detail routes. */
export const servicesNav: NavLink[] = [
  { href: "/services/land-acquisition", label: "Land Acquisition" },
  { href: "/services/architectural-design", label: "Architectural Design" },
  { href: "/services/custom-building", label: "Custom Building" },
  { href: "/services/finance-title", label: "Finance & Title" },
  { href: "/services/interior-design", label: "Interior Design" },
  { href: "/services/project-management", label: "Project Management" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/buyers", label: "For Buyers" },
      { href: "/partners", label: "For Partners" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];
