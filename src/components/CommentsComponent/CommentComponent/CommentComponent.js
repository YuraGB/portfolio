import React from 'react';

import classes from './CommentComponent.module.css'

const CommentComponent = (props) => {
    return (
        <div className={classes.Comment}>
            <q>{props.text}</q>
            <div className={classes.Author}>
                <span>{new Date(props.date).toLocaleDateString()}</span>
                <span >{props.author}</span>
            </div>
        </div>
    )
};

export default CommentComponent;