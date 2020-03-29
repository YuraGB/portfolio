import React from 'react';
import {CSSTransition} from 'react-transition-group'

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <CSSTransition
            in
            classNames='toolbar'
            appear={true}
            timeout={500}
        >
            <section>
                toolbar
            </section>
        </CSSTransition>
    )
};

export default Toolbar;