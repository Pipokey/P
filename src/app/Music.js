import React from 'react';

import Button2 from './Buttonp';
const Music = () => {
  return (
    <div className="bg-cyan-500 mt-44 flex flex-col justify-center items-center md:flex-row px-10" style={{ height: "500px" }}>
    <div className="w-full  md:w-1/2 flex justify-end">
      <div className="md:w-3/5 w-6/7">
        <p className="font-bold text-2xl md:text-3xl text-justify">The Krado Is a Great Way To Get On The Music</p>
        <p className="break-words mt-4 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptat.</p>
       
        <div className="flex mt-6" id="learn-more-container">
        <Button2 text="PURCHASE NOW" />
        </div>
      </div>
    </div>
  </div>  
  );
};

export default Music;


