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
            
            
            <div className='container-4 flex bg-[#d4e5f4]'>
                <div className='left w-1/3 mt-30 py-12 px-28 '>
                    <p className='text-gray-600 font-bold text-3xl py-3 flex'>Address Line </p>
                    <p>Pahartoli,Raozan-4349</p>
                    <p>Chittagong</p>
                    <p>Bangladesh</p>
                    <p className='flex py-3 mb-0'>(880)1819-347890 <br />(880)1399-789934</p>
                    <p>www.cuet.ac.bd</p>
                    <p>registrar@cuet.ac.bd, iict@cuet.ac.bd</p>
                </div>

                <div className='right w-2/3 mt-30 py-10 px-28'>
                    <div>
                        <p className='text-gray-600 font-bold text-3xl py-3'>Contact with Dr. Jamila Hoque</p>
                        <p className='flex py-3'>Contact Dr. Jamila Hoque for further inquiries.</p>
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