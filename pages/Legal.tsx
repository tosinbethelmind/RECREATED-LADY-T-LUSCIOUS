import React from 'react';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold font-serif text-stone-900 mb-8 pb-4 border-b">{title}</h1>
        <div className="prose prose-stone max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={
      <div className="space-y-4 text-stone-600">
        <p>Last updated: October 2023</p>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <h3 className="text-xl font-bold text-stone-800 mt-6">Interpretation and Definitions</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h3 className="text-xl font-bold text-stone-800 mt-6">Collecting and Using Your Personal Data</h3>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number.</p>
      </div>
    } 
  />
);

export const Terms: React.FC = () => (
  <LegalPage 
    title="Terms of Service" 
    content={
      <div className="space-y-4 text-stone-600">
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <h3 className="text-xl font-bold text-stone-800 mt-6">Acknowledgment</h3>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <h3 className="text-xl font-bold text-stone-800 mt-6">Orders and Payments</h3>
        <p>By placing an Order through the Service, You warrant that You are legally capable of entering into binding contracts.</p>
        <h3 className="text-xl font-bold text-stone-800 mt-6">Termination</h3>
        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
      </div>
    } 
  />
);