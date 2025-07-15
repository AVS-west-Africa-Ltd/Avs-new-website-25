// Define the process step data structure
export interface ProcessStep {
  number: string;
  title: string;
  description: string[];
  subDescription?: string;
  imageSrc: string;
  hasButton?: boolean;
  hasList?: boolean;
  bulletList?: string[];
}

export const sanityPageConfig = {
  projectId: "izzfhgn0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-05-01",
  headerId: "a86b95bf-8e1d-4349-848f-20eea243eeea",
  landingPageId: "fa838201-026b-4c2d-806d-aa32635c42ba",
  caseStudyPageId: "2fbe095f-cbdb-41a8-90d2-84c6e02d0545",
  footerPageId: "094fe1f2-ff07-4a90-b3bc-4b9f62ad34fb",
  ourProcessPageId: "2404549c-ec7a-4495-9bb1-04b0eb975c55",
  resourcesPageId: "3a29be43-2300-4844-9134-3b5635c8f88a",
  contactPageId: "4c1a2bce-a21e-4b2b-a092-8c598ea4b103",
  servicePageId: "58c6d594-7676-4d8d-a81e-810cba1f8bdb",
  metaTagPagId:"4d19119f-9c6a-456f-9dab-f2e1ab90fca1"
};

// Create an array of process steps
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Strategy",
    description: [
      "Every great product starts with a solid foundation.",
      "We conduct in-depth market research, analyse competitors, and identify your target audience to define a clear, data-driven strategy.",
      "By understanding industry trends and customer needs, we ensure that your vision aligns with real market demands, giving you the best chance for success.",
    ],
    imageSrc: "/assets/Our-process/ourprocess8.svg",
  },
  {
    number: "02",
    title: "Branding & Identity",
    description: [
      "Your brand is more than just a logo—it's the story, emotions, and identity that make you stand out.",
      "We help you craft a strong, memorable brand identity with compelling visuals, a unique voice, and consistent messaging.",
      "From typography and colour schemes to brand positioning and guidelines, we ensure your brand resonates with your audience and builds trust.",
    ],
    imageSrc: "/assets/Our-process/ourprocess7.svg",
  },
  {
    number: "03",
    title: "User Experience & Design",
    description: [
      "A beautiful design is useless if it's not user-friendly.",
      "We create intuitive, engaging, and high-converting user experiences that keep your audience coming back.",
      "Our UI/UX design process focuses on clarity, ease of use, and functionality to ensure that every interaction is smooth and meaningful, leading to higher customer satisfaction and retention.",
    ],
    imageSrc: "/assets/Our-process/ourprocess6.svg",
  },
  {
    number: "04",
    title: "Project Management",
    description: [
      "Bringing a vision to life requires structure and efficiency.",
      "Our project management approach ensures seamless collaboration, clear communication, and timely execution.",
      "We set milestones, manage resources, and keep the project on track so you can focus on your business while we handle the details.",
    ],
    imageSrc: "/assets/Our-process/ourprocess5.svg",
  },
  {
    number: "05",
    title: "Development & Implementation",
    description: [
      "With the right technology stack, we transform designs into fully functional, high-performance products.",
      "Our development team ensures your website or application is responsive, scalable, and optimised for a seamless user experience.",
      "Whether it's a web platform, mobile app, or SaaS solution, we use best practices and the latest tech to bring your vision to life.",
    ],
    imageSrc: "/assets/Our-process/ourprocess4.svg",
  },
  {
    number: "06",
    title: "Testing & Refinement",
    description: [
      "Quality is non-negotiable.",
      "We conduct rigorous testing across multiple devices, browsers, and use cases to ensure a flawless experience.",
      "From functionality and security tests to performance optimisation, we refine every detail, fixing bugs and improving usability before launch.",
    ],
    imageSrc: "/assets/Our-process/ourprocess3.svg",
  },
  {
    number: "07",
    title: "Launch & Deployment",
    description: [
      "The big moment!",
      "We guide you through a smooth and strategic launch, ensuring your product is deployed efficiently and reaches the right audience.",
      "Our team ensures everything runs seamlessly, whether it's setting up hosting, configuring domains, or integrating analytics to track performance.",
    ],
    imageSrc: "/assets/Our-process/ourprocess2.svg",
  },
  {
    number: "08",
    title: "Ongoing Support & Maintenance",
    description: [
      "Your journey doesn't end at launch.",
      "We provide continuous support, updates, and optimisations to keep your product running smoothly.",
      "From adding new features to enhancing performance and security, we ensure your business remains competitive and scalable as it grows.",
    ],
    imageSrc: "/assets/Our-process/ourprocess1.svg",
  },
  {
    number: "09",
    title: "Funding",
    description: [
      "Even the best ideas need financial backing to thrive.",
      "We help you identify funding opportunities, whether through bootstrapping, grants, angel investors, or venture capital.",
      "Our team works with you to refine your funding strategy, ensuring that your business is financially structured for success.",
    ],
    imageSrc: "/assets/Our-process/Ourporcesspen.svg",
    hasButton: true,
  },
  {
    number: "10",
    title: "Networking Introductions",
    description: [
      "Success often comes down to the right connections.",
      "We introduce you to key players in the industry—potential investors, mentors, and strategic partners who can help accelerate your growth.",
      "By leveraging our network, we create opportunities for collaboration, investment, and long-term success.",
    ],
    imageSrc: "/assets/Our-process/ourprocess9.svg",
  },
];

