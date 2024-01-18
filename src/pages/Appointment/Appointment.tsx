import React, { useContext, useEffect, useState } from 'react';
import convertToAMPMFormat from '../../utils/util.time'
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
import UserContext from '../../Contexts/UserContext'
import { useNavigate } from 'react-router-dom';
const Appointment = ({startTime,endTime,bookingStartTime,bookingEndTime,visitingFee,remainingSlots,_id,slotId}) => {
      const {user}=useContext<any>(UserContext)
      const [booked,setBooked]=useState(false);
      const [loading,setLoading]=useState(false)
      const [message,setMessage]=useState('')
      const [remaining,setRemaining]=useState(remainingSlots)
      const navigate=useNavigate()
      useEffect(()=>{
        axios.post(rootUrl+'patient/check-booking/'+_id,
        {
          userId:user.userId
        },
        {withCredentials:true})
          .then(({data})=>data.status && setBooked(data.data))
          .catch(()=>setBooked(false))
      },[])
     
     startTime=convertToAMPMFormat(startTime)
     endTime=convertToAMPMFormat(endTime)
     bookingStartTime=convertToAMPMFormat(bookingStartTime)
     bookingEndTime=convertToAMPMFormat(bookingEndTime)
    return (
        <div className="my-2  card w-[350px] mx-8">
            <div className='text-xl font-[900] absolute top-[-12px] right-[-12px] btn btn-info rounded-full'>{'\u09F3'} {visitingFee} </div>
            <p className='font-[700] text-lg'>Service Time</p>
            <p className='text-md text-[green]  italic'>{startTime} - {endTime}</p>
            <p className='font-[700] text-lg'>Booking Time</p>
            <p className='text-md italic text-[green]'>{bookingStartTime} - {bookingEndTime}</p>
            <p className='text-xl text-[blue] my-1 italic'>Remaining Slots: {remaining}</p>
           {
            booked ?
        
                <button disabled className='btn btn-info my-3'>Booked</button>
             
              :  
              <button className='btn btn-info my-3'
               disabled={!remainingSlots}
               onClick={()=>navigate('/checkout/'+_id,{state:{visitingFee,slotId}})}
              >Book Appointment {loading && <span className="loading loading-ring loading-xs"></span>}
              </button>
           }
           <p className='text-[red] text-xs text-center font-[600]'>{message}</p>
        </div>
    );
};

export default Appointment;