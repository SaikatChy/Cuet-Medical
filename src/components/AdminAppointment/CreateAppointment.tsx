import React,{useState,useEffect} from 'react';
import Slot from '../Slot/Slot';
import axios from 'axios'
import {rootUrl} from '../../utils/rootUrl'
import {useNavigate} from 'react-router-dom'
import Slots from '../Slot/Slots';
const CreateAppointment = () => {
    const [slots,setSlots]=useState([])
    const [loading,setLoading]=useState(true);
    const [reload,setReload]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        setLoading(true)
      axios.get(rootUrl+'doctor/slots',{withCredentials:true})
           .then(({data})=>data.status ? 
           setSlots(data.data): setSlots([]))  
           .catch(()=>setSlots([]))
    setLoading(false)
    },[reload])
    const createAppointment=async (id)=>{
await axios.post(rootUrl+'doctor/appointment',{slotId:id},{withCredentials:true})
     .then(({data})=>{
            if(data.status){
                 setReload(true)

            }
     })
    }
    return (
        <div>
            <p className='text-center font-[700] text-xl'>Slots Available today</p>
          <Slots 
          slots={slots} 
          handlingFunction={createAppointment} 
          buttonType={0}/>
        </div>
    );
};

export default CreateAppointment;