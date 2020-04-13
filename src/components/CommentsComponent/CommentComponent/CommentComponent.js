import React from 'react';

import classes from './CommentComponent.module.css'

const CommentComponent = (props) => {
    return (
        <div className={classes.Comment}>
            <span>{props.date}</span>
            <q>{props.text}</q>
            <span>{props.author}</span>
        </div>
    )
};

export default CommentComponent;