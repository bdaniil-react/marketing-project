import React from "react";

const services = [
  {
    title: "Web Development",
    icon: "images/web.png",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet.",
  },
  {
    title: "Mobile Development",
    icon: "images/mobile.png",
    description:
      "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
  },
  {
    title: "Digital Marketing",
    icon: "images/digital-marketing.png",
    description:
      "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
  },

  {
    title: "Graphic Design",
    icon: "images/graphicdesign.png",
    description:
      "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
  },
];

function WhatWeDo() {
  return (
    <div className="z-20 sm:mt-10">
      <h2 className="text-secondary text-7xl text-center z-20 font-semibold sm:text-5xl">
        What We Do?
      </h2>
      <div className="h-72 w-full bg-primary mt-12"></div>
      <div className="grid grid-cols-4 sm:grid-cols-1 gap-10 mx-32 sm:mx-0 -mt-40 sm:w-full sm:px-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-5 bg-white border shadow-lg flex flex-col items-center space-y-5 transform hover:scale-105 duration-500 sm:w-full"
          >
            <img src={service.icon} alt={service.title} className="h-16 w-16" />
            <h2 className="text-2xl">{service.title}</h2>
            <p className="text-gray-600 text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
