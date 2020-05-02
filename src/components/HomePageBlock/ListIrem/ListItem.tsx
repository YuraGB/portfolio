/**
 * List Item component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Button from "../../UI/Button/Button";
import classes from './ListItem.module.css';
import {ILinkItemInterface} from '../../../system/types';

/**
 * ProfessionComponent
 *
 * @param props
 * @return {*}\
 */
const ListItem:React.FC<ILinkItemInterface> = ({name, link, onHover}) => {
    return (
        <li
            className={classes.listItem}
            onMouseEnter={()=>onHover ? onHover(name): null}
        >
            {name}
            <Button btnType={link} />
        </li>
    )
};

export default ListItem;