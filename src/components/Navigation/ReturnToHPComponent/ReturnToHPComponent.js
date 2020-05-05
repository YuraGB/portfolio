/**
 * ReturnToHPComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';

import NavigationLink from "../NavigationLink/NavigationLink";
import classes from './ReturnToHPComponent.module.css';
import Context from "../../../Context/context";

/**
 * ReturnToHPComponent icon
 *
 * @param {*} props
 * @return {*} component
 */
const ReturnToHPComponent = ({ location }) => {
    const {promptHendler} = useContext(Context);

    let path = location.pathname;
    let component = (
        <NavigationLink
            onMouseMove={promptHendler({show: true, text: 'Home Page'})}
            onMouseLeave={promptHendler({show: false, text: ''})}
            className={classes.HomePageLink} link='/'>
            backToHP
        </NavigationLink>
    );

    if (path === '/') {
        component = <span className={classes.HomePageLink}>WeAreHP</span>
    }

    return component;
};

export default withRouter(ReturnToHPComponent);