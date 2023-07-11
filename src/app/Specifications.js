import React from 'react';

const Specifications = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-center mt-8 md:mt-36 font-bold text-4xl md:text-4xl text-lg">Technology Keeps Moving Forward</h1>

        <p className="text-center mt-4 md:mt-8">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic</p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mt-12">
          <div className="w-full md:w-1/5 md:mr-4">
            <div className="flex flex-col items-start">
              <img src="Icon.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Latest Technology</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            <div className="flex flex-col items-start mt-4 md:mt-8">
              <img src="Icon2.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Modern Design</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            <div className="flex flex-col items-start mt-4 md:mt-8">
              <img src="Icon3.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Sound Clarity</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto mt-8 md:mt-0">
            <img src="headphones_PNG7650.png" className="h-3/4" alt="Headphones" />
          </div>
          <div className="w-full md:w-1/5 md:ml-16">
            <div className="flex flex-col items-start">
              <img src="Icon4.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Easy To Use</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            <div className="flex flex-col items-start mt-4 md:mt-8">
              <img src="Icon5.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Layered Materials</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
            <div className="flex flex-col items-start mt-4 md:mt-8">
              <img src="Icon6.png" className="h-5 mt-8 md:mt-12 pr-12" alt="Icon" />
              <p className="font-semibold">Wireless Available</p>
              <p className="text-sm">Sed ut perspiciatis unde omnis iste natus error sit volu atem accusam.</p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Specifications;
