import React from 'react';
import AdminNav from '../../components/AdminNav/AdminNav'
import { Outlet } from 'react-router';
const Admin = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center pt-9 font-bold'>Admin Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
                <div className="col-span-1">
                    <AdminNav></AdminNav>
                </div>
                <div className="p-4 border-2 col-span-2 rounded-2xl">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Admin;