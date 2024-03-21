import React, { useEffect, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { rootUrl } from '../../utils/rootUrl';
import axios from 'axios';
import axiosInstance from '../../Axios/axiosInstance';
import { useParams } from 'react-router-dom';


const PatientProfile = () => {
    const {serialNo}=useParams()
    const [booklet,setBooklet]= useState({}) 
    useEffect(()=>{
        const fetchData= async()=>{
            const data= await axiosInstance.get(rootUrl+ 'booklet/'+serialNo)
            setBooklet(data.data.data)
        } 
        fetchData()
    },[])

    return (
        
        <div className='my-[10%]'>
            <div className="card w-3/5 mx-auto">
                <div className="card-body">
                    <div className='text-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring-4 ring-success ring-offset ring-offset-2">
                                <img src="/public/images/cuet-1.jpg" />
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-semibold mt-[2%]'>{booklet?.name}</h2>
                            <div className=''>
                                <div className='flex gap-2 justify-center text-muted '>
                                    <small className='font-bold text-muted'>Student ID </small>
                                    <small className=''>{booklet?.studentId}</small>
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
                                        <li className='flex gap-6'><p className='font-semibold'>E-mail</p><p className='text-right'>{booklet?.email}</p></li>
                                        <li className='flex gap-6 justify-center'><p className='font-semibold'>Phone</p><p className='text-right'>{booklet?.mobileNo}</p></li>   
                                        <li className='flex gap-6'><p className='font-semibold'>Hall</p> <p className='text-right'>{booklet?.hallName}</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Level</p><p className='text-right'>{booklet?.Level}</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Blood Group</p><p className='text-right'>{booklet?.bloodGroup}</p></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="grid card flex-grow mt-[5%] h-auto rounded-box place-items-center">
                                <div className="text-left">
                                    <ul>
                                         <li className='flex gap-6'><p className='font-semibold'>Department</p> <p className='text-right'>{booklet?.department}</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Batch</p><p className='text-right'>{booklet?.batch}</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Session</p><p className='text-right'>{booklet?.session}</p></li>
                                        <li className='flex gap-6'><p className='font-semibold'>Term</p><p className='text-right'>{booklet?.Term}</p></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h2 className='text-xl font-semibold mt-[2%]'><u>Previous Prescriptions</u></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;