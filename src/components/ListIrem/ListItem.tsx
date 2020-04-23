/**
 * List Item component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Button from "../UI/Button/Button";
import classes from './ListItem.module.css';
import {LinkItemInterface} from '../../store/sagas/system/types';

/**
 * ProfessionComponent
 *
 * @param props
 * @return {*}\
 */
const ListItem:React.FC<LinkItemInterface> = ({name, link}) => {
    return (
        <li className={classes.listItem}>
            {name}
            <Button btnType={link} />
        </li>
    )
};

export default ListItem;