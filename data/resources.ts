import type { ResourceData } from "../types/resources"

// Individual resource data
export const ideaValidationData: ResourceData = {
  id: "idea-validation",
  title: "Idea Validation",
  author: "A Venture Studio",
  downloads: "2.3k",
  downloadLink: "/assets/resources/downloadable/Idea validation.pdf",
  shortDescription: "Stop guessing. Start building with confidence.",
  longDescription:
    "Test your startup concept before investing time or money. Our validation tools and expert insights help you uncover market demand, user needs, and potential roadblocks—fast.",
  previewTitle:
    "Test Your <span class='text-red-500'>Idea</span><br/>Before You <span class='text-red-500'>Build</span>.",
  previewSubtitle: "Avoid costly mistakes by validating your startup with a simple 7-day process.",
  bgColor: "bg-pink-200",
  cardImage: "/assets/resources/Resources/testyouridea.png",
  previewImages: [
    "/assets/resources/Resources/testyouridea.png",
    "/assets/resources/startups/Introduction.png",
    "/assets/resources/startups/Step 1 and 2.png",
    "/assets/resources/startups/Step 3 and 4.png",
    "/assets/resources/startups/Step 5, 6 & 7.png",
        

    // "/assets/resources/Resources/testyouridea.png"


    
    // "/placeholder.svg?height=600&width=400&text=Main+Preview",
    // "/placeholder.svg?height=600&width=400&text=Page+2",
    // "/placeholder.svg?height=600&width=400&text=Page+3",
    // "/placeholder.svg?height=600&width=400&text=Page+4",
  ],
  relatedResources: [
    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "An A/B Guide to Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      // imageUrl: "/assets/resources/Resources/slackforceo.png/?height=400&width=300&text=Slack+Guide",

      imageUrl: "/assets/resources/Resources/slackforceo.png",

    },
    {
      title: "Real-Time field collaboration: Troopr AI",
      bgColor: "bg-green-600",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
    {
      title: "Sprint Execution, Simplified",
      subtitle: "AGILE FOR MODERN TECH TEAMS",
      bgColor: "bg-green-800",
      href: "/resources/sprint-execution",
      imageUrl: "/assets/resources/Resources/sprint-executionaventure.png",
    },
    {
      title: "Plan with<br/><span class='text-red-500'>Precision.</span><br/>Execute with<br/>Confidence",
      bgColor: "bg-pink-300 text-black",
      href: "/resources/plan-with-precision",
      imageUrl: "/assets/resources/Resources/planwithprecision.png",
    },
  ],
}

export const slackForCEOsData: ResourceData = {
  id: "slack-for-ceos",
  title: "Slack for CEOs & Growing Teams",
  author: "A Venture Studio",
  downloads: "1.8k",
  downloadLink: "/assets/resources/downloadable/Slack.pdf",
  shortDescription: "Optimize team communication and collaboration.",
  longDescription:
    "An A/B Guide to Smarter Communication & Seamless Teamwork. Learn how to structure your Slack workspace for maximum productivity and minimal distractions.",
  previewTitle:
    "Slack for <span class='text-blue-400'>CEOs</span> &<br/><span class='text-blue-400'>Growing</span> Teams",
  previewSubtitle: "Optimize your team's communication and collaboration.",
  bgColor: "bg-black text-white",
  cardImage: "/assets/resources/Resources/slackforceo.png",
  previewImages: [
    "/assets/resources/Resources/slackforceo.png",
    "/assets/resources/slackforceo/Introduction.png",
    "/assets/resources/slackforceo/45.png",
    "/assets/resources/slackforceo/Must have channels.png",


  ],
  relatedResources: [
    {
      title: "Toggl – Where Every Second Drives Results",
      subtitle: "Time tracking for insights that power productivity.",
      bgColor: "bg-purple-100 text-black",
      href: "/resources/toggl-time-mastery",
      imageUrl: "/assets/resources/Resources/toggl.png",
    },
    {
      title: "Real-Time field collaboration: Troopr AI",
      bgColor: "bg-green-600",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
    {
      title: "Sprint Execution, Simplified",
      subtitle: "AGILE FOR MODERN TECH TEAMS",
      bgColor: "bg-green-800",
      href: "/resources/sprint-execution",
      imageUrl: "/assets/resources/Resources/sprint-executionaventure.png",
    },
    {
      title: "Plan with<br/><span class='text-red-500'>Precision.</span><br/>Execute with<br/>Confidence",
      bgColor: "bg-pink-300 text-black",
      href: "/resources/clickup-for-ceos",
      imageUrl: "/assets/resources/Resources/clickup.png",
    },

    
  ],
}

export const realTimeFieldData: ResourceData = {
  id: "real-time-field",
  title: "Real-Time field collaboration: Troopr AI",
  author: "A Venture Studio",
  downloads: "1.5k",
  downloadLink: "/assets/resources/downloadable/Troopr.pdf",
  shortDescription: "Enhance field team collaboration with AI assistance.",
  longDescription:
    "Discover how Troopr AI can transform your field operations with real-time collaboration tools, automated reporting, and intelligent task management.",
  previewTitle: "Real-Time field<br/>collaboration:<br/><span class='text-green-300'>Troopr AI</span>",
  previewSubtitle: "AI-powered field team collaboration tools.",
  bgColor: "bg-green-600 text-white",
  cardImage: "/assets/resources/Resources/reaaltimtrooprai.png",
  previewImages: [
    "/assets/resources/Resources/reaaltimtrooprai.png",
    "/assets/resources/trooprai/About AVS.png",

    "/assets/resources/trooprai/Getting Started with Troopr AI.png",
    "/assets/resources/trooprai/Must have channels.png",
  ],
  relatedResources: [
    {
      title: "Idea Validation",
      subtitle: "Test your startup concept before investing time or money",
      bgColor: "bg-pink-200 text-black",
      href: "/resources/idea-validation",
      imageUrl: "/assets/resources/Resources/testyouridea.png",
    },
    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "An A/B Guide to Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      imageUrl: "/assets/resources/Resources/slackforceo.png",
    },
    {
      title: "Sprint Execution, Simplified",
      subtitle: "AGILE FOR MODERN TECH TEAMS",
      bgColor: "bg-green-800",
      href: "/resources/sprint-execution",
      imageUrl: "/assets/resources/Resources/sprint-executionaventure.png",
    },
    {
      title: "Toggl – Where Every Second Drives Results",
      subtitle: "Time tracking for insights that power productivity.",
      bgColor: "bg-purple-100 text-black",
      href: "/resources/toggl-time-mastery",
      imageUrl: "/assets/resources/Resources/toggl.png",
    },
  ],
}

