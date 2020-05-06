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
const InfoBlockComponent = ({title, children, active, onLeave}) => {
    return (
        <section
            onMouseLeave={onLeave}
            className={[classes.Block, active ? classes.active : ''].join(' ')}
        >
            <div className={['description' ,classes.ContentWrapper, active ? classes.activeBlock: ''].join((' '))}>
                <h3>{title}</h3>
                {children}
            </div>
        </section>
    )
};

InfoBlockComponent.propTypes = {
    title: PropTypes.string
};

export default InfoBlockComponent;