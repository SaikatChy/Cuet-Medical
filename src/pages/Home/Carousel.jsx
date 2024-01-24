import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const images = [
  "/public/images/cuet-1.jpg",
  "/public/images/cuet-2.webp",
  "/public/images/cuet-3.jpg",
  // Add more image URLs as needed
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container bg-gray-900 relative h-[650px] w-full">
        {images.map((image, index) => (
          <div key={index} className='opacity-40'>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`carousel-image absolute top-0 left-0 w-full h-full opacity-0${index === currentImageIndex ? 'active' : ''
                }`}
            />
          </div>
        ))}  //items-center justify-center
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="align-center">
          <h1 className="font-bold font-serif  align-text-bottom py-3  text-white">CUET <br/> MEDICAL <br /> MANAGEMENT <br /> SYSTEM</h1>
          <h3 className='py-3 text-white text-bold'>
          Empowering Health, Connecting Lives 
          </h3>
          <Link to="/Schedule" className='btn bg-success glass text-white font-bold focus:outline-none'>Create Your Own Booklet</Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
