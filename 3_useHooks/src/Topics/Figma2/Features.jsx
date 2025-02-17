// import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Features = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Elite?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        <FeatureCard title="AI Assistant" description="Manage payments with AI." />
        <FeatureCard title="Deep Analytics" description="Increase income with insights." />
        <FeatureCard title="Smartest AI" description="Automate financial transactions." />
      </div>
    </section>
  );
};

export default Features;
