import React from 'react';

export default (props) => (
    <div>
        <h1>Família {props.familyName}</h1>
        {props.children}
    </div>
);