/**
 * Button UI element
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import classes from './Buttom.module.css';

/**
 * Button
 *
 * @param {*} props
 * @return {*} component
 */
const Button = (props) => {
    return (
        <button
            disabled={props.disabled !== undefined ? !props.disabled : false}
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
};

Button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    clicked: PropTypes.func
};

export default Button;
