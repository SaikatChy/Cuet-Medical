import React,{useState} from 'react';
import {Outlet,Link,useLocation, NavLink} from 'react-router-dom'
const AdminAppointment = () => {
    const location=useLocation().pathname.split('/')[3]||'create'
    const [currentRoute,setCurrentRoute]=useState(location);
    console.log(location);
    const activeClass="tab tab-lifted tab-active w-[25%]"
    const inactiveClass="tab tab-lifted  w-[25%]"
    return (
         <div>
        <div className="tabs tabs-boxed w-[100%] mb-5">
         <NavLink to='/admin/admin-appointment/create'
         onClick={()=>setCurrentRoute('create')}
         activeClass
          className={currentRoute==="create" ? activeClass:inactiveClass}>Create Appointment</NavLink> 
         <NavLink to='/admin/admin-appointment/start' 
         onClick={()=>setCurrentRoute('start')}
         className={currentRoute==="start" ? activeClass:inactiveClass}>
          Start Appointment</NavLink> 
         <NavLink to='/admin/admin-appointment/close' 
         onClick={()=>setCurrentRoute('close')}
         className={currentRoute==="close" ? activeClass:inactiveClass}>
          Close Appointment</NavLink> 
       
         <NavLink to='/admin/admin-appointment/delete' 
         onClick={()=>setCurrentRoute('delete')}
         className={currentRoute==="delete" ? activeClass:inactiveClass}>Delete Appointment</NavLink>
       </div> 
       <Outlet/>
         </div>
    );
};

export default AdminAppointment;