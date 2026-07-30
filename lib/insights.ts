/** Insight articles, shared by index, detail routes, homepage preview. */

export type InsightArticle = {
 slug: string;
 title: string;
 excerpt: string;
 category: string;
 date: string;
 readMinutes: number;
 image: string;
 /** Paragraphs of body copy */
 body: string[];
};

export const insights: InsightArticle[] = [
 {
 slug: "designing-for-how-you-live",
 title: "Design for how you actually live",
 excerpt:
 "Beyond showpiece rooms: flow, light, and personality without sacrificing daily ease.",
 category: "Design",
 date: "2026-03-12",
 readMinutes: 6,
 image: "/images/unlockvalue.jpg",
 body: [
 "Most custom homes fail quietly, not in the renderings, but on a Tuesday evening when the kitchen island is wrong for how the household actually moves. The great rooms photograph beautifully. The mudroom is an afterthought. The light is dramatic at noon and harsh at dinner. Designing for how you live means treating lifestyle as primary data, not decoration layered on later.",
 "Start with sequences, not square footage. Where do bags land after school or travel? Where does coffee happen before anyone is ready for company? Which rooms need acoustic separation, and which should borrow light from each other? A floor plan that honors those answers will feel inevitable; one that ignores them will feel expensive and slightly wrong for years.",
 "Light is a material. Orientation, glazing, and overhangs decide whether rooms feel calm or staged. We encourage owners to walk the site at different hours before locking massing. North light for studios and galleries; controlled west light for living spaces; morning sun where mornings matter. Interiors then amplify that logic with finishes that age, not finishes that trend.",
 "Personality without chaos is the other half. Collecting objects, art, and textures works when the architecture provides a clear skeleton: proportion, axes, and quiet planes that can host life. Catalog “luxury” packages reverse that order: they fill rooms first and hope the plan can carry them. The homes that age best reverse it again: structure and light first, then the personal layer.",
 "Custom Home Network introduces architects who listen before they draw. The goal is not a house that impresses a weekend guest once; it is a house that supports the real week, every week, for decades. When design is rooted in how you live, every later decision (builder, budget, interiors) gets easier, because the story is already true.",
 ],
 },
 {
 slug: "choosing-land-with-clarity",
 title: "Choose land with clarity",
 excerpt:
 "Views, easements, utilities, and long-term value: what luxury buyers often miss on the lot.",
 category: "Land",
 date: "2026-04-02",
 readMinutes: 7,
 image: "/images/land-hills.jpg",
 body: [
 "Land is the only decision you cannot fully redesign. Paint changes. Plans revise. A parcel’s access, soils, setbacks, and easements do not. Buyers who fall in love with a view without translating buildability often discover the romance at the first civil review, or worse, after closing.",
 "Clarity begins with a simple question: can this site become the house you imagine, at a budget and timeline you can live with? That answer lives in utilities, topography, drainage, access roads, HOA or deed restrictions, and the unglamorous documents that govern what may actually be built. A stunning outlook with unworkable setbacks is not a bargain; it is a constraint with good lighting.",
 "Walk the lot like a builder and an architect, not only like a photographer. Where would the garage sit without dominating the entry? How does a service path work? What happens to water after a heavy rain? Which neighbors’ windows face yours? Views sell emotion; adjacency sells daily life. Both matter.",
 "Diligence is not pessimism; it is respect for capital. Survey, title, soils, and early feasibility conversations compress risk. They also open options: a different pad location, a quieter massing strategy, or the decision to walk away while walking away is still cheap. The cost of good diligence is almost always less than the cost of a beautiful mistake.",
 "Through Custom Home Network, land specialists work alongside design and build partners so evaluation is not a siloed transaction. You get a site judgment that already anticipates architecture and construction, not a resale pitch dressed as a dream. Choose land with clarity, and the rest of the journey has solid ground under it.",
 ],
 },
 {
 slug: "white-glove-without-the-invoice",
 title: "White-glove without the invoice",
 excerpt:
 "How a partner-funded network keeps concierge service complimentary, and what that means for you.",
 category: "Process",
 date: "2026-05-18",
 readMinutes: 5,
 image: "/images/luxurypool.jpg",
 body: [
 "White-glove usually means a premium line item. Someone is paid to coordinate, anticipate, and protect your time, and that someone appears on your invoice. Custom Home Network is built differently: the concierge layer is complimentary to the client because the network’s professional partners fund the model. You receive oversight without adding another fee to the project stack.",
 "That structure only works if incentives stay aligned. Partners join because the clients are serious, the handoffs are clean, and the standard of work is high. Clients stay because the journey feels calm and the economics are transparent, including an exclusive 0.5% builder bonus pre-negotiated for network clients. No one is inventing mystery markups in the dark.",
 "What “complimentary” does not mean is informal. You still get a deliberate process: discovery, the right introductions, sequencing across land, design, build, finance, and interiors, and a single through-line of context so you are not re-explaining your life to every new firm. The absence of a fee is not the absence of rigor.",
 "Owners often ask who pays for our time. Network partners do, as part of participating in a curated flow of high-intent custom work. That keeps our counsel independent of selling you square footage or a particular product package. Our job is the journey, not a single trade’s close.",
 "If you have been quoted “project management” as a percentage that feels abstract, or you have tried to self-coordinate six firms and lost weekends to email, the partner-funded model is worth understanding. White-glove without the invoice is not a slogan; it is an operating system for building carefully, with craft on site and clarity in the room where decisions get made.",
 ],
 },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
 return insights.find((a) => a.slug === slug);
}

export function getAllInsightSlugs(): string[] {
 return insights.map((a) => a.slug);
}
