// Login.jsx

import { useContext, useState } from 'react';
import loginSchema from '../../formValidator/login.yup';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';
import { rootUrl } from '../../utils/rootUrl';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import axios from 'axios';
import { postData } from '../../Axios/postData';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [status, setStatus] = useState(null);
  const [role,setRole]=useState("student")
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const pageStyle = {
    backgroundColor: '#d4e5f4',
    padding: '20px',
  };

  const initialValues = {

    id: '',
    password: '',
  };

  const options = [
    { value: 'student', label: 'Student' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'admin', label: 'Admin' },
  ];

  const handleSubmit = async (values) => {
     const postLogin=async(role="student")=>{
         const result=await postData(`/auth/${role}/login`,values);
         if(result.success){
          setUser(result.data)
          navigate('/')
         }
         else {
          setStatus(false)
            setMessage(result.message)
         }
     }
     postLogin(role)
  };

  return (
    <div style={pageStyle}>
      <div className="m-7 mt-24 ">
        <div className="hero">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login Now as a {role}</h1>
            </div>

            <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
            <select id="role" name="role" className={`bg-white select select-bordered w-full`} onChange={(e)=>setRole(e.target.value)}>
               {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
              <CustomForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                 
                <CustomField
                  type="Id"
                  name="id"
                  labelText="Id"
                  className="bg-white w-full input input-bordered"
                  placeholder="Enter Id"
                />
                <CustomField
                  type="password"
                  id="password"
                  name="password"
                  labelText="Password"
                  className="bg-white w-full input input-bordered"
                  placeholder="Enter Password"
                />
                <div className="form-control mt-6">
                  <button
                    className="btn bg-success glass text-white"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </CustomForm>
              {status === false && (
                <p className="text-[red] text-md my-1 text-[600] text-center">
                  *{message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
