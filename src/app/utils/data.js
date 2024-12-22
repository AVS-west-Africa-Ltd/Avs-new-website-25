export const IData = [
    {
        id: 1,
        title: "Ready to start your Adventure?",
        services: [
            {
                id: 1,
                title: "Strategy, Partnerships & Advisory",
                link: "/partnership",
                bgImage: "",
                textColor: "",
                subTitle: "Your Journey, Our Expert Support; Navigating Entrepreneurship with Ease",
                subDescription: "We can help you build an agile leadership team, and help you become more flexible in assembling a collective of experts that allow you to scale and grow your business.",
                subHeroTitle: "The right people at the right time.",
                subHeroButtonText: "Let’s Connect Now!",
                whoTitle: "We are more than just a network of agencies.",
                whoDescription: [
                    "We are a collective of experts who strategically work with you to identify your needs, guiding you towards your next big business growth engagement and scaling your ideas for long-term success.",
                    "Our ability to deeply understand projects sets us apart, allowing us to empower companies with the skills and knowledge needed to thrive. Leveraging our extensive network, we connect businesses with tailored support to ensure they achieve their goals.",
                    "Together, we empower you to find the pathway forward, curating your thoughts, ideas, plans, and materials into success stories and building blocks. Our approach is focused on the present moment, working with what's in front of us here and now to drive tangible results",
                  ],
                whoButton: "",
                contactTitle: "",
                contactSubTitle: "",
                contactSteps: [
                    {
                        id: 1,
                        title: "",
                        description: "",
                        btnText: "",
                        link: "",
                    }
                ]
            },
            {
                id: 2,
                title: "Brand & Digital Activation",
                link: "/digital",
                bgImage: "",
                textColor: "",
                subTitle: "",
                subDescription: "",
                subHeroTitle: "",
                subHeroButton: "",
                whoTitle: "",
                whoDescription: "",
                whoButton: "",
                contactTitle: "",
                contactSubTitle: "",
                contactSteps: [
                    {
                        id: 1,
                        title: "",
                        description: "",
                        btnText: "",
                        link: "",
                    }
                ]
            },
            {
                id: 3,
                title: "Technical Activation",
                link: "/technical",
                bgImage: "",
                textColor: "",
                subTitle: "",
                subDescription: "",
                subHeroTitle: "",
                subHeroButton: "",
                whoTitle: "",
                whoDescription: "",
                whoButton: "",
                contactTitle: "",
                contactSubTitle: "",
                contactSteps: [
                    {
                        id: 1,
                        title: "",
                        description: "",
                        btnText: "",
                        link: "",
                    }
                ]
            },
        ],
        description: " Welcome to A Venture Studio — your bridge to expertise for turning ideas into thriving businesses. We don't just understand your vision; we champion it. With a deep commitment to your success, we provide strategic guidance and empowerment to fuel the growth of your business.",
        bgImage: "",
        textColor: "",
        about: "At our core, we specialise in tailored support for strategic planning, investment, and advisory services. What sets us apart is our curated network of technical and digital implementation partners, sourced organically to ensure your projects are in the hands of the most capable professionals.",
        about2: " We're not just a studio; we're your ally, passionately invested in the realisation of your projects, the success of your business, and the achievement of your goals. Let's embark on this journey together, where expertise meets empathy, and innovation meets unwavering support."
    }
]



export const fetchLandingPages = async () => {
    try {
      const response = await fetch("http://localhost:6000/api/v1/landing");
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch landing pages:", error);
      throw error;
    }
  };
  