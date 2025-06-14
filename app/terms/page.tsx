import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Athlytiq Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last Updated: June 14, 2025</p>

      <p className="mb-4">
        Welcome to Athlytiq, a social fitness platform where you can track workouts, connect with gym buddies, and engage with trainers. These Terms of Service (“Terms”) govern your use of the Athlytiq app and website (athlytiq.shalish.xyz). By accessing or using Athlytiq, you agree to be bound by these Terms. If you do not agree, please do not use our services.
      </p>

      <h2 className="text-3xl font-semibold mb-3">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using Athlytiq, you confirm you are at least 13 years old and agree to these Terms, our Privacy Policy, and any additional guidelines we provide. We may update these Terms, and continued use after changes means acceptance.
      </p>

      <h2 className="text-3xl font-semibold mb-3">2. Account Registration</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>You must create an account with a valid email and password.</li>
        <li>Provide accurate information and update it as needed.</li>
        <li>You are responsible for maintaining account security. Notify us at athlytiq@gmail.com if you suspect unauthorized use.</li>
        <li>We may suspend or terminate accounts for violation of these Terms.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">3. Use of Services</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Permitted Use</strong>: Use Athlytiq to track workouts, connect with others, and access trainer services as intended.</li>
        <li><strong>Prohibited Actions</strong>: Do not use Athlytiq for illegal activities, harass others, post harmful content, or attempt to bypass security measures.</li>
        <li><strong>Community Guidelines</strong>: Respect others in posts, stories, and groups. Offensive behavior may result in account suspension.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">4. Trainer Marketplace</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Trainers offer plans and coaching services. Payments are processed through our secure system, and fees are non-refundable unless otherwise stated.</li>
        <li>Users engage trainers at their own risk. Athlytiq is not liable for trainer-provided advice.</li>
        <li>Trainers must comply with applicable laws and provide accurate services.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">5. Intellectual Property</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Athlytiq and its content (e.g., design, logos) are owned by us or our licensors. You may not reproduce or distribute them without permission.</li>
        <li>User-generated content (e.g., posts) remains yours, but you grant us a license to display it on Athlytiq.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">6. Payments and Subscriptions</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Some features (e.g., premium plans) require payment. Prices are listed in the app, and transactions are final unless a refund is offered.</li>
        <li>We use third-party payment processors (e.g., Stripe) with their own terms.</li>
        <li>Subscriptions auto-renew unless canceled before the renewal date.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
      <p className="mb-4">
        Athlytiq is provided “as is.” We do not guarantee uninterrupted service or that it will meet all your expectations. Fitness advice is for general use; consult a professional for medical guidance.
      </p>

      <h2 className="text-3xl font-semibold mb-3">8. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for indirect damages (e.g., lost profits) arising from your use of Athlytiq. Our total liability will not exceed the amount you paid us in the past 12 months.
      </p>

      <h2 className="text-3xl font-semibold mb-3">9. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your access to Athlytiq at our discretion, with or without notice, if you violate these Terms. You may delete your account anytime via the app.
      </p>

      <h2 className="text-3xl font-semibold mb-3">10. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Bangladesh. Disputes will be resolved in Dhaka courts.
      </p>

      <h2 className="text-3xl font-semibold mb-3">11. Changes to Services</h2>
      <p className="mb-4">
        We may modify or discontinue Athlytiq features at any time. We will notify you of significant changes via the app or email.
      </p>

      <h2 className="text-3xl font-semibold mb-3">12. Contact Us</h2>
      <p className="mb-4">For questions or concerns, contact:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>Email</strong>: athlytiq@gmail.com</li>
        <li><strong>Phone</strong>: +8801776225423</li>
        <li><strong>Address</strong>: House 33, Road 2, Kawlar, Dakshinkhan, Dhaka, Bangladesh</li>
        <li><strong>Website</strong>: athlytiq.shalish.xyz</li>
      </ul>
      <p className="mb-4">Thank you for choosing Athlytiq—let’s build a healthier community together!</p>
    </div>
  );
};

export default TermsOfServicePage;
