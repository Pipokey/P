import React from 'react';

const Button = ({  onClick }) => {
  return (
    <button
      className="px-5 py-1  rounded-2xl bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      onClick={onClick}
    >
      JOIN US
    </button>
  );
};

export default Button;
