import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components/singleComponent';
import { First, Second } from './components/multipleComponents';

ReactDOM.render(
    <div>
        <Component value='Show!' />
        <First />
        <Second />
    </div>, document.querySelector('#app')
);