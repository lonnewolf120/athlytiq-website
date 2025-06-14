import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Athlytiq Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: June 14, 2025</p>

      <p className="mb-4">
        Welcome to Athlytiq, a social fitness platform designed to help you track workouts, connect with gym buddies, and engage with trainers. At Athlytiq, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app or website (athlytiq.shalish.xyz). By using Athlytiq, you agree to the practices described in this policy.
      </p>

      <h2 className="text-3xl font-semibold mb-3">1. Information We Collect</h2>
      <p className="mb-4">We collect the following types of information to provide and improve our services:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Personal Information</strong>: Name, email address, phone number, and profile details (e.g., avatar, preferences) provided during sign-up or profile creation.</li>
        <li><strong>Usage Data</strong>: Information about your interactions with Athlytiq, such as workout logs, nutrition entries, gym check-ins, posts, and challenge participation.</li>
        <li><strong>Location Data</strong>: Approximate location data (e.g., for gym buddy finder or gym check-ins) if you enable location services, which can be disabled anytime.</li>
        <li><strong>Device Information</strong>: Device type, operating system, and app usage patterns to optimize performance.</li>
        <li><strong>Third-Party Data</strong>: Data from fitness trackers (e.g., Apple Health, Google Fit) or social logins if you connect these services.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Provide, maintain, and improve Athlytiq’s features, including workout tracking, community engagement, and trainer marketplace services.</li>
        <li>Personalize your experience, such as recommending workout plans or nutrition goals based on your activity.</li>
        <li>Communicate with you about updates, promotions, or support (you can opt out of marketing emails).</li>
        <li>Ensure security and prevent fraud by monitoring usage patterns.</li>
        <li>Comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">3. How We Share Your Information</h2>
      <p className="mb-4">We do not sell your personal information. We may share it with:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Service Providers</strong>: Third parties (e.g., cloud hosting, payment processors) who assist us in operating Athlytiq, under strict confidentiality agreements.</li>
        <li><strong>Trainers</strong>: If you engage with trainers, they may access your workout and nutrition data (with your consent) to provide coaching.</li>
        <li><strong>Community</strong>: Posts and stories are shared publicly or with selected groups (e.g., gym buddies) based on your visibility settings.</li>
        <li><strong>Legal Authorities</strong>: If required by law or to protect our rights, safety, or property.</li>
        <li><strong>Business Transfers</strong>: In case of a merger or acquisition, your data may be transferred to the new entity.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">4. Data Security</h2>
      <p className="mb-4">We implement industry-standard security measures (e.g., encryption, secure servers) to protect your data. However, no online service is 100% secure, and we cannot guarantee absolute protection. If a data breach occurs, we will notify affected users promptly.</p>

      <h2 className="text-3xl font-semibold mb-3">5. Your Rights and Choices</h2>
      <p className="mb-4">You have control over your data:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Access and Update</strong>: View or edit your personal information in the app’s Profile section.</li>
        <li><strong>Delete</strong>: Request data deletion by contacting us; we’ll remove it within 30 days unless legally required to retain it.</li>
        <li><strong>Opt-Out</strong>: Unsubscribe from marketing emails via the link provided or adjust notification settings in the app.</li>
        <li><strong>Location Data</strong>: Disable location services in your device settings.</li>
        <li><strong>GDPR/CCPA Compliance</strong>: Residents of the EU or California can request data access, portability, or restriction by emailing us.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">6. Children’s Privacy</h2>
      <p className="mb-4">Athlytiq is not intended for users under 13. We do not knowingly collect data from children. If we learn of such data, we will delete it and terminate the account.</p>

      <h2 className="text-3xl font-semibold mb-3">7. International Data Transfers</h2>
      <p className="mb-4">Your data may be stored and processed in countries outside your region (e.g., via cloud servers). We ensure these transfers comply with applicable data protection laws.</p>

      <h2 className="text-3xl font-semibold mb-3">8. Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy periodically. Changes will be posted on athlytiq.shalish.xyz with the updated date. Continued use of Athlytiq after changes constitutes acceptance.</p>

      <h2 className="text-3xl font-semibold mb-3">9. Contact Us</h2>
      <p className="mb-4">For questions or concerns, reach out to:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Email</strong>: athlytiq@gmail.com</li>
        <li><strong>Phone</strong>: +8801776225423</li>
        <li><strong>Address</strong>: House 33, Road 2, Kawlar, Dakshinkhan, Dhaka, Bangladesh</li>
        <li><strong>Website</strong>: athlytiq.shalish.xyz</li>
      </ul>
      <p className="mb-4">We’re here to assist you with any privacy-related matters!</p>
    </div>
  );
};

export default PrivacyPolicyPage;
