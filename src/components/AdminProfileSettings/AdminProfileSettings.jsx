import React, { useContext, useState } from 'react';
import "./AdminProfileSettings.css";
import UserContext from '../../Contexts/UserContext';
import CustomForm from '../Formik/CustomForm';
import CustomField from '../Formik/CustomField';
import doctorSchema from '../../formValidator/doctorProfile.yup';

const AdminProfileSettings = () => {
    const {user}=useContext(UserContext)
    const {name,designation,email,gender,aboutMe}=user
    const initialValues={ name, designation, email, aboutMe,gender}
    const handleSubmit=(values)=>{}
    return (
        <div className="container">
            <div className="title">Basic Information</div>
            <div className="change-avatar">
                <div className="profile-img">
                    <img
                        src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-thumb-02.jpg"
                        height="110"
                        alt="User Image"
                        className="h-1/2 w-1/2"
                    />
                </div>

                <div className="upload-img">
                    <div className="">
                        <span>
                            <i className="fa fa-upload"></i>
                            <label htmlFor="file_upload" className='btn bg-success glass text-white'>Upload Photo</label>
                        </span>
                        <input type="file" className="bg-white upload" id="file_upload" />
                    </div>
                </div>
            </div>

            <div className="content">
                <CustomForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={doctorSchema}
                className='flex justify-between flex-wrap mx-8 my-8'
                >
                <CustomField
                    name='name'
                    labelText='Name'
                    className='bg-white input input-bordered w-[350px]'
                    placeholder='Enter Name'
                />
                <CustomField
                    name='email'
                    labelText='Email'
                    className='bg-white input input-bordered w-[350px]'
                    placeholder='Enter Email'
                />
                <CustomField
                    name='designation'
                    type='text'
                    labelText='Designation'
                    className='bg-white input input-bordered w-[350px]'
                    placeholder='Enter Designation'
                />
                <CustomField
                    name='aboutMe'
                    as='textarea'
                    labelText='About Me'
                    className='bg-white input input-bordered w-[350px]'
                    placeholder='Enter About Me'
                />
                </CustomForm>
            </div>
        </div>
    );
};

export default AdminProfileSettings;