import React from 'react';

const Types = () => {
  return (
    <div className="flex justify-center items-center mt-24 h-screen px-10">
    <div className="w-5/6 md:w-full flex flex-col justify-center items-center">
      <div className="text-center font-bold text-sm md:text-4xl">Different Colours & Different Choice</div>
      <p className="text-left text-justify mt-2 mb-8 md:mb-16 font-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici</p>
      <div className="flex justify-center">
        <img src="Icon10.png" className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/4 lg:mx-8 h-auto mx-2" alt="Icon10" />
        <img src="Icon11.png" className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/4 lg:mx-8 h-auto mx-2" alt="Icon11" />
        <img src="Icon12.png" className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/4 lg:mx-8 h-auto mx-2" alt="Icon12" />
      </div>
    </div>
  </div>  
  );
};

export default  Types;


