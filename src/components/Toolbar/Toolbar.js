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
import profile from '../../assets/images/icons/profile.svg';

/**
 * Toolbar
 *
 * @param {*} props
 * @return {*} component
 */
const Toolbar = () => {
    const {directToAboutMe, promptHendler} = useContext(Context);

    return (
        <CSSTransition
            in
            classNames='Toolbar'
            appear={true}
            timeout={1200}
        >
            <section
                className='Toolbar'
                onClick={directToAboutMe}
                onMouseMove={promptHendler({show: true, text: 'visit My profile page'})}
                onMouseLeave={promptHendler({show: false, text: ''})}
            >
                    <NavigationLink className='nav_link' link='/aboutMe'>
                        <img src={profile} alt=""/>
                    </NavigationLink>
            </section>
        </CSSTransition>
    )
};

export default Toolbar;