export const fundingSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Assess Your Funding Needs",
    description: [
      "Before seeking funding, it’s crucial to understand exactly how much capital you need. ",
      "We help you evaluate your financial requirements for product development, operations, marketing, hiring, and long-term growth. ",
      "By analysing your business model and goals, we ensure you have a clear roadmap for how funds will be allocated, preventing unnecessary financial strain down the line.",
    ],
    imageSrc: "/assets/Our-process/assess.svg",
  },
  {
    number: "02",
    title: "Explore Funding Options",
    description: [
      "Not all funding sources are the same. We guide you through different financing avenues, including:",
    ],
    subDescription:
      "We help you determine the best funding strategy based on your business model, industry, and growth trajectory. ",
    imageSrc: "/assets/Our-process/fund2.svg",
    hasList: true,
    bulletList: [
      "Studio Partnership Model – Work with A Venture Studio to fund your business using a blended model of equity and cash support.",
      "Bootstrapping – Using personal savings or revenue to fund growth.",
      "Angel Investors – Securing funds from individuals looking to invest in early-stage startups.",
      "Venture Capital – Attracting institutional investors for high-growth potential.",
      "Grants & Competitions – Leveraging non-dilutive funding opportunities for startups.",
    ],
  },
  {
    number: "03",
    title: "Build a Solid Pitch & Business Plan",
    description: [
      "Investors don’t just fund ideas—they fund strong business strategies. ",
      "We help you craft an investor-ready pitch deck that highlights your startup’s market potential, value proposition, revenue model, and competitive edge. ",
      "Additionally, we assist in creating a detailed business plan with financial projections, go-to-market strategies, and risk mitigation plans to give investors confidence in your vision.",
    ],
    imageSrc: "/assets/Our-process/fund3.svg",
  },
  {
    number: "04",
    title: "Networking & Investor Outreach",
    description: [
      "The right funding opportunities don’t just come to you—you need to find and engage with the right investors. ",
      "We connect you with venture capitalists, angel investors, accelerators, and crowdfunding platforms to maximise your chances of securing capital. ",
      "Our approach ensures you’re targeting investors who align with your industry, stage, and business goals.",
    ],
    imageSrc: "/assets/Our-process/businesshand.svg",
  },
  {
    number: "05",
    title: "Legal & Financial Structuring",
    description: [
      "Securing funding isn’t just about getting the money—it’s also about setting up your business for long-term success. We guide you through the legal and financial aspects of fundraising, including: ",
    ],
    imageSrc: "/assets/Our-process/legal.svg",
    hasList: true,
    bulletList: [
      "Structuring equity distribution (how much ownership to give investors).",
      "Drafting agreements to protect your interests.",
      "Understanding financial obligations, tax implications, and compliance requirements.",
    ],
  },
  {
    number: "06",
    title: "Due Diligence & Negotiation",
    description: [
      "Before investors commit to funding, they’ll conduct extensive due diligence on your business. ",
      "We help you prepare all necessary documents, including legal filings, financial statements, and growth metrics. ",
      "Additionally, we guide you through negotiations, ensuring you secure favourable terms that protect your ownership and future growth potential. ",
    ],
    imageSrc: "/assets/Our-process/ourprocess9.svg",
  },
  {
    number: "07",
    title: "Funding Acquisition & Growth",
    description: [
      "Once you’ve secured funding, the real work begins. ",
      "We assist in strategically allocating your funds to maximise growth, focusing on product development, marketing, hiring, and operational scaling. ",
      "With a structured approach, we help ensure your startup stays on track, meets milestones, and continues to attract future investment rounds.",
    ],
    imageSrc: "/assets/Our-process/stamp.svg",
  },
];

export const projectDetails = [
  {
    title: "Client",
    content: "Rateo",
  },
  {
    title: "Services",
    content: "Branding, Research, UI/UX Design, Development",
  },
  {
    title: "Timeline",
    content: "Dec. 2024 - Ongoing",
  },
  {
    title: "Platform",
    content: "Android & iOS",
  },
  {
    title: "Tools",
    content: "tools",
    isTools: true,
  },
];

export const overviewData = [
  {
    text: "Rateo is a platform designed to bring transparency to workplace experiences by allowing employees and employers to rate each other based on their time working together.",
  },
  {
    text: "Our goal was to help Rateo create a seamless, user-friendly experience that encourages honest feedback while maintaining fairness and anonymity. Our team worked to design an intuitive platform, to meet both client and user needs.",
  },
];

export const designSteps = [
  {
    id: 1,
    title: "Ideation & Workshops",
  },
  {
    id: 2,
    title: "Research & Interviews",
  },
  {
    id: 3,
    title: "Lo-Fi Wireframing",
  },
  {
    id: 4,
    title: "Review & Q/A",
  },
  {
    id: 5,
    title: "Hi-Fi Wireframing & Prototyping",
  },
  {
    id: 6,
    title: "Usability Testing",
  },
  {
    id: 7,
    title: "Handoff & Development",
  },
  {
    id: 8,
    title: "Testing",
  },
];

export const userFlows = [
  {
    title: "Onboarding flow for Individuals",
    imageSrc: "/assets/image 459.svg",
    imageAlt: "Onboarding flow diagram for individuals",
  },
  {
    title: "Onboarding flow for Companies",
    imageSrc: "/assets/image 460.svg",
    imageAlt: "Onboarding flow diagram for companies",
  },
];
