import React from 'react';
import LearnMore from './LearnMoreButton';
const VideoSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-40" style={{ height: "500px" }}>
  <div className="w-full md:w-1/2 bg-green-600 flex flex-grow justify-center items-center">
    <div className="md:w-2/4 w-4/5">
      <p className="break-words font-bold text-slate-50 text-xl  md:text-4xl text-left ">The science of today is the technology of tomorrow</p>
      <p className="text-white mt-6 text-center md:text-left text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven.</p>
      <div className="flex mt-6" id="learn-more-container">
        <LearnMore />
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 bg-black flex flex-grow justify-center items-center md:mt-0">
    <div className="flex text-green-500 mr-2 md:mr-4 font-bold text-2xl">WATCH</div>
    <img src="Icon7.png" className="w-8 md:w-12" alt="Icon7" />
    <div className="flex text-green-500 ml-2 md:ml-4 font-bold text-2xl">VIDEO</div>
  </div>
</div>
  );
};

export default VideoSection;
