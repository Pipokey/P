import React from 'react';
import ButtonExplore from './ButtonExplore';
import Button2 from './Buttonp';
const Wrap3 = () => {
  return (
    <div className="w-5/6 mx-auto mt-52 ">
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="Icon13.png" className="w-72 px-5" alt="Icon8" />
      </div>
      <div className="w-full md:w-1/2 ml-10 md:ml-10 mt-6 md:mt-0 ">
        <div className="w-5/6 md:w-3/4">
          <p className="break-words font-bold text-base md:text-3xl text-left px-2 ">Purchase <span className="text-orange-500">Krado Headphone </span> 
 For $299</p>
        </div>
        <div className="mt-6 w-3/4">
          <p className="break-words  text-left text-justify  ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        </div>
        
        <div className="flex mt-6">
        <Button2 text="PURCHASE NOW" />
        </div>
      </div>
    </div>
  </div> 
  );
};

export default  Wrap3;


