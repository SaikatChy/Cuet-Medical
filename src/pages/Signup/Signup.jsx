import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { rootUrl } from '../../utils/rootUrl';


const Signup = () => {
  const navigate = useNavigate();
  const pageStyle = {
    backgroundColor: '#d4e5f4',
    padding: '20px',
  };
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      studentID: '',
      name: '',
      email: '',
      password: '',
      department: '',
      batch: '',
      role: '',
      profileImage: '',
    },
    onSubmit: async (values) => {
      const { confirmPassword, ...patient } = values;
      console.log(patient);
      try {
        const response = await axios.post(rootUrl + 'user/patient', patient);
        console.log(response.data);
        if (response.data.status) {
          setSuccess(true);
          setMessage(response.data.message);
          navigate('../login');
        }
      } catch (error) {
        console.error(error.response.data);
        const { message } = error.response.data;
        setSuccess(false);
        setMessage(message);
      }
    },
  });

  return (
    <div style={pageStyle}>
    <div className="m-7 mt-20">
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Register!</h1>
          </div>

          <div className="card mx-9 flex-shrink-0 w-full max-w-[650px] shadow-2xl bg-white card-body">
            <form className="w-[100%]" onSubmit={formik.handleSubmit}>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Student ID</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Student ID"
                  name="studentID"
                  id="studentID"
                  onChange={formik.handleChange}
                  value={formik.values.studentID}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.studentID && formik.errors.studentID ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.studentID}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Name</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Email</b></span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Password</b></span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Department</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Dept"
                  name="department"
                  id="department"
                  onChange={formik.handleChange}
                  value={formik.values.department}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.department && formik.errors.department ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.department}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Batch</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Batch"
                  name="batch"
                  id="batch"
                  onChange={formik.handleChange}
                  value={formik.values.batch}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.batch && formik.errors.batch ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.batch}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Role</b></span>
                </label>
                <select
                  name="role"
                  id="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  className="bg-white select select-bordered w-full"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="student">Student</option>
                  <option value="doctor">Doctor</option>
                </select>
                {formik.touched.role && formik.errors.role ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.role}
                  </div>
                ) : null}
              </div>
              <div className="form-control w-[65%]">
                <label className="label">
                  <span className="label-text"><b>Profile Image</b></span>
                </label>
                <input
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  onChange={formik.handleChange}
                  value={formik.values.profileImage}
                  className="bg-white input input-bordered w-full"
                  required
                />
                {formik.touched.profileImage && formik.errors.profileImage ? (
                  <div className="text-xs text-[red] text-[600] my-1">
                    *{formik.errors.profileImage}
                  </div>
                ) : null}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn glass bg-success text-white w-full"
                  value={'Register'}
                />
                {success !== null && (
                  <p
                    className={`my-1 text-center text-md text-[700] ${
                      success ? 'text-[green]' : 'text-[red]'
                    }`}
                  >
                    {message}
                  </p>
                )}
                <label className="label flex justify-center">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover"
                  >
                    Already Have an account? Login
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;
