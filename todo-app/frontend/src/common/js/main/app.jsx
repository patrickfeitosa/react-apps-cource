import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Todo from '../todo/todo.jsx';
import About from '../about/about.jsx';

export default (props) => (
    <div className='container'>
        <Todo />
        <About />
    </div>
);
