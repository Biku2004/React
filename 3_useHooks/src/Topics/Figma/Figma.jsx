// import React from "react";
import PropTypes from 'prop-types';

const Figma = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-300 via-white to-purple-300 flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">DSM.</h1>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-black">Course</a>
            <a href="#" className="hover:text-black">Resources</a>
            <a href="#" className="hover:text-black">News</a>
            <a href="#" className="hover:text-black">Jobs</a>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Get started</button>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-green-600 text-sm uppercase font-bold">Introducing a new design system</h2>
            <h1 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
              Build beautiful products, faster.
            </h1>
            <p className="text-gray-600 mt-4">
              A professional design library for UI Designers
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex items-center bg-gray-100 rounded-full p-2 w-full md:w-2/3">
              <input
                type="text"
                placeholder="Find resources"
                className="bg-transparent flex-1 outline-none px-4"
              />
              <button className="bg-blue-500 text-white p-2 rounded-full">
                🔍
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src="women.png"
                alt="Smiling Woman"
                className="rounded-full w-64 h-64 object-cover"
              />
              {/* <div className="absolute top-5 left-5 bg-yellow-400 p-2 rounded-full">💬</div> */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Design Guideline"
            description="We built the design guideline to help you understand the design system clearly."
          />
          <FeatureCard
            title="UI Components"
            description="Grab and mix your own design with our UI components, everything is fully customizable."
          />
          <FeatureCard
            title="Developer Tutorial"
            description="These libraries would help the developer understand and work correctly with the system."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Figma;
// export default App;

