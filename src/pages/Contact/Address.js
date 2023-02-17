import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex flex-col space-y-10 p-10 text-white">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <p>
          MAXAGENCY is a digital marketing agency that provide marketing and
          development services
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-white rounded flex items-center justify-center">
            <i class="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Visit Us:</h2>
            <p>49094, Pobeda St, Dnipro, Ukraine</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-white rounded flex items-center justify-center">
            <i class="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Mail Us:</h2>
            <p>maxagency@gmail.com</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-white rounded flex items-center justify-center">
            <i class="ri-smartphone-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Phone Us:</h2>
            <p>+(305) 555-1111</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
