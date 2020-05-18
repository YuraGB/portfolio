import React from 'react';

import Comment from "./CommentComponent/CommentComponent";
import Spinner from "../Spinner/Spinner";
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import Button from "../UI/Button/Button";

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
        <section className='comments'>
            <h3>{comments ? 'Comments' : 'There are no comments yet'}</h3>
            {components}
            <Button btnType='Success'>
                <NavigationLink link='/contactMe'>Leave me the message</NavigationLink>
            </Button>
        </section>
    )
};

export default CommentsComponent;
