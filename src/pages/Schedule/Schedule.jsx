import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootUrl } from '../../utils/rootUrl';
import { postData } from '../../Axios/postData';

const BookletPage = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState('');
  const pageStyle = {
    backgroundColor: '#d4e5f4',
    padding: '20px',
  };

  const formik = useFormik({
    initialValues: {
      studentId: '',
      name: '',
      email: '',
      department: '',
      batch: '',
      mobileNo: '',
      Level: '',
      Term: '',
      session: '',
      hallName: '',
      bloodGroup: '',
      resident: true,
      
    },
    onSubmit: async (values) => {
     
      // console.log(values);
      // alert(JSON.stringify(values));
 
       
        const response = await postData(rootUrl+ 'booklet', values)
        //console.log(response.data);
        //  alert(JSON.stringify(response));
        if (response.data) {
          setSuccess(true);
          setMessage(response.data.message);
          // You can navigate to another page after successful submission
           navigate('/patient-profile/'+response.data.serialNo);
        }
      else {
       
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
            <h1 className="text-4xl font-bold">Booklet Generation</h1>
          </div>

          <div className="card mx-96 flex-shrink-0 w-full max-w-[650px] shadow-2xl bg-white card-body">
            <form className="w-[100%]" onSubmit={formik.handleSubmit}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text"><b>Student ID</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Student ID"
                  name="studentId"
                  id="studentId"
                  onChange={formik.handleChange}
                  value={formik.values.studentId}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
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
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
             
              <div className="form-control">
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
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"><b>Mobile Number</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  name="mobileNo"
                  id="mobileNo"
                  onChange={formik.handleChange}
                  value={formik.values.mobileNo}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text"><b>Department</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Department"
                  name="department"
                  id="department"
                  onChange={formik.handleChange}
                  value={formik.values.department}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
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
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text"><b>Level</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Level"
                  name="Level"
                  id="Level"
                  onChange={formik.handleChange}
                  value={formik.values.Level}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"><b>Term</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Term"
                  name="Term"
                  id="Term"
                  onChange={formik.handleChange}
                  value={formik.values.Term}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text"><b>Session</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Session"
                  name="session"
                  id="session"
                  onChange={formik.handleChange}
                  value={formik.values.session}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div> 

              <div className="form-control ">
                <label className="label">
                  <span className="label-text"><b>Hall Name</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Hall Name"
                  name="hallName"
                  id="hallName"
                  onChange={formik.handleChange}
                  value={formik.values.hallName}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div> 


              <div className="form-control">
                <label className="label">
                  <span className="label-text"><b>Blood Group</b></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Blood Group"
                  name="bloodGroup"
                  id="bloodGroup"
                  onChange={formik.handleChange}
                  value={formik.values.bloodGroup}
                  className="bg-slate-300 input input-bordered w-full"
                  required
                />
              </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text"><b>Resident</b></span>
                </label>
                <div className="flex items-center space-x-2 px-5">
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      name="residentYes"
                      onChange={() => {
                        formik.handleChange();
                        formik.setFieldValue('residentNo', false);
                      }}
                      checked={formik.values.residentYes}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      name="residentNo"
                      onChange={() => {
                        formik.handleChange();
                        formik.setFieldValue('residentYes', false);
                      }}
                      checked={formik.values.residentNo}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div> */}


              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn glass bg-success text-white w-full"
                  value={'Generate Booklet'}
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
                
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BookletPage;
