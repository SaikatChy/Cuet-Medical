import React ,{useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { BsClockFill } from "react-icons/bs";
import { MdManageAccounts } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import UserContext from '../../Contexts/UserContext';
import { rootUrl } from '../../utils/rootUrl';
import axios from 'axios'
const AdminNav = () => {
    const {setUser}=useContext(UserContext)
    const handleLogout=async()=>{
        await axios.post(rootUrl+'user/logout',{},{withCredentials:true})
           .then(()=>{
              setUser(null)
           })
    }
    return (
        <div className="bg-white border-2 row-span-3 rounded-2xl divide-y">
            {/* navigation */}
            <div className='text-center mt-8'>
                <Link to='admin/admin-profile-settings' className="avatar">
                    <div className="w-24 rounded-full ring-4 ring-success ring-offset ring-offset-2">
                        <img src="https://placekitten.com/g/200/202" />
                    </div>
                </Link>
                <Link to="admin/admin-profile-settings" style={{textDecoration: "none", color:"black"}}>
                    <h2 className='text-xl font-semibold'>Dr. Meow Cat</h2>
                    <small className='text-muted'>MBBS, MCM, MD - (Medicine Specialist)</small>
                </Link>
            </div>
            <div className="flex flex-col divide-y m-5 mt-11">

                <NavLink
                    to="admin/dashboard"
                    //activeClassName="active"
                    className={({ isActive }) => (isActive ? "p-3 active flex items-center " : " items-center flex p-3 text-slate-400")}
                >
                    <RxDashboard className='me-3'></RxDashboard> Dashboard
                </NavLink>

                <NavLink
                    to="admin/admin-schedule-timings"
                    className={({ isActive }) => (isActive ? "p-3  active flex items-center" : "items-center flex p-3 text-slate-400")}
                >
                    <BsClockFill className='me-3'></BsClockFill> Schedule Timings
                </NavLink>
                <NavLink
                    to="admin/admin-appointment"
                    className={({ isActive }) => (isActive ? "p-3  active flex items-center" : "items-center flex p-3 text-slate-400")}
                >
                    <FaCalendar className='me-3'></FaCalendar>Appointment
                </NavLink>

                <NavLink
                    to="admin/admin-profile-settings"
                    className={({ isActive }) => (isActive ? "p-3 active flex items-center" : "items-center flex p-3 text-slate-400")}
                >
                    <MdManageAccounts className='me-3'></MdManageAccounts> Profile Settings
                </NavLink>

                <NavLink
                    to="admin/admin-change-password"
                    className={({ isActive }) => (isActive ? "p-3 active flex items-center" : "items-center flex p-3 text-slate-400")}
                >
                    <RiLockPasswordFill className='me-3'></RiLockPasswordFill> Change Password
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? "p-3 active flex items-center" : "items-center flex p-3 text-slate-400")}
                >
                    <FaSignOutAlt className='me-3'></FaSignOutAlt> <span onClick={handleLogout}>Logout</span>
                </NavLink>

            </div>
        </div>
    );
};

export default AdminNav;