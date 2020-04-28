/**
 * Comment
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './CommentComponent.module.css'
import {CommentInterface} from '../../../store/sagas/system/types';

/**
 * CommentComponent
 *
 * @param date
 * @param authorsComment
 * @param authorsName
 * @return {*} Component
 */
const CommentComponent:React.FC<CommentInterface> = (
    {
        date,
        authorsComment,
        authorsName
    }) => {
    return (
        <div className={classes.Comment}>
            <span>{date}</span>
            <q>{authorsComment}</q>
            <span>{authorsName}</span>
        </div>
    )
};

export default CommentComponent;