import React from 'react';

const ErrorComponent = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.error.message}</p>
            <span>Please, try later</span>
        </div>
    )
};

export default ErrorComponent;