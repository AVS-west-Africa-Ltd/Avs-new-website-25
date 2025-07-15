// app/privacy-policy/page.tsx (or pages/privacy-policy.tsx depending on your Next.js routing)

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto text-[#232326] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-10">Effective Date: 10 April 2025</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            When you use our services or submit a form, we may collect: your name, email,
            phone number, startup name, business needs, uploaded documents, and technical data
            such as IP address or browser type.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            We use your information to contact you, review your request, provide services,
            secure your data, and comply with regulations. We do not sell your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Data Sharing</h2>
          <p>
            We may share your information internally or with trusted providers who support
            our operations. All parties are required to maintain strict data protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
          <p>
            You have the right to access, correct, delete, or withdraw your information.
            Contact us at [your email] to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We protect your data with modern security measures such as encryption and
            secure servers. However, no system is completely immune to risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Retention Period</h2>
          <p>
            We keep your data only as long as necessary to fulfill your request or meet legal
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Cookies & Analytics</h2>
          <p>
            We may use cookies and analytics to understand website performance. You can manage
            cookies via your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Updates to This Policy</h2>
          <p>
            We may update this privacy policy occasionally. Changes will be posted on this page
            with the updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have questions, reach us at dm@aventurestud.io.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
