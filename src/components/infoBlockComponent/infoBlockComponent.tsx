/**
 * info block
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './infoBlock.module.css';
import {IInfoBlockComponentInterface} from '../../system/types'

/**
 * InfoBlockComponent
 *
 * @param props
 * @return {*} Component
 */
const InfoBlockComponent:React.FC<IInfoBlockComponentInterface> = ({title, children}) => {
    return (
        <section className={classes.Block}>
            <h3>{title}</h3>
            {children}
        </section>
    )
};

export default InfoBlockComponent;