/**
 * List Item component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from "../UI/Button/Button";
import classes from './ListItem.module.css';

/**
 * ProfessionComponent
 *
 * @param props
 * @return {*}\
 */
const ListItem = (props) => {
    return (
        <li className={classes.listItem}>
            {props.name}
            <Button btnType='link-right' />
        </li>
    )
};

ListItem.propTypes = {
    name: PropTypes.string
};

export default ListItem;