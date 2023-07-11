import React from 'react';

const LearnMore = ({  onClick }) => {
  return (
    <button
      className="px-5 py-1  rounded-2xl bg-white mt-6 text-orange-500"
      onClick={onClick}
    >
      Learn More
    </button>
  );
};

export default LearnMore;
