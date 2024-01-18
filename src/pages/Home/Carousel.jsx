import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const images = [
  "/public/images/Banner-1.jpg",
  "/public/images/Banner-2.jpg",
  "/public/images/Banner-3.jpg",
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
        ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold py-3 text-white">Hello, I am Dr. X</h1>
          <p className='py-3 text-white'>
            Book an appointment with our esteemed cardiologist today. <br /> Explore Dr. X's renowned Cardiology Practice.
          </p>
          <Link to="/appointment" className='btn bg-success glass text-white font-bold focus:outline-none'>Get an Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
