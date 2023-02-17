import React from "react";

const advantages = [
  {
    title: "Innovative and Passionate",
    image: "images/innovation.png",
    description:
      "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
  },
  {
    title: "Good Return on Investment",
    image: "images/investment.png",
    description:
      "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
  },
  {
    title: "Seamless Customer Support",
    image: "images/customer-support.png",
    description:
      "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
  },
];

function WhyChooseUs() {
  return (
    <div className="mx-32 sm:mx-3 mt-20">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h2 className="text-7xl font-semibold text-white sm:text-4xl">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 p-5 gap-5 border shadow">
        {advantages.map((advantage) => (
          <div
            key={advantage.title}
            className="p-5 bg-white border shadow flex flex-col items-center space-y-5 transform hover:scale-105 duration-300 border-t-red-500 border-t-4 rounded-lg"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">{advantage.title}</h2>
            <p className="text-gray-600 text-md">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
