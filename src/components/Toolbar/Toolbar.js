/**
 * Toolbar
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {CSSTransition} from 'react-transition-group'


import './Toolbar.css';
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";

/**
 * Toolbar
 *
 * @param {*} props
 * @return {*} component
 */
const Toolbar = (props) => {
    return (
        <CSSTransition
            in
            classNames='Toolbar'
            appear={true}
            timeout={1200}
        >
            <section className='Toolbar'>
                    <NavigationLink className='nav_link' link='/aboutMe'>
                        Me
                    </NavigationLink>
            </section>
        </CSSTransition>
    )
};

export default Toolbar;