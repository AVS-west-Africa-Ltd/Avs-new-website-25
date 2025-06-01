'use client';

import React from 'react';
import ContactHeader from './partials/ContactHeader';
import ContactForm from './partials/ContactForm';
import { useQuery } from '@tanstack/react-query';
import { sanityPageConfig } from '@/constants/constants';
import client from '@/sanity';
import Loader from '@/components/loader';

const Index = () => {
  const {
    data: pageData,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.contactPageId],
    queryFn: () => fetchPageData(sanityPageConfig.contactPageId),
  });

  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };

  console.log('pageData', pageData);
  if (isLoading) {
    return <Loader />;
  }
  if (!pageData) {
    return <div>No data found</div>;
  }
  const { contentBlocks } = pageData;

  return (
    <div className="min-h-scree flex flex-col py-18">
      <ContactHeader data={contentBlocks[0]}/>
      <ContactForm data={contentBlocks[0]}/>
    </div>
  );
};

export default Index;
