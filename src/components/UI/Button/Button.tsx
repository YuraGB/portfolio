/**
 * Button UI element
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './Buttom.module.css';
import {IUIButtonInterface} from '../../../system/types';

/**
 * Button
 *
 * @param {*} props
 * @return {*} component
 */
const Button:React.FC<IUIButtonInterface> = (
    {
        disabled,
        btnType = '',
        clicked,
        children
    }) => {
    return (
        <button
            disabled={disabled !== undefined ? !disabled : false}
            className={[classes.Button, classes[btnType]].join(' ')}
            onClick={clicked}
        >
            {children}
        </button>
    )
};

export default Button;
