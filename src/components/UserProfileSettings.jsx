import React from 'react';
import CustomField from './Formik/CustomField';
import CustomForm from './Formik/CustomForm';

const UserProfileSettings = () => {
    const initialValues = 0;
    const handleSubmit = (values) => { }
    return (
        <div className='my-[10%]'>
            <div className="container card w-3/5 mx-auto my-auto">
                <div className="title">Basic Information</div>
                <div className="change-avatar">
                    <div className="profile-img">
                        <img
                            src="https://placekitten.com/g/200/205"
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
                        // validationSchema={doctorSchema}
                        className='flex justify-between flex-wrap  mx-8 my-8'
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
                            name='sex'
                            type='text'
                            labelText='Sex'
                            className='bg-white input input-bordered w-[350px]'
                            placeholder=''
                        />
                        <CustomField
                            name='age'
                            type='number'
                            labelText='Age'
                            className='bg-white input input-bordered w-[350px]'
                            placeholder='Enter Your Age in Years'
                        />
                        <CustomField
                            name='blood'
                            type='text'
                            labelText='Blood'
                            className='bg-white input input-bordered w-[350px]'
                            placeholder='Enter Your Blood Group'
                        />
                        <CustomField
                            name='dob'
                            type='date'
                            labelText='DoB'
                            className='bg-white input input-bordered w-[350px]'
                            placeholder=''
                        />
                        <CustomField
                            name='address'
                            as='textarea'
                            labelText='Address'
                            className='bg-white input input-bordered w-[350px]'
                            placeholder='Enter Your Address'
                        />
                        <div className='text-center'>
                            <button className='focus:outline-none btn bg-success glass text-white'>Save Changes</button>
                        </div>
                    </CustomForm>
                </div>
            </div>
        </div>
    );
};

export default UserProfileSettings;