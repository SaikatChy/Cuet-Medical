import  { useContext, useState } from 'react';
import loginSchema from '../../formValidator/login.yup';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';
import { rootUrl } from '../../utils/rootUrl';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import axios from 'axios';

const Login = () => {
    const {user,setUser}=useContext(UserContext)
    const [status,setStatus]=useState(null);
    const [message,setMessage]=useState('')
    const navigate=useNavigate();

    const initialValues={
        phoneNo:"01865926160",
        password:"123456"
    }
    const handleSubmit=async (values)=>{
        
        await axios.post(rootUrl+'user/login',values,{withCredentials:true})
         .then(({data})=>{
            if(data.status){
                const {token,...others}=data.data
                setUser(others)
                localStorage.setItem('token',token)
                setStatus(true);
               
                navigate('../')
            }
         })
         .catch((err)=>{
             const {message}=err.response.data
              setStatus(false);
              setMessage(message)
         })
    }
    console.log("logged in user==",user);
    return (
        <div className='m-7 mt-24'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login Now!</h1>
                    </div>

                    <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
                        <CustomForm initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
                             <CustomField 
                             type="tel"
                             name='phoneNo' 
                             labelText='Phone'  
                             className="bg-white w-full input input-bordered" 
                             placeholder="Enter Phone Number"/>
                            <CustomField 
                             type="password" 
                             name='password' 
                             labelText='Password'  
                             className="bg-white w-full input input-bordered" 
                             placeholder="Enter Password"/>
                             <div className="form-control mt-6">
                                   <button className="btn bg-success glass text-white" type='submit'>Login</button>
                             </div> 
                        </CustomForm>
                          {
                            status===false && 
                            <p className='text-[red] text-md my-1 text-[600] text-center'>*{message}</p>

                          }
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;