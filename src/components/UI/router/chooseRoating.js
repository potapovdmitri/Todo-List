import React from 'react';
import Navbar from '../navbar/Navbar';
import ErrorPage from '../../../pages/ErrorPage';
import Login from '../../../pages/Login';
import { privateRoutes, publicRoutes } from './routes';

const chooseRoating = (isAuth) => {
    
    if(isAuth) {
       return  [{
               path:"/",
               element: <Navbar/>,
               errorElement: <ErrorPage/>,
               children: privateRoutes
           }]
    } 
    else {
        return [{
                path: "/",
                element: <Login/>,
                errorElement: <ErrorPage/>,
                children: publicRoutes
            }]
     }
};

export default chooseRoating;