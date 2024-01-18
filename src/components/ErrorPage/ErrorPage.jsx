import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="error-page">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="error-msg">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;