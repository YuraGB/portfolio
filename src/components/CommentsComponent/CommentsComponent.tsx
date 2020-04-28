/**
 * Comments container
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Comment from "./CommentComponent/CommentComponent";
import Spinner from "../Spinner/Spinner";
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import Button from "../UI/Button/Button";
import {CommentsComponentInterface} from '../../store/sagas/system/types';

/**
 * CommentsComponent
 *
 * @param props
 * @return {*}
 * @constructor
 */
const CommentsComponent:React.FC<CommentsComponentInterface> = (
    {
        comments,
        commentsSize= 3
    }) => {
    let components;
    if(comments.length) {
        comments.length = comments.length > commentsSize ?
            comments.length = commentsSize : comments.length;

        components = comments.map(comment => (
            <Comment
                key={comment.id}
                date={comment.commentData.date}
                authorsComment={comment.commentData.authorsComment}
                authorsName={comment.commentData.authorsName}
            />)
        );
    } else {
        components = <Spinner />
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