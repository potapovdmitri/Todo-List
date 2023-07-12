import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import chooseRoating from '../router/chooseRoating';

const Wrapper = () => {
    const {isAuth} = useContext(AuthContext)
    const routes = chooseRoating(isAuth);
    const MyRouter = createBrowserRouter(routes)
    return (
        <>
        <RouterProvider router={MyRouter}/>
        </>
    );
};

export default Wrapper;