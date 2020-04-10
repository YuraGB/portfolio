import React from 'react';

import Comment from "./CommentComponent/CommentComponent";

const CommentsComponent = (props) => {
    const {comments} = props;

    const posts = comments.read();
    console.log(posts);
    return (
        <section>
            {posts.map(comment => (
                <Comment
                key={comment.id}
                date={comment.commentData.date}
                text={comment.commentData.authorsComment}
                author={comment.commentData.authorsName}
                />)
                )}
        </section>
    )
};

export default CommentsComponent;