import React from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import UsersListPage from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AadminsListPage'
export default [
    {
        ...App,
        routes: [

            {   ...HomePage,
                path:'/',
                exact: true
            },
            {
                ...AdminsListPage,
                path:'/admins',
            },
            {
                ...ContactPage,
                path:'/contact',

            },

            {
                ...UsersListPage,
                path:'/users',
            },
            {
                ...NotFoundPage,
            }
        ]
    }
];
