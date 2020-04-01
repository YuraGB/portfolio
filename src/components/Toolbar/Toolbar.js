/**
 * Toolbar
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group'


import './Toolbar.css';
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import Context from "../../Context/context";

/**
 * Toolbar
 *
 * @param {*} props
 * @return {*} component
 */
const Toolbar = (props) => {
    const {directToAboutMe} = useContext(Context);

    return (
        <CSSTransition
            in
            classNames='Toolbar'
            appear={true}
            timeout={1200}
        >
            <section className='Toolbar' onClick={directToAboutMe}>
                    <NavigationLink className='nav_link' link='/aboutMe'>
                        Me
                    </NavigationLink>
            </section>
        </CSSTransition>
    )
};

export default Toolbar;