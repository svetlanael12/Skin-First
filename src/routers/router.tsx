import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import React from 'react';
import { ClientRouters } from './clientRouters';
import { StartScreen } from '../pages/start-screen/StartScreen';

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
        path: '*',
        element: <div>NotFound</div>,
    },
]);
