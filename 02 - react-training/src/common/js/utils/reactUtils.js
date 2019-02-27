import React from 'react';

const childrenWithProps = (children, props) => (
    React.Children.map(children,
        child => React.cloneElement(child, { ...props }))
);

export default {
    childrenWithProps
};