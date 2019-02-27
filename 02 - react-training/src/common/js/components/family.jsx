import React from 'react';
import ReactUtils from './../utils/reactUtils'

export default (props) => (
    <div>
        <h1>Família {props.lastName}</h1>
        {ReactUtils.childrenWithProps(props.children, props)}
    </div>
);