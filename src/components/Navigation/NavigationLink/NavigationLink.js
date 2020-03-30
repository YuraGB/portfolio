/**
 * Navigation link item
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

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
            {...props}
            >{props.children}</NavLink>
    )
};

NavigationLink.propTypes = {
  link: PropTypes.string
};

export default NavigationLink;