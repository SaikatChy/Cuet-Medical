import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { rootUrl } from '../../utils/rootUrl';
import Slots from '../Slot/Slots';

const StartAppointment = () => {
    const [slots,setSlots]=useState([]);
    const [reload,setReload]=useState(false)
    useEffect(()=>{
        axios.get(rootUrl+'doctor/appointment/startable-appointments',{withCredentials:true})
          .then(({data})=>{
             data.status && setSlots(data.data)
          }).catch(()=>setSlots([]))
    },[reload])
    const startAppointment=async (id)=>{
await axios.patch(rootUrl+'doctor/appointment/start-appointment/'+id,{},{withCredentials:true})
      .then(({data})=>{
        data.status && setReload(true)
      }).catch(()=>{})
    }
    return (
        <div>
             <Slots
             slots={slots}
             handlingFunction={startAppointment}
             buttonType={1}
             />
        </div>
    );
};

export default StartAppointment;