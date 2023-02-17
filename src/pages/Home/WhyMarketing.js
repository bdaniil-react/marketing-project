import React from "react";

function WhyMarketing() {
  return (
    <div className="mt-20 relative sm:px-5">
      <h2 className="text-center text-8xl font-semibold text-primary sm:text-5xl">
        Why <b className="text-secondary">Marketing</b>?
      </h2>
      <div className="h-[500px] absolute top-0 left-0 right-0 z-10">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_o18imdcr.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="text-gray-600 text-md mt-[380px] sm:mt-[320px]">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h2 className="text-primary text-4xl font-semibold mt-10">
        The answers to all these questions lie in marketing.
      </h2>
      <p className="text-gray-600 text-md mt-10">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
}

export default WhyMarketing;
