

interface IProjectDetails {
    title: string,
    content: string
}

interface IOData {
    text: string,
}

interface IOverviewData {
    title: string,
    data: IOData[]
}

interface IDesignSteps {
    id: any,
    title: string,
}

interface IProcess {
    title: string,
    designSteps: IDesignSteps[],
}

interface IWorkShops {
    title: string,
    description: string,
    imageSrc: string
    imageAlt: string
}

interface IUserFlowData {
    title: string,
    imageSrc: string,
    imageAlt: string
}

interface IUserFlow {
    title: string,
    userFlowData: IUserFlowData[]
}

interface IWireframe {
    title: string,
    description: string,
    imageUrls: string[]
}

interface CaseDetails {
    appName?: string,
    shortDescription?: string,
    projectDetails?: IProjectDetails[],
    appImage?: string,
    overviewData?: IOverviewData,
    mockups?: string[],
    ourProcess?: IProcess[],
    workShops?: IWorkShops,
    userFlows?: IUserFlow,
    wireframes?: IWireframe,
    fidelityDesigns?: IWireframe,
    webDesigns?: IWireframe,
}