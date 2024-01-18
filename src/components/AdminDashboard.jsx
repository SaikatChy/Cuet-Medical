import React from 'react';
import { MdVerifiedUser } from "react-icons/md";
import { Link } from 'react-router-dom';
// import "./PatientQueue.css"
const AdminDashboard = () => {
    const appointments = [
        {
            serialNo: 1,
            name: 'John Doe',
            gender: 'Male',
            slotTime: '10:00 AM - 10:10 AM',
            status: 'Done',
            image: 'https://placekitten.com/g/200/200', // Add image URL here
        },
        {
            serialNo: 2,
            name: 'Jane Smith',
            gender: 'Female',
            slotTime: '10:15 AM - 10:25 AM',
            status: 'Waiting',
            image: 'https://placekitten.com/g/200/201', // Add image URL here
        },
        {
            serialNo: 3,
            name: 'Bob Johnson',
            gender: 'Male',
            slotTime: '10:30 AM - 10:40 AM',
            status: 'Waiting',
            image: 'https://placekitten.com/g/200/202', // Add image URL here
        },
        {
            serialNo: 4,
            name: 'Alice Brown',
            gender: 'Female',
            slotTime: '10:45 AM - 10:55 AM',
            status: 'Done',
            image: 'https://placekitten.com/g/200/203', // Add image URL here
        },
        {
            serialNo: 5,
            name: 'David Lee',
            gender: 'Male',
            slotTime: '11:00 AM - 11:10 AM',
            status: 'Done',
            image: 'https://placekitten.com/g/200/204', // Add image URL here
        },
        {
            serialNo: 6,
            name: 'Mary Taylor',
            gender: 'Female',
            slotTime: '11:15 AM - 11:25 AM',
            status: 'Waiting',
            image: 'https://placekitten.com/g/200/205', // Add image URL here
        },
        {
            serialNo: 7,
            name: 'Sam Wilson',
            gender: 'Male',
            slotTime: '11:30 AM - 11:40 AM',
            status: 'Waiting',
            image: 'https://placekitten.com/g/200/206', // Add image URL here
        },
        {
            serialNo: 8,
            name: 'Emily Davis',
            gender: 'Female',
            slotTime: '11:45 AM - 11:55 AM',
            status: 'Done',
            image: 'https://placekitten.com/g/200/207', // Add image URL here
        },
        {
            serialNo: 9,
            name: 'Michael White',
            gender: 'Male',
            slotTime: '12:00 PM - 12:10 PM',
            status: 'Done',
            image: 'https://placekitten.com/g/200/208', // Add image URL here
        },
        {
            serialNo: 10,
            name: 'Olivia Johnson',
            gender: 'Female',
            slotTime: '12:15 PM - 12:25 PM',
            status: 'Waiting',
            image: 'https://placekitten.com/g/200/209', // Add image URL here
        },
    ];
    // Create a new Date object
    // Create a new Date object for today's date
    const today = new Date();

    // Define the months in an array for easier month name retrieval
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the day, month, and year
    const day = today.getDate();
    const monthIndex = today.getMonth(); // This returns a zero-based index
    const year = today.getFullYear();

    // Get the month name from the months array
    const monthName = months[monthIndex];

    // Format the date as "DD, Month YYYY"
    const formattedDate = `${day < 10 ? '0' : ''}${day}, ${monthName} ${year}`;
    return (
        <div className=''>
            <div>
                {/* dashboard-right-part */}
                <div className=''>
                    <div className="card ">
                        <div className="card-body">
                            <div className="flex flex-row justify-between">
                                <div className="col-md-12 col-lg-4">
                                    <div className="">
                                        <div className="text-center">
                                            <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
                                        </div>
                                        <div className="dash-widget-info">
                                            <h6>Total Patient</h6>
                                            <h3>35 <span className='text-xs'>(50)</span></h3>
                                            <p className="text-muted">{formattedDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-4">
                                    <div className="">
                                        <div className="text-center">
                                            <div className="radial-progress text-success" style={{ "--value": 30 }}>30%</div>
                                        </div>
                                        <div className=" dash-widget-info">
                                            <h6>Done</h6>
                                            <h3>10 <span className='text-xs'>(35)</span></h3>
                                            <p className="text-muted">{formattedDate}</p>
                                        </div>
                                    </div>
                                </div><div className="col-md-12 col-lg-4">
                                    <div className="">
                                        <div className="text-center">
                                            <div className="radial-progress text-info" style={{ "--value": 70 }}>70%</div>
                                        </div>
                                        <div className="dash-widget-info">
                                            <h6>Waiting</h6>
                                            <h3>25 <span className='text-xs'>(35)</span></h3>
                                            <p className="text-muted">{formattedDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-slate-700 text-[1.05rem]">
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Appointment Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                appointments.map(appointment => <>
                                    <tr className=''>
                                        <th>{appointment.serialNo}</th>
                                        <td className='flex items-center p-3'><img className="w-[40px] h-[40px] rounded-full" src={appointment.image} alt="" /><span className='p-2'>
                                            <Link to={`/user-profile`} style={{ textDecoration: "none", color: "black" }} className='hover:text-success'>{appointment.name}</Link>
                                        </span><MdVerifiedUser className='text-success text-lg'></MdVerifiedUser></td>
                                        <td>{appointment.gender === "Male" ? (
                                            <div className="text-[#f0f8ff] badge badge-outline badge-accent center p-3">
                                                {appointment.gender}
                                            </div>
                                        ) : (
                                            <div className="text-[#f0f8ff] badge badge-outline badge-warning center p-3">
                                                {appointment.gender}
                                            </div>
                                        )}</td>
                                        <td>
                                            <div className='badge badge-outline p-3'>{appointment.slotTime}
                                            </div>
                                        </td>
                                        <td className=''>
                                            {appointment.status === "Done" ? (
                                                <div className="relative inline-flex">
                                                    <select className="select select-bordered bg-success text-white select-xs text-xs max-w-xs">
                                                        <option className="text-xs">Done</option>
                                                        <option className="text-xs">Now</option>
                                                        <option className="text-xs">Done</option>
                                                    </select>
                                                </div>
                                            ) : (
                                                <div className="relative inline-flex">
                                                    <select className="select select-bordered bg-info text-white select-xs text-xs max-w-xs">
                                                        <option className="text-xs">Waiting</option>
                                                        <option className="text-xs">Now</option>
                                                        <option className="text-xs">Done</option>
                                                    </select>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;