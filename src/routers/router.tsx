import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import React from 'react';
import { ClientRouters } from './clientRouters';
import { StartScreen } from '../pages/start-screen/StartScreen';
import { LoginPage } from '../pages/authentication/LoginPage';
import { RegistrationPage } from '../pages/authentication/RegistrationPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={ClientRouters.startScreen} replace />,
    },
    {
        path: ClientRouters.startScreen,
        element: <StartScreen />,
    },
    {
        path: ClientRouters.login,
        element: <LoginPage />,
    },
    {
        path: ClientRouters.registration,
        element: <RegistrationPage />,
    },
    {
        path: '*',
        element: <div>NotFound</div>,
    },
]);
