export interface RelatedResource {
    title: string
    subtitle?: string
    bgColor: string
    href: string
    imageUrl: string
  }
  
  export interface ResourceData {
    id: string
    title: string
    author: string
    downloads: string
    downloadLink:string
    shortDescription: string
    longDescription: string
    previewTitle: string
    previewSubtitle: string
    bgColor: string
    
    previewImages: string[]
    cardImage: string
    relatedResources: RelatedResource[]
  }
  