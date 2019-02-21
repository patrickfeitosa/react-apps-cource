import React from 'react';
import ReactDOM from 'react-dom';

// import Component from './components/singleComponent';
// import { First, Second } from './components/multipleComponents';

// import SilvaFamily from './components/silvaFamily';

// import Family from './components/family';
// import Member from './components/member';

// import ClassComponent from './components/classComponent';

import Field from './components/field';

ReactDOM.render(
    <div>
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
        <Field initialValue='Teste' />
    </div>, document.querySelector('#app')
);