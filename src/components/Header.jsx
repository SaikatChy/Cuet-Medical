import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const Header = () => {
    const { user } = useContext(UserContext)
    console.log(user);
    return (
        <div className='mt-16'>
            <div className="navbar shadow-xl flex justify-between fixed top-0 w-full bg-[#f0f8ff] z-10">
                <div className="navbar-start">
                    <NavLink to='/home' className="btn btn-ghost normal-case text-xl">MeetDoctor</NavLink>
                </div>
                <div className="navbar-center ">
                    <ul className="menu menu-horizontal flex items-center align-middle" >
                        <li className='mx-2'><NavLink to="/home">Home</NavLink></li>
                        <li className='mx-2'><NavLink to="/schedule">Schedule</NavLink></li>
                        <li className='mx-2'><NavLink to="/appointment">Appointment</NavLink></li>
                        <li className='mx-2'><NavLink to="/about">About</NavLink></li>
                        {user === null && <li className='mx-2'><NavLink to="/login">Login</NavLink></li>}
                        {user === null && <li className='mx-2'><NavLink to="/signup">Signup</NavLink></li>}
                        {user !== null && <li className='mx-2'><NavLink to="/logout">Logout</NavLink></li>}

                        <li className='mx-2'><NavLink to="/admin">Admin</NavLink></li>
                        {<li className="mx-2 dropdown dropdown-end">
                            <label tabIndex={0} className="avatar btn-ghost online btn btn-circle">
                                <div className="w-10 rounded-full">
                                    <img src="https://placekitten.com/g/200/202" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li>
                                    <Link to='patient-profile' className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to='/user-profile-settings'>Settings</Link></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Header;