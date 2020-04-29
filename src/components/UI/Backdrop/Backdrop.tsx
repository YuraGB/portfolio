/**
 * Backdrop
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './Backdrop.module.css';
import {IBackdropInterface} from '../../../system/types';

/**
 * Backdrop
 *
 * @param props
 * @return {*} component
 */
const Backdrop:React.FC<IBackdropInterface> = ({clicked, show}) => {
    return (
        show ?
            <div
                className={classes.Backdrop}
                onClick={clicked}
            ></div> :
            null
    )
};

export default Backdrop;