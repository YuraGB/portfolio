/**
 * ReturnToHPComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import NavigationLink from "../NavigationLink/NavigationLink";
import classes from './ReturnToHPComponent.module.css';
import {IReturnHPInterface} from "../../../system/types";

/**
 * ReturnToHPComponent icon
 *
 * @param {*} props
 * @return {*} component
 */
const ReturnToHPComponent:React.FC <IReturnHPInterface & RouteComponentProps> = ({location }) => {
    let path = location.pathname;
    let component = (
        <NavigationLink className={classes.HomePageLink} link='/'>
            backToHP
        </NavigationLink>
    );

    if (path === '/') {
        component = <span className={classes.HomePageLink}>WeAreHP</span>
    }

    return component;
};

export default withRouter(ReturnToHPComponent);