import React from 'react';

const CommentComponent = (props) => {
    return (
        <div>
            <span>{props.date}</span>
            <q>{props.text}</q>
            <span>{props.author}</span>
        </div>
    )
};

export default CommentComponent;