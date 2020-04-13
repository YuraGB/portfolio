/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect, useState} from 'react';

import './AboutMe.css';
import axios from "../../axios";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";


/**
 * About Me
 *
 * @param {*} props
 * @return {*} component
 */
const AboutMeComponent = (props) => {
    const [comments, renderComments] = useState(null);

    useEffect(() => {
        axios.get('./comments.json')
            .then(resp => {
               const data = Object.keys(resp.data).map(commentsId => ({
                    id: commentsId,
                   commentData: resp.data[commentsId]
                }));
                renderComments(data)});
    },[]);

    return (
            <article className='content AboutMePage'>
                <h1 className='page_title'>About Me</h1>
                <CommentsComponent comments={comments}/>
            </article>
    )
};

export default AboutMeComponent;
