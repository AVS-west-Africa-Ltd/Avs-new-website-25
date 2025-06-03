// // lib/getSiteSettings.ts

// import client from "@/sanity"


// export interface SiteSettings {
//   title: string
//   description: string
//   faviconUrl?: string
// }
// export async function getSiteSettings(): Promise<SiteSettings> {
//   const data = await client.fetch(`
//     *[_type == "siteSettings"][0]{
//       title,
//       description,
//       "faviconUrl": favicon.asset->url
//     }
//   `)
//   return data
// }


import client from "@/sanity";

export interface SiteSettings {
  title: string;
  description: string;
  faviconUrl?: string;
}

export const getSiteSettings = async (pageId: string): Promise<SiteSettings | null> => {
  const query = `
    *[_type == "page" && _id == "${pageId}"][0]{
      contentBlocks[]{
        _type == "siteSettings" => {
          title,
          description,
          "faviconUrl": favicon.asset->url
        }
      }
    }
  `;

  const result = await client.fetch(query);
  return result?.contentBlocks?.[0] ?? null;
};
