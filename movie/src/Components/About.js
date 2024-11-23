import React from "react";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Hero Section */}
      <section className="flex items-center justify-center py-16 bg-blue-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold">About FilmVibe</h1>
          <p className="mt-4 text-lg">
            Your ultimate destination for exploring, connecting, and enjoying
            the world of cinema.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            At FilmVibe, our mission is to provide a space for movie enthusiasts
            to explore, discuss, and celebrate the magic of cinema. From
            Hollywood blockbusters to indie films, we aim to cater to the
            diverse tastes of our vibrant community.
          </p>
          <p className="mt-4 text-gray-600">
            We believe movies are more than just entertainment; they are stories
            that connect us, inspire us, and bring us closer together. FilmVibe
            is dedicated to creating a platform where every movie lover can find
            something to cherish.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-5xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Behind FilmVibe is a passionate team of movie buffs and tech
            enthusiasts who work tirelessly to bring you an incredible
            experience.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-2 justify-center">
            <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Faizan Khimani
              </h3>
              <p className="mt-2 text-gray-600">Founder</p>
              <p className="mt-2 text-sm text-gray-500">
                Faizan is the visionary behind FilmVibe. A cinephile at heart,
                he loves exploring world cinema and sharing his insights with
                others.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">Dhwaj Shah</h3>
              <p className="mt-2 text-gray-600">Co-Founder</p>
              <p className="mt-2 text-sm text-gray-500">
                Dhwaj combines his passion for movies with his technical
                expertise to ensure FilmVibe is always at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Our community loves FilmVibe! Here's what some of them have to say:
          </p>
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <blockquote className="italic text-gray-600">
                "FilmVibe is my go-to source for movie news and reviews. The
                team always delivers exceptional content!"
                <span className="block mt-4 font-bold text-gray-800">
                  - Sarah W.
                </span>
              </blockquote>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <blockquote className="italic text-gray-600">
                "I love the community at FilmVibe. It's amazing to share
                thoughts with like-minded film lovers!"
                <span className="block mt-4 font-bold text-gray-800">
                  - David K.
                </span>
              </blockquote>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <blockquote className="italic text-gray-600">
                "Discovering hidden gems on FilmVibe has been an absolute joy.
                It’s a must-visit for any movie fan."
                <span className="block mt-4 font-bold text-gray-800">
                  - Priya M.
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
