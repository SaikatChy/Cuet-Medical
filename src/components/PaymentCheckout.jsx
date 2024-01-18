import { useContext } from 'react';
// import { MdLocationPin } from 'react-icons/md';
import CustomForm from '../components/Formik/CustomForm'
import CustomField from '../components/Formik/CustomField'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import problemDescriptionSchema from '../formValidator/problemDescription.yup';
import axios from 'axios';
import { rootUrl } from '../utils/rootUrl';

const PaymentCheckout = () => {
    const {id}=useParams();
    const location=useLocation();
    const navigate=useNavigate()
    const visitingFee=location?.state?.visitingFee
    const slotId=location?.state?.slotId
    const {user}=useContext(UserContext)
  
    const name=user?.name
    const email=user?.email
    const phoneNo=user?.phoneNo
    const userId=user?.userId
    const initialValues={
        problemDescription:"Hello"
    }
    const handleSubmit=async ({problemDescription})=>{
        const data={
            user:{name,email,phoneNo,userId},
            slotId,
            problemDescription

        }
        axios.post(rootUrl+'patient/booking/'+id,data,{withCredentials:true})
            .then(({data})=>{
                window.open(data.data.url, '_blank');
            })
            .catch(()=>{})
    }
    console.log({visitingFee,user});
   
    return (
        <div className='my-[10%] mx-[5%]'>
            <div className="card mx-auto">
                <div className="card-body">
                 
                        <div className='text-center'>
                            <h2 className='font-bold text-xl'>Payment Checkout</h2>
                            <div className="flex flex-col w-full justify-between gap-4 lg:flex-row">
                                <div className="grid card flex-grow mt-[5%] h-auto rounded-box">
                                    <div className="text-left">
                                        {/* <h2 className='mb-[2%] font-bold'>Problem Description</h2>
                                        <textarea className="textarea textarea-success textarea-lg bg-transparent w-full" placeholder="Problem Description"></textarea> */}
                                      <CustomForm initialValues={initialValues} 
                                    validationSchema={problemDescriptionSchema}
                                    onSubmit={handleSubmit}
                                     >
                                      <CustomField 
                                      as="textarea"
                                      name="problemDescription" 
                                      labelText="Problem Description"
                                      className="textarea textarea-success textarea-lg bg-transparent w-full" 
                                      placeholder="Problem Description"                                      
                                      />
                             <input type='submit' className='mt-2 focus:outline-none btn bg-success glass text-white' value={'Proceed to Payment'}/>

                                      </CustomForm>
                                      

                                    </div>
                                </div>
                                <div className="grid card flex-grow mt-[5%] h-auto rounded-box">
                                    <div className="booking-card">
                                        <h2 className='mb-[2%] font-[900] text-center mb-4'>Booking Summary</h2>

                                        <div className='flex justify-between'>
                                            <span className='font-[600]'>Name</span>
                                             <div className='text-left italic w-[40%]'>{name}</div>
                                        </div>
                                        <div className='flex justify-between my-1'>
                                            <span className='font-[600]'>Email</span>
                                            <div className='text-left italic w-[40%]'>{email}</div>
                                        </div>
                                        <div className='flex justify-between my-1'>
                                            <span className='font-[600]'>Phone Number</span>
                                            <div className='text-left italic w-[40%]'>{phoneNo}</div>
                                        </div>
                                        <div className='flex justify-between my-1'>
                                            <span className='font-[600]'>Consulting Fee</span>
                                            <div className='text-left italic w-[40%] text-md font-[600]'>
                                                <span className='mr-[2px]'>{'\u09F3'}</span>
                                                {visitingFee}</div>
 
                                        </div>

                                      
                                    </div>
                                </div>

                            </div>
                        </div>
                       
              
                </div>
            </div>
        </div>
    );
};

export default PaymentCheckout;
