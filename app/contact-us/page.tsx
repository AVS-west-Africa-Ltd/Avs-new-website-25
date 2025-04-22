import React from 'react';
import ContactHeader from './partials/ContactHeader';
import ContactForm from './partials/ContactForm';

const Index = () => {
  return (
    <div className="min-h-scree flex flex-col py-18">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Index;
