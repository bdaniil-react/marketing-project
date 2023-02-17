import React from "react";

import AboutIntro from "./about-intro.svg";

function Intro() {
  return (
    <>
      <div className="w-full h-screen absolute -top-[30%] transform rotate-[12deg] right-10 rounded-2xl about-intro sm:hidden"></div>
      <div className="grid grid-cols-2 sm:grid-cols-1 items-center h-screen sm:bg-secondary sm:p-6 sm:-mt-28">
        <div className="z-10 flex justify-center">
          <img
            src={AboutIntro}
            alt="About Intro"
            className="h-[500px] w-[500px]"
          />
        </div>
        <div className="z-10 max-w-max flex flex-col space-y-2">
          <h2 className="text-8xl font-semibold text-white sm:text-5xl sm:-mt-28">
            MAXAGENCY
          </h2>
          <hr />
          <h2 className="text-md ml-2 text-white">OLDER | STRONGER | WISER</h2>
        </div>
      </div>
    </>
  );
}

export default Intro;
