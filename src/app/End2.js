import React from 'react';
import Subscribe from './Subscribe';
const End2 = () => {
  return (
    <div className="flex justify-center items-center mt-24 h-96">
  <div className="w-2/3 md:w-full flex flex-col justify-center items-center">
    <div className="text-center font-bold text-sm md:text-3xl">Different Colours & Different Choice</div>
    <p className="text-left text-justify mt-2 mb-8 md:mb-16 font-light">Be First To Get Latest Updates From Krado</p>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <input type="text" placeholder="Enter your Email" className="border-2  py-4 pl-4  md:pr-40 mb-4 md:mb-0" />
      <Subscribe/>
    </div>
  </div>
</div>
  );
};

export default  End2;


