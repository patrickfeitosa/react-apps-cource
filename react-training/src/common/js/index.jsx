import React from 'react';
import ReactDOM from 'react-dom';

// import Component from './components/singleComponent';
// import { First, Second } from './components/multipleComponents';

// import SilvaFamily from './components/silvaFamily';

// import Family from './components/family';
// import Member from './components/member';

import ClassComponent from './components/classComponent';

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
        <ClassComponent label='Contador' initialValue={10} />
    </div>, document.querySelector('#app')
);