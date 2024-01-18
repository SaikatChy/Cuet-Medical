import About from '../pages/About/About';
import Admin from '../pages/Admin/Admin';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Contact from '../components/Contact';
import PatientQueue from '../components/PatientQueue/PatientQueue';
import ErrorPage from '../components/ErrorPage/ErrorPage'
import AdminDashboard from '../components/AdminDashboard';
import AdminScheduleTimings from '../components/AdminScheduleTimings/AdminScheduleTimings';
import AdminProfileSettings from '../components/AdminProfileSettings/AdminProfileSettings';
import AdminChangePassword from '../components/AdminChangePassword/AdminChangePassword';
import Schedule from '../pages/Schedule/Schedule';
import UserProfile from '../components/UserProfile/UserProfile';
import AdminAppointment from '../components/AdminAppointment/AdminAppointment';
import CreateAppointment from '../components/AdminAppointment/CreateAppointment';
import DeleteAppointment from '../components/AdminAppointment/DeleteAppointment';
import StartAppointment from '../components/AdminAppointment/StartAppointment';
import CloseAppointment from '../components/AdminAppointment/CloseAppointment';
import Appointments from '../pages/Appointment/Appointments';

import PatientProfile from '../components/PatientProfile/PatientProfile';
import UserProfileSettings from '../components/UserProfileSettings'
import PaymentCheckout from '../components/PaymentCheckout';
const mainRouter = [
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/",
                element: <Admin></Admin>,
                children: [
                    {
                        path: "/admin",
                        element: <AdminDashboard></AdminDashboard>
                    },
                    {
                        path: "admin/dashboard",
                        element: <AdminDashboard></AdminDashboard>
                    },
                    {
                        path: "admin/admin-schedule-timings",
                        element: <AdminScheduleTimings></AdminScheduleTimings>
                    },
                    {
                        path: "admin/admin-appointment",
                        element: <AdminAppointment />,
                        children: [
                            {
                                path: '',
                                element: <CreateAppointment />
                            },
                            {
                                path: 'create',
                                element: <CreateAppointment />
                            },
                            {
                                path: 'delete',
                                element: <DeleteAppointment />
                            },
                            {
                                path: 'start',
                                element: <StartAppointment />
                            },
                            {
                                path: 'close',
                                element: <CloseAppointment />
                            },
                        ]
                    },
                    {
                        path: "admin/admin-profile-settings",
                        element: <AdminProfileSettings></AdminProfileSettings>
                    },
                    {
                        path: "admin/admin-change-password",
                        element: <AdminChangePassword></AdminChangePassword>
                    }
                ]
            },
            {
                path: "/appointment",
                element: <Appointments/>
            },
            {
                path: "/checkout/:id",
                element: <PaymentCheckout/>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/schedule",
                element: <Schedule></Schedule>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/patient-profile",
                element: <PatientProfile></PatientProfile>
            },
            {
                path: "/user-profile-settings",
                element: <UserProfileSettings></UserProfileSettings>
            },
            {
                path: "/patient-queue",
                element: <PatientQueue></PatientQueue>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
];


export default mainRouter;