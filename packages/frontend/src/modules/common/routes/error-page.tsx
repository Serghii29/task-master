import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.hasOwnProperty('message') ? error.message : 'Yes'}</i>
        </p>
      </div>
    );
  }
  return <h1>Don&apost know the error type</h1>;
};

export default ErrorPage;