export const sprintExecutionData: ResourceData = {
  id: "sprint-execution",
  title: "Sprint Execution, Simplified",
  author: "A Venture Studio",
  downloads: "3.1k",
  downloadLink: "/assets/resources/downloadable/Sprint Execution.pdf",
  shortDescription: "Agile for modern tech teams.",
  longDescription:
    "A comprehensive guide to streamlining your sprint execution process. Learn practical techniques for planning, tracking, and delivering successful sprints with your tech team.",
  previewTitle: "Sprint<br/>Execution,<br/><span class='text-green-300'>Simplified</span>",
  previewSubtitle: "AGILE FOR MODERN TECH TEAMS",
  bgColor: "bg-green-800 text-white",
  cardImage: "/assets/resources/Resources/sprint-executionaventure.png",
  previewImages: [
    "/assets/resources/Resources/sprint-executionaventure.png",
    "/assets/resources/sprint/Introduction.png",
    "/assets/resources/sprint/Getting Started-6.png",
    "/assets/resources/sprint/Getting Started.png",
    "/assets/resources/sprint/Getting Started-5.png",

  
  ],
  relatedResources: [

    {
      title: "Plan with<br/><span class='text-red-500'>Precision.</span><br/>Execute with<br/>Confidence",
      bgColor: "bg-pink-300 text-black",
      href: "/resources/clickup-for-ceos",
      imageUrl: "/assets/resources/Resources/clickup.png",
    },
    {
      title: "Idea Validation",
      subtitle: "Test your startup concept before investing time or money",
      bgColor: "bg-pink-200 text-black",
      href: "/resources/idea-validation",
      imageUrl: "/assets/resources/Resources/testyouridea.png",
    },
    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "An A/B Guide to Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      imageUrl:  "/assets/resources/Resources/slackforceo.png",

      
    },
    {
      title: "Real-Time field collaboration: Troopr AI",
      bgColor: "bg-green-600",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
    
  ],
}


