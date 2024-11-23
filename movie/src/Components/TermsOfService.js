import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Hero Section */}
      <section className="flex items-center justify-center py-16 bg-blue-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">Terms of Service</h1>
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
              These Terms of Service govern your use of our website and any
              related services provided by FilmVibe.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Acceptance of Terms
            </h2>
            <p className="mt-4 text-gray-600">
              By accessing or using our Service, you agree to be bound by these
              Terms. If you do not agree to any part of these Terms, you must
              not use our Service.
            </p>
          </div>

          {/* User Accounts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">User Accounts</h2>
            <p className="mt-4 text-gray-600">
              When you create an account with us, you must provide us with
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account.
            </p>
          </div>

          {/* Content */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Content</h2>
            <p className="mt-4 text-gray-600">
              You are responsible for any content that you post or upload on our
              Service. You agree not to post content that is illegal, offensive,
              or violates any third-party rights.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Termination</h2>
            <p className="mt-4 text-gray-600">
              We reserve the right to terminate or suspend your account and
              access to our Service, without prior notice or liability, for any
              reason whatsoever, including, without limitation, a breach of
              these Terms.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Limitation of Liability
            </h2>
            <p className="mt-4 text-gray-600">
              In no event shall FilmVibe or its suppliers be liable for any
              special, incidental, indirect, or consequential damages whatsoever
              arising out of or in connection with your use of our Service.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Changes to Terms
            </h2>
            <p className="mt-4 text-gray-600">
              We may revise these Terms from time to time. The most current
              version will always be posted on this page. We will notify you of
              any changes by updating the date at the top of the Terms.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
