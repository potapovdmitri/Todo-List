import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
        <h1>Oops error has appeared</h1>
        <p>{error.statusText ?? error.message}</p>
        </>
    )
};

export default ErrorPage;