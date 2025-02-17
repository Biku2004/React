// import React from "react";

const steps = [
  { id: 1, text: "Download the app" },
  { id: 2, text: "Add your card" },
  { id: 3, text: "Make a payment" },
  { id: 4, text: "Earn rewards" },
];

const HowItWorks = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold mb-8">How it works</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-800 p-4 rounded-lg">
            <span className="text-blue-400 text-lg font-bold">{step.id}</span>
            <p className="mt-2">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
