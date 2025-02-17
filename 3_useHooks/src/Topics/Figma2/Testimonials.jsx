// import React from "react";

const testimonials = [
  { name: "Antonietta Bode", text: "Elite's seamless services have revolutionized our financial processing.", role: "Role at @Company" },
  { name: "Krystina Bradtke", text: "Implementing Elite was one of the best decisions we've made.", role: "Role at @Company" },
  { name: "Zakary Fritsch", text: "Elite's customer service is unparalleled.", role: "Role at @Company" },
];

const Testimonials = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold mb-8">Pay with peace of mind</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-400 italic">&quot;{testimonial.text}&quot;</p>
            <h4 className="text-lg font-bold mt-4">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
