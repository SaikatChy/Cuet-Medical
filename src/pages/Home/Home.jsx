import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from './Carousel.jsx';
import { Link } from 'react-router-dom';
import { FaHeartPulse } from "react-icons/fa6";
import { FcBiotech } from "react-icons/fc";
import { GiTestTubes } from "react-icons/gi";
const Home = () => {
    return (
        <div className='mt-16'>
            <Carousel></Carousel>
            {/* <div className="carousel w-full bg-gray-900">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="relative h-[650px] w-full">
                        <img src="/public/images/Banner-1.jpg" data-te-carousel-fade
                            data-te-carousel-item
                            data-te-carousel-active className="absolute top-0 left-0 w-full h-full opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="font-bold py-3 text-white">Hello, I am Dr. X</h1>
                                <p className='py-3 text-white'>
                                Book an appointment with our esteemed cardiologist today. <br /> Explore Dr. X's renowned Cardiology Practice.
                                </p>
                                <button className='btn bg-[#4299E1] text-white font-bold'>Get an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/public/images/Banner-2.jpg" data-te-carousel-fade
                        data-te-carousel-item
                        data-te-carousel-active className="h-[650px] w-full opacity-40" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/images/Banner-3.jpg" data-te-carousel-fade
                        data-te-carousel-item
                        data-te-carousel-active className="h-[650px] w-full opacity-40" />
                  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
            <div className='container1 mt-[5%] flex mx-auto my-3 items-stretch justify-center h-auto'>
                <div className='left w-1/4 mx-[2%] py-3 card transform transition-transform group hover:-translate-y-1 hover:scale-105'>
                    <div className='flex flex-col items-center text-center card-body h-full'>
                        <FaHeartPulse className='text-7xl align-middle text-success' />
                        <p className='font-bold text-xl text-gray-600 py-3'>Electrocardiogram (ECG/EKG)</p>
                        <p className='text-justify'>This test records the electrical activity of the heart over a period of time. It helps diagnose irregular heart rhythms and heart attacks.</p>
                    </div>
                </div>

                <div className='middle w-1/4 mx-[2%] card transform transition-transform group hover:-translate-y-1 hover:scale-105'>
                    <div className='flex flex-col items-center text-center card-body h-full'>
                        <GiTestTubes className='text-7xl align-middle text-primary'></GiTestTubes>
                        <p className='font-bold text-xl text-gray-600 py-3 text-center'>Echocardiogram</p>
                        <p className='text-justify'>An echocardiogram uses sound waves (ultrasound) to create images of the heart. It provides detailed information about the heart's structure and function</p>
                    </div>
                </div>
                <div className='right w-1/4 mx-[2%] card transform transition-transform group hover:-translate-y-1 hover:scale-105'>
                    <div className='flex flex-col items-center text-center card-body h-full'>
                        <FcBiotech className='text-7xl align-middle'></FcBiotech>
                        <p className='font-bold text-xl text-gray-600 py-3 text-center'>Stress Test</p>
                        <p className='text-justify'>A stress test, often done on a treadmill or stationary bike, monitors the heart's response to physical activity.</p>
                    </div>
                </div>
            </div>

            <div className='container2 mt-30 flex mx-auto items-center justify-center '>
                <div className='left w-1/2'>
                    <h1 className='text-gray-600 font-bold py-3'>About Dr X<br /></h1>
                    <p className='py-3 text-justify'> Welcome to the prestigious Cardiology Practice of Dr. X, which is run by a renowned cardiologist with significant training and a dedication to providing advanced care. With the aid of modern equipment,<br /> Dr. X's patient-centered approach customizes treatments for your particular cardiac needs. Choose us <br /> for superior cardiac diagnostics, quick access to innovative cardiac therapies, and information on <br /> leading a heart-healthy lifestyle. When you're ready to put your heart health first, explore our website <br /> for information on our services. We're then here to help you make an appointment. With us, your path <br /> to a heart that is healthy can begin.</p>
                    <Link to="/about" className='btn bg-success glass text-white font-bold focus:outline-none'>Know More</Link>
                </div>
                <div className='right w-1/3 flex flex-col'>
                    <img src="/public/images/doctor-1.png" className='w-300 py-5' />
                </div>
            </div>

            <div className="carousel w-full bg-gray-900">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="relative h-[350px] w-full">
                        <img src="/public/images/Banner-2.jpg" data-te-carousel-fade
                            data-te-carousel-item
                            data-te-carousel-active className="absolute top-0 left-0 w-full h-full opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="font-bold py-3 text-white">Get monthly health tips from Dr. X</h1>
                                <p className='py-3 text-white'>
                                    Join our group to get easy access to tons of helpful heart health advice, suggestions <br /> and the most recent information sent straight to your inbox for your wellbeing.
                                </p>
                                {/* <button className='btn bg-[#4299E1] text-white font-bold'>Subscribe</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-4 flex'>
                <div className='left w-1/3 mt-30 py-12 px-28'>
                    <p className='text-gray-600 font-bold text-3xl py-3 flex'>Address Line #1</p>
                    <p>123 Main Street</p>
                    <p>Your City, State</p>
                    <p>Country.</p>
                    <p className='flex py-3 mb-0'>(880)1819-347890 <br />(880)1399-789934</p>
                    <p>info@doctorX.me</p>
                    <p>info@doctorX.me</p>
                </div>

                <div className='right w-2/3 mt-30 py-10 px-28'>
                    <div>
                        <p className='text-gray-600 font-bold text-3xl py-3'>Contact with Dr. X</p>
                        <p className='flex py-3'>Contact Dr. X for further inquiries.</p>
                    </div>
                    <div className='flex flex-col text-grey-600 bg-transparent rounded-xl'>
                        <input type="text" placeholder="Enter Your Full Name" className="my-1 input glass bg-transparent input-bordered input-info w-full" />
                        <input type="email" placeholder="Enter Your Email Address" className="my-1 glass input bg-transparent input-bordered input-info w-full" />
                        <textarea className="my-1 textarea textarea-info glass bg-transparent" placeholder="Enter Your Message"></textarea>
                        <button className='mt-1 btn bg-success glass text-white font-bold focus:outline-none'>Submit</button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Home;