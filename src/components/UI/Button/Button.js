/**
 * Button UI element
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

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

export default Button;
