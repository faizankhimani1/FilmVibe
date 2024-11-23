import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Hero Section */}
      <section className="flex items-center justify-center py-16 bg-blue-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-4 text-lg">Last updated: 23/11/2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl px-6 mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
            <p className="mt-4 text-gray-600">
              This Privacy Policy explains how FilmVibe collects, uses,
              discloses, and safeguards your information when you visit our
              website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Information We Collect
            </h2>
            <p className="mt-4 text-gray-600">
              We may collect the following types of information:
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>
                <strong>Personal Data:</strong> Information that can identify
                you, such as your name, email address, and phone number.
              </li>
              <li>
                <strong>Usage Data:</strong> Data about how you use our website,
                including your IP address, browser type, and pages visited.
              </li>
              <li>
                <strong>Cookies:</strong> Small files stored on your device to
                improve your experience on our website.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To improve our Service through analysis</li>
            </ul>
          </div>

          {/* Disclosure of Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Disclosure of Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              We may share your personal information in the following
              situations:
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>With service providers to monitor and analyze usage</li>
              <li>For compliance with legal obligations</li>
              <li>To protect the rights or property of FilmVibe</li>
            </ul>
          </div>

          {/* Security Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Security of Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              The security of your personal information is important to us, but
              no method of transmission over the Internet or electronic storage
              is 100% secure.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-gray-600">
              We may update our Privacy Policy from time to time. Updates will
              be posted on this page.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="mt-2 text-blue-500 hover:underline">
              <a href="mailto:filmvibe6@gmail.com">filmvibe6@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
