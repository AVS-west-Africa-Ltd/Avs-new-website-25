// terms.tsx or app/terms/page.tsx
import React from 'react';

const TermsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to our website. These Terms and Conditions ("Terms") govern your use of the website and services provided by our venture studio ("we", "us", or "our"). By accessing or using this website, you agree to be bound by these Terms.
      </p>

      {/* Section: Use of Site */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">1. Use of Site</h2>
        <p>
          This website is intended to provide information about our services, including startup funding, the canvas generator, and our contact options. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
        </p>
      </section>

      {/* Section: Forms */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">2. Form Submissions</h2>
        <p className="mb-2">
          We provide the following forms on our website:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Contact Form</li>
          <li>Startup Funding Form</li>
          <li>Canvas Generator Submission</li>
        </ul>
        <p>
          By submitting any of these forms, you confirm that the information you provide is accurate and does not violate any laws or intellectual property rights. We reserve the right to reject or remove any submission at our discretion.
        </p>
      </section>

      {/* Section: Privacy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. Privacy</h2>
        <p>
          Your use of the site is also governed by our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>, which explains how we collect and use your information.
        </p>
      </section>

      {/* Section: Intellectual Property */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and software, is the property of our studio or its licensors and is protected by intellectual property laws. You may not reuse, modify, or distribute any content without permission.
        </p>
      </section>

      {/* Section: Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from your use of the website or any services, including data loss, business interruption, or indirect damages, even if advised of the possibility.
        </p>
      </section>

      {/* Section: Changes */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. If we make significant changes, we will notify you by updating the date at the top of this page. Continued use of the site means you accept the updated Terms.
        </p>
      </section>

      {/* Section: Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p>
          For questions about these Terms, you can reach out through our <a href="/contact-us" className="text-blue-600 underline">contact page</a>.
        </p>
      </section>
    </main>
  );
};

export default TermsPage;
