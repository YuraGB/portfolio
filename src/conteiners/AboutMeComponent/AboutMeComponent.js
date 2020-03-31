/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import NavigationLink from "../../components/Navigation/NavigationLink/NavigationLink";

/**
 * About Me
 *
 * @param {*} props
 * @return {*} component
 */
const AboutMeComponent = (props) => {
    return (
        <article>
            <h1 className='page_title'>About Me</h1>
            <NavigationLink link='/contactMe'>Leave me the message</NavigationLink>
        </article>
    )
};

export default AboutMeComponent;
