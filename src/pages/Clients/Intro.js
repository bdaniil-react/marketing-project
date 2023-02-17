import React from "react";

function Intro() {
  return (
    <div className="min-h-screen bg-primary grid grid-cols-2 sm:grid-cols-1 items-center p-10">
      <div className="h-[500px]">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_njobaah2.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div>
        <h2 className="text-7xl font-semibold text-white sm:text-4xl">
          We <b className="text-secondary">work</b> together with our
          <b className="text-green-700"> clients</b>
        </h2>
        <p className="text-md text-gray-600 mt-10">
          "To give real service you must add something which cannot be bought or
          measured with money, and that is sincerity and integrity."
        </p>
      </div>
    </div>
  );
}

export default Intro;
