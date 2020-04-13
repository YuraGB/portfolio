/**
 * Profession component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../UI/Button/Button";

/**
 * ProfessionComponent
 *
 * @param props
 * @return {*}\
 */
const ProfessionComponent = (props) => {
    return (
        <li>
            {props.name}
            <Button btnType='link-right' />
        </li>
    )
};

ProfessionComponent.propTypes = {
    name: PropTypes.string
};

export default ProfessionComponent;