import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { rootUrl } from '../../utils/rootUrl';
import Slots from '../Slot/Slots';

const DeleteAppointment = () => {
    const [slots,setSlots]=useState([]);
    const [reload,setReload]=useState(false)
    useEffect(()=>{
        axios.get(
            rootUrl+'doctor/appointment/deletable-appointments',
            {withCredentials:true})
           .then(({data})=>data.status && setSlots(data.data))
           .catch(()=>setSlots([]))
    
    },[reload])
    const handleDelete=(id:string)=>{
        axios.delete(rootUrl+'doctor/appointment/'+id,{withCredentials:true})
         .then(({data})=> data.status && setReload(true))
    }
    return (
        <div>
             <Slots
             slots={slots}
             handlingFunction={handleDelete}
             buttonType={3}
             />
        </div>
    );
};

export default DeleteAppointment;