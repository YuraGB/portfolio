/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import './AboutMe.css'
import NavigationLink from "../../components/Navigation/NavigationLink/NavigationLink";
import Context from "../../Context/context";


/**
 * About Me
 *
 * @param {*} props
 * @return {*} component
 */
const AboutMeComponent = (props) => {
    const {is_directToAboutMe} = useContext(Context);

    return (
            <article className='content'>
                {
                    !is_directToAboutMe && <Redirect to='/' />
                }
                <h1 className='page_title'>About Me</h1>
                <NavigationLink link='/contactMe'>Leave me the message</NavigationLink>
            </article>
    )
};

export default AboutMeComponent;
