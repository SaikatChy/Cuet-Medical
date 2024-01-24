import React, { useState } from 'react';
import { MdVerifiedUser } from "react-icons/md";
import { Link } from 'react-router-dom';


import './AdminDashboard.css'; // Import your CSS file for styling

const AdminDashboard = () => {
    const [creatingDoctor, setCreatingDoctor] = useState(false);
    const [newDoctor, setNewDoctor] = useState({
        doctorId: '',
        name: '',
        email: '',
        password: '',
        designation: '',
        image: '',
    });

    const toggleCreateDoctor = () => {
        setCreatingDoctor(!creatingDoctor);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDoctor((prevDoctor) => ({
            ...prevDoctor,
            [name]: value,
        }));
    };

    const handleCreateDoctor = () => {
        // Add logic to handle the creation of a new doctor profile
        console.log('Creating doctor:', newDoctor);
        // Reset the form and hide the create doctor section
        setNewDoctor({
            doctorId: '',
            name: '',
            email: '',
            password: '',
            designation: '',
            image: '',
        });
        setCreatingDoctor(false);
    };

    

    return (
        <div className='admin-dashboard-container'>
            <div className='admin-dashboard'>
            <div className='flex items-center justify-center mb-8'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={toggleCreateDoctor}>
                        Create Doctor
                    </button>
                </div>

                {creatingDoctor && (
                    <div className='create-doctor-section'>
                        <h3>Create Doctor Profile</h3>
                        <div className='form-group w-65%'>
                            <label htmlFor="doctorId">Doctor ID:</label>
                            <input
                                type="text"
                                id="doctorId"
                                name="doctorId"
                                value={newDoctor.doctorId}
                                className="bg-slate-300 input input-bordered w-full"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newDoctor.name}
                                className="bg-slate-300 input input-bordered w-full"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={newDoctor.email}
                                className="bg-slate-300 input input-bordered w-full"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={newDoctor.password}
                                className="bg-slate-300 input input-bordered w-full"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="designation">Designation:</label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={newDoctor.designation}
                                className="bg-slate-300 input input-bordered w-full"
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        
                        <div className="form-control mt-6">
                            <button
                                className="btn bg-success glass text-white"
                                type="submit"
                            >
                                 Create
                             </button>
                        </div>
                    </div>
                )}

                
            </div>
        </div>
    );
};

export default AdminDashboard;
