import React from 'react';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import App from './App';
export default [
    {
        ...App,
        routes: [

            {   ...HomePage,
                path:'/',
                exact: true
            },
            {
                ...AboutUsPage,
                path:'/about',

            }
        ]
    }
];
