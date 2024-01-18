import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className='my-[10%]'>
            <div className="card w-3/5 mx-auto">
                <div className="card-body">
                    <div className='text-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring-4 ring-success ring-offset ring-offset-2">
                                <img src="https://placekitten.com/g/200/202" />
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-semibold mt-[2%]'>Albert Einstein</h2>
                            <div className=''>
                                <div className='flex gap-2 justify-center text-muted '>
                                    <small className='font-bold text-muted'>Patient ID </small>
                                    <small className=''>PT0010</small>
                                </div>
                                <div className='flex gap-1 justify-center text-muted'>
                                    <MdLocationPin></MdLocationPin>
                                    <small>Chittagong, Bangladesh</small>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col mt-[4%] w-full  lg:flex-row">
                            <div className="grid card flex-grow mt-[5%] items-center justify-center h-auto rounded-box place-items-center">
                                <div className="text-left">
                                    <ul>
                                        <li className='flex gap-6 justify-center'><p className='font-semibold'>Phone</p><p className='text-right'>+1 952 001 8563</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Age</p> <p className='text-right'>38 Years</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Blood Group</p><p className='text-right'>AB+</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="grid card flex-grow mt-[5%] h-auto rounded-box place-items-center">
                                <div className="text-left">
                                    <ul>
                                        <li className='flex gap-6'><p className='font-semibold'>E-mail</p><p className='text-right'>einstein@gmail.com</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Sex</p> <p className='text-right'>Male</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Date of Birth</p> <p className='text-right'>06, Oct 2005</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;