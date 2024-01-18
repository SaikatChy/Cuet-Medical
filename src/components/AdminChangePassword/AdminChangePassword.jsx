import React,{useState} from 'react';
import "./AdminChangePassword.css"
import "../AdminProfileSettings/AdminProfileSettings"
import CustomForm from '../Formik/CustomForm';
import passwordShema from '../../formValidator/password.yup'
import CustomField from '../Formik/CustomField';
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
const AdminChangePassword = () => {
    const [message,setMessage]=useState(null)
    const [status,setStatus]=useState(null)
    const initialValues={
        password:'',
        confirmPassword:""
    }
    const handleSubmit=({password})=>{
        setStatus(null);
        setMessage(null);
          axios.patch(rootUrl+'user/password',{password},{withCredentials:true})
            .then(({data})=>{
                 setStatus(data.status)
                 data.status && setMessage(data.message)    
            })
            .catch((err)=>{
              setStatus(false);
              setMessage(err.response.data.message)
            })
    }
    return (
        <div className='card'>
            {/* <form>
                <div className='user-details'>
                   

                    <div className='input-box'>
                        <label htmlFor="New_password">New Password</label>
                        <input type="password" id="new_password" placeholder="Give a new Password" className='bg-white' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" placeholder="Confirm your new Password" className='bg-white' />
                    </div>
                </div>

                <button type="submit" className='btn glass bg-success text-white'>Save Changes</button>
            </form> */}
            <CustomForm
               onSubmit={handleSubmit}
               initialValues={initialValues}
               validationSchema={passwordShema}
            >
                <CustomField
                type='password'
                name='password'
                labelText={'Password'}
                placeholder='Enter password'
                className='input input-bordered'
                />
                <CustomField
                type='password'
                name='confirmPassword'
                labelText={'Confirm Password'}
                placeholder='Enter password'
                className='input input-bordered'
                />
                <button type="submit" className='my-4 btn glass bg-success text-white'>Save Changes</button>
                </CustomForm> 
                {
                    status ? <p className='text-[green] font-[600] text-md text-center'>*{message}</p>
                      : <p className='text-[red] font-[600] text-md text-center'>*{message}</p>
                }
               
        </div>
        
    );
};

export default AdminChangePassword;