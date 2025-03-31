interface IProjectDetails {
  title: string;
  content: string;
  isTools?: boolean;
}

interface IOData {
  text: string;
}

interface IOverviewData {
  title?: string;
  data?: IOData[];
}

interface IDesignSteps {
  id: any;
  title: string;
}

interface IProcess {
  title: string;
  cardBgColor?: string
  designSteps: IDesignSteps[];
}

interface IWorkShops {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface IUserFlowData {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface IUserFlow {
  title: string;
  userFlowData: IUserFlowData[];
}

interface IWireframe {
  title: string;
  description: string;
  bgColor?: string;
  imageUrls: string[];
}

export interface CaseDetails {
  id?: any;
  appName?: string;
  shortDescription?: string;
  projectDetails?: IProjectDetails[];
  appImage?: string;
  overviewData?: IOverviewData;
  mockups?: string[];
  ourProcess?: IProcess;
  workShops?: IWorkShops | null;
  userFlows?: IUserFlow | null;
  wireframes?: IWireframe;
  fidelityDesigns?: IWireframe;
  webDesigns?: IWireframe | null;
}

export const OurProjects: CaseDetails[] = [
  {
    id: 1,
    appName: "Rateo",
    shortDescription: "Redefining Workplace",
    projectDetails: [
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
    ],
    appImage: "/assets/rateo-bg.png",
    overviewData: {
      title: "Overview",
      data: [
        {
          text: "Rateo is a platform designed to bring transparency to workplace experiences by allowing employees and employers to rate each other based on their time working together.",
        },
        {
          text: "Our goal was to help Rateo create a seamless, user-friendly experience that encourages honest feedback while maintaining fairness and anonymity. Our team worked to design an intuitive platform, to meet both client and user needs.",
        },
      ],
    },
    mockups: ["/assets/rateo-homescreen.svg", "/assets/rs.svg"],
    ourProcess: {
      title: "Our process",
      cardBgColor: "#FFF5E1",
      designSteps: [
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
      ],
    },
    workShops: {
      title: "Ideation Workshops",
      description:
        "To define Rateo's vision, we conducted a workshop session with their team. Through discussions and brainstorming, we identified key features, refined user needs, and established a strong foundation for the platform's structure.",
      imageSrc: "/assets/image-455.png",
      imageAlt: "/assets/image-458.png",
    },
    userFlows: {
      title: "Userflows",
      userFlowData: [
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
      ],
    },
    wireframes: {
      title: "Wireframes",
      description:
        "With a clear direction in place, we created wireframes to map out user flows and interactions. This helped us validate the layout and ensure an intuitive experience before moving into the final design phase.",
      imageUrls: ["rateo1.svg", "rateo2.svg", "rateo3.svg", "rateo4.svg"],
    },
    fidelityDesigns: {
      title: "High Fidelity Designs",
      description:
        "Building on the wireframes, we developed high-fidelity designs with a modern, clean interface. The final design focused on accessibility, seamless navigation, and an engaging user experience tailored to Rateo’s mission.",
      imageUrls: ["rtd1.svg", "rtd2.svg", "rtd3.svg", "rtd4.svg"],
    },
    webDesigns: {
      title: "Website Design",
      bgColor: "#205352",
      description:
        "Using insights from research, we developed structured website that gives users insight into what Rateo offers.",
      imageUrls: ["wd.svg", "wd1.svg"],
    },
  },
  {
    id: 2,
    appName: "On The Go",
    shortDescription: "Get free wifi, On the Go!",
    projectDetails: [
      {
        title: "Client",
        content: "On The Go",
      },
      {
        title: "Services",
        content: "Branding, Research, UI/UX Design, Development",
      },
      {
        title: "Timeline",
        content: "Sep. 2024 - Ongoing",
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
    ],
    appImage: "/assets/otg.svg",
    overviewData: {
      title: "Overview",
      data: [
        {
          text: "OTG (On The Go) is a mobile app that helps users locate nearby Wi-Fi hotspots while enabling businesses to connect with potential customers. It provides real-time access to Wi-Fi availability, allowing users to discover new locations and stay connected effortlessly.",
        },
        {
          text: "AVS partnered with OTG to design an intuitive platform that streamlines Wi-Fi discovery, enhances user engagement, and improves business visibility. Our role covered ideation, wireframing, and high-fidelity designs, ensuring a seamless experience.",
        },
      ],
    },
    mockups: ["/assets/otg-splash.svg", "/assets/otg-onboarding.svg"],
    ourProcess: {
      title: "Our process",
      cardBgColor: "#BBCDFF",
      designSteps: [
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
      ],
    },
    workShops: null,
    userFlows: null,
    wireframes: {
      title: "Wireframes",
      description:
        "Using insights from research, we developed structured wireframes outlining navigation, user interactions, and key workflows. These low-fidelity prototypes allowed us to optimise usability before moving to the final designs.",
      imageUrls: ["otg-wire1.svg", "otg-wire2.svg", "otg-wire3.svg", "otg-wire4.svg"],
    },
    fidelityDesigns: {
      title: "High Fidelity Designs",
      description:
        "Building on the wireframes, we developed high-fidelity designs with a modern, clean interface. The final design focused on accessibility, seamless navigation, and an engaging user experience tailored to OTG’s mission.",
      imageUrls: ["otg-splash.svg", "otg-onboarding.svg", "otg-selection.svg", "otg-feed.svg"],
    },
    webDesigns: null,
  },
  {
    id: 3,
    appName: "One Touch Football",
    shortDescription: "Digital home for grassroots football",
    projectDetails: [
      {
        title: "Client",
        content: "One Touch Football",
      },
      {
        title: "Services",
        content: "Branding, Research, UI/UX Design, Development",
      },
      {
        title: "Timeline",
        content: "Nov. 2024 - Ongoing",
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
    ],
    appImage: "/assets/otf-bg.svg",
    overviewData: {
      title: "Overview",
      data: [
        {
          text: "Grassroots football is the foundation of talent development, community engagement, and the love for the sport at the local level. However, the ecosystem faces challenges, including the absence of a centralised platform for players, teams, and leagues to connect and coordinate effectively.",
        },
        {
          text: "For OTF, we redesigned their website and mobile app to create a more intuitive and engaging experience. Our approach focused on improving user navigation, enhancing team management tools, and optimizing player profiles to strengthen OTF’s role in fostering an active grassroots football community.",
        },
      ],
    },
    mockups: ["/assets/otf-splash.svg", "/assets/otf-path-selection.svg"],
    ourProcess: {
      title: "Our process",
      cardBgColor: "#FCCFE9",
      designSteps: [
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
      ],
    },
    workShops: null,
    userFlows: null,
    wireframes: {
      title: "Wireframes",
      description:
        "Using insights from research, we developed structured wireframes outlining navigation, user interactions, and key workflows. These low-fidelity prototypes allowed us to optimise usability before moving to the final designs.",
      imageUrls: ["otg-wire1.svg", "otg-wire2.svg", "otg-wire3.svg", "otg-wire4.svg"],
    },
    fidelityDesigns: {
      title: "High Fidelity Designs",
      description:
        "Building on the wireframes, we developed high-fidelity designs with a modern, clean interface. The final design focused on accessibility, seamless navigation, and an engaging user experience tailored to One Touch Football’s mission.",
      imageUrls: ["otf-splash.svg", "otf-player-of-the-match.svg", "otf-path-selection.svg", "otf-player-profile.svg"],
    },
    webDesigns: {
        title: "Website Design",
        bgColor: "#F72585",
        description:
          "Using insights from research, we developed structured website that gives users insight into what OTF offers.",
        imageUrls: ["otf-wd.svg", "otf-wd1.svg"],
      },
  },
];
