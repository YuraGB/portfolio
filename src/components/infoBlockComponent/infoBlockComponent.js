/**
 * info block
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import classes from './infoBlock.module.css';

/**
 * InfoBlockComponent
 *
 * @param props
 * @return {*} Component
 */
const InfoBlockComponent = (props) => {
    return (
        <section className={classes.Block} style={{background: 'purple'}}>
            <h3>{props.title}</h3>
            {props.children}
        </section>
    )
};

InfoBlockComponent.propTypes = {
    title: PropTypes.string
};

export default InfoBlockComponent;