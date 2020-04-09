import React from 'react';

import Comment from "./CommentComponent/CommentComponent";
import Spinner from "../Spinner/Spinner";

const CommentsComponent = (props) => {
    const {comments, commentsSize = 3} = props;
    let components = <Spinner />;

    if(comments) {
        comments.length = comments.length > commentsSize ?
            comments.length = commentsSize : comments.length;

        components = comments.map(comment => (
            <Comment
                key={comment.id}
                date={comment.commentData.date}
                text={comment.commentData.authorsComment}
                author={comment.commentData.authorsName}
            />)
        );
    }
    return (
        <section>
            {components}
        </section>
    )
};

export default CommentsComponent;