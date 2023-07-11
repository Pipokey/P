import React from 'react';
import ButtonExplore from './ButtonExplore';
const Wrap2 = () => {
  return (
    <div className="w-5/6 mx-auto mt-32">
      <div className="flex flex-col md:flex-row items-center">

        <div className="w-full md:w-1/2 ml-0 md:ml-10 mt-6 md:mt-0">
          <div className="w-5/6 md:w-4/5">
            <p className="break-words font-bold text-base md:text-3xl text-left ">Krado Modern Design With
              Wireless Gadget</p>
          </div>
          <div className="mt-6">
            <p className="break-words  text-left text-justify ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
          </div>

          <div className="flex mt-6" id="learn-more-container">
            <ButtonExplore />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-44 flex justify-center">
          <img src="Icon9.png" className="w-72" alt="Icon8" />
        </div>
      </div>
    </div>
  );
};

export default Wrap2;


