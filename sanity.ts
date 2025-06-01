import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
  projectId: 'izzfhgn0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-01', 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export default client;

