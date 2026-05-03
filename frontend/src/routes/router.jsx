import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ProtectedRoute from '../components/ProtectedRoute';
import ChangePassword from '../components/dashboard/user/ChangePassword';
import Dashboard from '../components/dashboard/admin/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import ForgotPswd from '../pages/ForgotPswd';
import ResetPaswd from '../pages/ResetPaswd';
import AuthForm from '../components/AuthForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Home />
                ),
            },

        ],
    },

    ////////// Dashboard 

    {
        path: 'dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>),
        children: [
            {
                index: true,
                element: (
                    <h1>Profile Page</h1>
                ),
            },
            // {
            //     path: 'account-settings',
            //     element: (
            //         <AccountSetting />
            //     ),
            // },
          
            {
                path: 'change-password',
                element: (
                    <ChangePassword />
                ),
            },

        ],
    },

    
    ////////// ADMIN 

    {
        path: 'admin',
        element: (
            <ProtectedRoute role="admin">
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: (
                    <Dashboard />
                ),
            },
            {
                path: "dashboard", element: (
                    <Dashboard />
                ),
            },
        ]
    },

    { path: '/auth', element: <AuthForm /> }
]);

export default router;