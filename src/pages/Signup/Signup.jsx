import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useFormik } from 'formik';
 import signupSchema from '../../formValidator/signup.yup';
import axios from 'axios';
import { rootUrl } from '../../utils/rootUrl';
const Signup = () => {
    const navigate = useNavigate();
    const [success,setSuccess]=useState(null)
     const [message,setMessage]=useState('')
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          dateOfBirth:'',
          phoneNo:'',
          confirmPassword:''

        },
        validationSchema: signupSchema,
        onSubmit: async (values) => {
             const {confirmPassword,...patient}=values
            console.log(patient);
            await axios.post(rootUrl+'user/patient',patient)
             .then(({data})=>{
                console.log(data);
                if(data.status){
                   setSuccess(true)
                   setMessage(data.message)
                   navigate('../login')
                }
             })
             .catch(err=>{
                console.log(err.response.data);
                const {message}=err.response.data
                setSuccess(false)
                setMessage(message)
             })
        },
      });
      console.log({success});
    return (
        <div className='m-7 mt-20'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register!</h1>
                    </div>

                    <div className="card mx-9 flex-shrink-0 w-full max-w-[650px] shadow-2xl bg-white card-body">
                        <form className='w-[100%]' onSubmit={formik.handleSubmit}>
                            <div className="flex justify-between w-[100%] flex-wrap" >
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" 
                                    placeholder="name"
                                     name="name" 
                                     id='name'
                                     onChange={formik.handleChange}
                                     value={formik.values.name}
                                     className="bg-white input input-bordered w-full"  required
                                    />
                                      {formik.touched.name && formik.errors.name ? (
                               <div className="text-[red] text-[600] text-xs my-1">*{formik.errors.name}</div>
                                    ) : null}

                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input type="date" 
                                    placeholder="Select Date of Birth" 
                                    name='dateOfBirth' 
                                    id='dateOfBirth'
                                    onChange={formik.handleChange}
                                    value={formik.values.dateOfBirth}
                                    className="bg-white input input-bordered w-full" required />
                                      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div className="text-xs text-[red] text-[600] my-1">*{formik.errors.dateOfBirth}</div>
        ) : null}
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" 
                                    placeholder="Enter Phone Number"
                                     name='phoneNo' 
                                    id='phoneNo'
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNo} 
                                     className="bg-white input input-bordered w-full" required />
                                       {formik.touched.phoneNo && formik.errors.phoneNo ? (
          <div className="text-xs text-[600] my-1 text-[red]">*{formik.errors.phoneNo}</div>
        ) : null}
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" 
                                    placeholder="email"
                                     name="email" 
                                    id='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                     className="bg-white input input-bordered w-full" />
                                       {formik.touched.email && formik.errors.email ? (
          <div className="text-xs text-[red] my-1 text-[600]">*{formik.errors.email}</div>
        ) : null}
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" 
                                    placeholder="password" 
                                    name='password'         
                                    id='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="bg-white input input-bordered w-full " required />
                                      {formik.touched.password && formik.errors.password ? (
          <div className="text-xs text-[red] my-1 text-[600]">*{formik.errors.password}</div>
        ) : null}
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password"
                                    name='confirmPassword' 
                                    id='confirmPassword'
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                     placeholder="Confirm password"  className="bg-white input input-bordered w-full" required />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-xs text-[red] my-1 text-[600]">*{formik.errors.confirmPassword}</div>
        ) : null}
                                </div>
                               

                                {/* <div className="form-control">
                                    <button className="btn glass bg-success text-white"><FaGoogle className='text-xl'></FaGoogle></button>
                                </div> */}
                            </div>
                            <div className="form-control mt-6">
                                    <input type='submit' className="btn glass bg-success text-white w-full" value={'Register'} />
                                    {
                                        (success===true) ? 
                                        <p className='my-1 text-center text-md text-[700] text-[green]'>{message}</p>:
                                        <p className='my-1 text-center text-md text-[700] text-[red]'>{message}</p>
                                    }
                                    <label className="label flex justify-center">
                                        <Link to='/login' className="label-text-alt link link-hover">Already Have an account? Login</Link>
                                    </label>
                                    {/* <div className="divider">OR</div> */}
                                </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;