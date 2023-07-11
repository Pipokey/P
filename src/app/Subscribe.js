import React from 'react';

const Subscribe = ({  onClick }) => {
  return (
    <button
      className="px-8 py-4 bg-orange-600 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      onClick={onClick}
    >
    Subscribe
    </button>
  );
};

export default Subscribe;
