import React, { useState, useEffect } from 'react';

const Carousel = ({ children, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === children.length - 1 ? 0 : prevSlide + 1));
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [children.length, interval]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {children[currentSlide]}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        {children.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 mb-16 ${
              index === currentSlide ? 'bg-orange-500' : 'border-2 border-orange-500'
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
