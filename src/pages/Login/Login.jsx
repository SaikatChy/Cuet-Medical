// Login.jsx

import { useContext, useState } from 'react';
import loginSchema from '../../formValidator/login.yup';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';
import { rootUrl } from '../../utils/rootUrl';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import axios from 'axios';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const pageStyle = {
    backgroundColor: '#d4e5f4',
    padding: '20px',
  };

  const initialValues = {
    role: '', // Added "Role" field
    phoneNo: '',
    password: '',
  };

  const roleOptions = [
    { value: 'student', label: 'Student' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'admin', label: 'Admin' },
  ];

  const handleSubmit = async (values) => {
    await axios
      .post(rootUrl + 'user/login', values, { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          const { token, ...others } = data.data;
          setUser(others);
          localStorage.setItem('token', token);
          setStatus(true);
          navigate('../');
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        setStatus(false);
        setMessage(message);
      });
  };

  return (
    <div style={pageStyle}>
      <div className="m-7 mt-24 ">
        <div className="hero">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login Now!</h1>
            </div>

            <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
              <CustomForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
              >
                <CustomField
                  type="select"
                  name="role"
                  labelText="Role"
                  className="select select-bordered w-full bg-white"
                  options={roleOptions}
                />
                <CustomField
                  type="Id"
                  name="Id"
                  labelText="Id"
                  className="bg-white w-full input input-bordered"
                  placeholder="Enter Id"
                />
                <CustomField
                  type="password"
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
