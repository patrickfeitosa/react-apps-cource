import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';

import Todo from '../todo/todo.jsx';
import About from '../about/about.jsx';

import Menu from '../template/menu.jsx';

export default (props) => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
);
