/**
 * Navigation link item
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./NavigationLink.module.css";
import {INaveLinkInterface} from "../../../store/sagas/system/types";

/**
 * NavigationLink
 *
 * @param {*} props
 * @returns {*} component
 */
const NavigationLink:React.FC<INaveLinkInterface> = ({link, className, children}) => {
    return (
        <NavLink
            to={link}
            exact
            className={[classes.NavigationLink, className ? className : ''].join(' ')}
            activeClassName={classes.active}
            >{children}</NavLink>
    )
};

export default NavigationLink;