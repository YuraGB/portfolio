/**
 * Navigation link item
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

import classes from "./NavigationLink.module.css";

/**
 * NavigationLink
 *
 * @param {*} props
 * @returns {*} component
 */
const NavigationLink = (props) => {
    return (
        <NavLink
            to={props.link}
            exact
            className={[classes.NavigationLink, props.className ? props.className : ''].join(' ')}
            >{props.children}</NavLink>
    )
};

NavigationLink.propTypes = {
  link: PropTypes.string
};

export default NavigationLink;