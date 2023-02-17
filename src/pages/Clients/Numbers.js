import React from "react";

function Numbers() {
  return (
    <div className="px-[152px] sm:px-5 mt-20">
      <h2 className="text-2xl text-gray-600 my-5">
        Until today we have provided our services to...
      </h2>
      <div className="bg-secondary flex justify-between space-x-10 sm:space-x-0 p-5 rounded sm:flex-col sm:space-y-10">
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h2 className="text-9xl text-white">152</h2>
          <h2 className="text-white text-2xl">Clients</h2>
        </div>

        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h2 className="text-9xl text-white">485</h2>
          <h2 className="text-white text-2xl">Projects</h2>
        </div>

        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h2 className="text-9xl text-white">24</h2>
          <h2 className="text-white text-2xl">Locations</h2>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
