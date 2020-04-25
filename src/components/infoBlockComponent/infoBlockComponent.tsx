/**
 * info block
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './infoBlock.module.css';
import {InfoBlockComponentInterface} from '../../store/sagas/system/types'

/**
 * InfoBlockComponent
 *
 * @param props
 * @return {*} Component
 */
const InfoBlockComponent:React.FC<InfoBlockComponentInterface> = ({title, children}) => {
    return (
        <section className={classes.Block} style={{background: 'purple'}}>
            <h3>{title}</h3>
            {children}
        </section>
    )
};

export default InfoBlockComponent;