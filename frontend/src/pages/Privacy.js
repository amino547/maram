// src/pages/Privacy.js
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">Privacy Policy</h1>
        <p className="text-lg text-center mb-8">
          At Jiibly, we value your trust. Please read our privacy policy, delivery rules, and refund policies to
          understand how we operate.
        </p>

        {/* Privacy Policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Privacy Policy</h2>
          <p className="mb-4">
            We prioritize your privacy and ensure that all personal data you share with us is securely handled.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We collect personal information such as your name, address, email, and phone number for the sole purpose
              of fulfilling delivery orders.
            </li>
            <li>We do not share your data with third-party services without your explicit consent.</li>
            <li>
              Our platform uses industry-standard encryption to protect your personal and payment information during
              transactions.
            </li>
            <li>You can request to delete your account and data at any time by contacting us at privacy@jiibly.com.</li>
          </ul>
        </section>

        {/* Delivery Rules Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Delivery Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All packages must comply with local and international laws. Restricted or prohibited items will not be
              accepted for delivery.
            </li>
            <li>Customers are responsible for ensuring the accuracy of delivery addresses.</li>
            <li>
              We ensure timely delivery, but delays caused by unforeseen circumstances such as weather, traffic, or
              customs clearance are not under our control.
            </li>
            <li>Packages must be securely packed to prevent damage during transit.</li>
            <li>
              Customers are advised to inspect their packages upon delivery and report any issues immediately to our
              support team.
            </li>
          </ul>
        </section>

        {/* Refund Policy Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Refund Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If a delivery cannot be completed due to our fault, a full refund will be issued to the customer within 5
              business days.
            </li>
            <li>
              Refunds will not be issued for deliveries delayed due to incorrect addresses provided by the customer.
            </li>
            <li>
              Claims for refunds must be submitted within 7 days of the delivery date. Claims can be submitted at{' '}
              <a href="mailto:refunds@jiibly.com" className="text-indigo-600 underline">
                refunds@jiibly.com
              </a>
              .
            </li>
            <li>
              For prepaid orders that are canceled before shipping, a full refund will be processed immediately.
            </li>
            <li>
              Refunds will be credited to the original payment method. In cases where this is not possible, store credit
              may be issued.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
