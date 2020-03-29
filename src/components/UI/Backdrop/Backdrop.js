/**
 * Backdrop
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

/**
 * Backdrop
 *
 * @param props
 * @return {*} component
 */
const Backdrop = (props) => {
    return (
        props.show ?
            <div
                className={classes.Backdrop}
                onClick={props.clicked}
            ></div> :
            null
    )
};

Backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default Backdrop;