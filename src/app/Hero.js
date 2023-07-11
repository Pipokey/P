import React from 'react';
import Button2 from './Buttonp';
const Hero = () => {
  return (
    <div className="bg-blue-500 flex justify-center items-center min-h-screen">
    <div className="text-white  w-4/5 sm:w-1/2 md:w-1/3 md:-ml-96">
      <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">
        Discover the power
      </h1>
      <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">Of Great Music</h1>
      <div className="container my-4">
        <p className="break-words">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
      </div>
      <Button2 text="PURCHASE NOW" />
    </div>
  </div>
  );
};

export default Hero;
