import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// import Component from './components/singleComponent';
// import { First, Second } from './components/multipleComponents';

// import SilvaFamily from './components/silvaFamily';

// import Family from './components/family';
// import Member from './components/member';

// import ClassComponent from './components/classComponent';

// import Field from './components/field';
// import fieldReducer from './utils/fieldReducer.js';

// const reducers = combineReducers({
//     field: fieldReducer,
// });

import counterReducer from './utils/counterReducers.js';
import Counter from './components/counter.jsx';

const reducers = combineReducers({
    counter: counterReducer,
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/* <Component value='Show!' />
        <First />
        <Second />
        <SilvaFamily />
        <Family lastName='Silva'>
            <Member name='Guilherme'/>
            <Member name='Rafael'/>
            <Member name='Manuela'/>
        </Family> */}
        {/* <ClassComponent label='Contador' initialValue={10} /> */}
        {/* <Field initialValue='Teste' /> */}
        <Counter />
    </Provider>, document.querySelector('#app')
);