export const planWithPrecisionData: ResourceData = {
  id: "plan-with-precision",
  title: "Plan with Precision: Strategic Toolkit",
  author: "A Venture Studio",
  downloads: "2.1k",
  downloadLink: "/assets/resources/downloadable/PlanwithPrecision.pdf",
  shortDescription: "Master the art of strategic planning for business success.",
  longDescription:
    "Empower your team with a proven strategic planning toolkit designed to eliminate guesswork, align teams, and deliver clear execution plans that lead to measurable outcomes.",
  previewTitle: "Plan with<br/><span class='text-red-500'>Precision.</span><br/>Execute with<br/>Confidence",
  previewSubtitle: "A toolkit for startup founders & product leaders to plan smarter.",
  bgColor: "bg-pink-300 text-black",
  cardImage: "/assets/resources/Resources/planwithprecision.png",
  previewImages: [
    "/assets/resources/Resources/planwithprecision.png",
    "/assets/resources/Resources/Intro.svg",
  
  ],
  relatedResources: [
    {
      title: "Idea Validation",
      subtitle: "Test your startup concept before investing time or money",
      bgColor: "bg-pink-200 text-black",
      href: "/resources/idea-validation",
      imageUrl: "/assets/resources/Resources/testyouridea.png",
    },
    {
      title: "Sprint Execution, Simplified",
      subtitle: "AGILE FOR MODERN TECH TEAMS",
      bgColor: "bg-green-800",
      href: "/resources/sprint-execution",
      imageUrl: "/assets/resources/Resources/sprint-executionaventure.png",
    },
    {
      title: "Real-Time field collaboration: Troopr AI",
      subtitle: "AI-powered field team collaboration tools.",
      bgColor: "bg-green-600 text-white",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "An A/B Guide to Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      imageUrl: "/assets/resources/Resources/slackforceo.png",
    },
  ],
}
export const togglTimeMasteryData: ResourceData = {
  id: "toggl-time-mastery",
  title: "Toggl – Where Every Second Drives Results",
  author: "A Venture Studio",
  downloads: "3.2k",
  downloadLink: "/assets/resources/downloadable/Toggl.pdf",
  shortDescription: "Track time effortlessly and make smarter decisions.",
  longDescription:
    "Discover how Toggl empowers teams and individuals to track time accurately, improve productivity, and make data-driven decisions that optimize workflow and performance.",
  previewTitle: "Toggl – Where<br/><span class='text-purple-500'>Every Second</span><br/>Drives Results",
  previewSubtitle: "Master your time and productivity with precision.",
  bgColor: "bg-purple-100 text-black",
  cardImage: "/assets/resources/Resources/toggl.png",
  previewImages: [
    "/assets/resources/Resources/toggl.png",
    "/assets/resources/toggl/About us.png",
    "/assets/resources/toggl/Cover page-2.png",
    "/assets/resources/toggl/Cover page-3.png",
    "/assets/resources/toggl/Back page.png",

  
  ],
  relatedResources: [

    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "An A/B Guide to Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      imageUrl:  "/assets/resources/Resources/slackforceo.png",

      
    },
    {
      title: "Plan with Precision",
      subtitle: "Strategic planning toolkit for confident execution",
      bgColor: "bg-pink-300 text-black",
      href: "/resources/plan-with-precision",
      imageUrl: "/assets/resources/Resources/planwithprecision.png",
    },
    {
      title: "Real-Time field collaboration: Troopr AI",
      subtitle: "AI-powered field team collaboration tools.",
      bgColor: "bg-green-600 text-white",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
    {
      title: "ClickUp for CEOs & Growing Teams",
      subtitle: "One workspace to manage people, projects, and productivity.",
      bgColor: "bg-yellow-100 text-black",
      href: "/resources/clickup-for-ceos",
      imageUrl: "/assets/resources/Resources/clickup.png"
    },
  ],
}

export const clickupForCEOsData: ResourceData = {
  id: "clickup-for-ceos",
  title: "ClickUp for CEOs & Growing Teams",
  author: "A Venture Studio",
  downloads: "4.8k",
  downloadLink: "/assets/resources/downloadable/Clickup.pdf",
  shortDescription: "Organize, manage, and scale with one powerful workspace.",
  longDescription:
    "ClickUp helps leadership teams unify workstreams, track goals, and maintain visibility across fast-growing teams — all in one customizable platform.",
  previewTitle: "ClickUp for<br/>CEOs &<br/><span class='text-yellow-500'>Growing Teams</span>",
  previewSubtitle: "Productivity meets scalability — for leaders who build fast.",
  bgColor: "bg-yellow-100 text-black",
  cardImage: "/assets/resources/Resources/clickup.png",
  previewImages: [
    "/assets/resources/Resources/clickup.png",
    "/assets/resources/clickupforceo/Intro.png",
    "/assets/resources/clickupforceo/Cover page.png",
    "/assets/resources/clickupforceo/Walkthrough 1&2.png",

    "/assets/resources/clickupforceo/Walkthrough 3&4.png",

  ],
  relatedResources: [
    {
      title: "Slack for CEOs & Growing Teams",
      subtitle: "Smarter Communication & Seamless Teamwork",
      bgColor: "bg-black",
      href: "/resources/slack-for-ceos",
      imageUrl: "/assets/resources/Resources/slackforceo.png",
    },
    {
      title: "Plan with Precision",
      subtitle: "Strategic planning toolkit for confident execution",
      bgColor: "bg-pink-300 text-black",
      href: "/resources/plan-with-precision",
      imageUrl: "/assets/resources/Resources/planwithprecision.png",
    },
    {
      title: "Toggl – Where Every Second Drives Results",
      subtitle: "Time tracking for insights that power productivity.",
      bgColor: "bg-purple-100 text-black",
      href: "/resources/toggl-time-mastery",
      imageUrl: "/assets/resources/Resources/toggl.png",
    },

    {
      title: "Real-Time field collaboration: Troopr AI",
      bgColor: "bg-green-600",
      href: "/resources/real-time-field",
      imageUrl: "/assets/resources/Resources/reaaltimtrooprai.png",
    },
  ],
}


// Export all resources as an array for the homepage
export const resources = [ideaValidationData, slackForCEOsData, realTimeFieldData, sprintExecutionData, planWithPrecisionData, togglTimeMasteryData, clickupForCEOsData
]
