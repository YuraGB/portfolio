/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {Suspense} from 'react';

import './AboutMe.css'
import NavigationLink from "../../components/Navigation/NavigationLink/NavigationLink";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import fetchCommentsData from "./fetchData/fetchComments";
import Spinner from "../../components/Spinner/Spinner";

/**
 * About Me
 *
 * @param {*} props
 * @return {*} component
 */
const AboutMeComponent = (props) => {
    const promise = fetchCommentsData;

    return (
            <article className='content'>
                <h1 className='page_title'>About Me</h1>
                <Suspense fallback={<Spinner/>}>
                    <CommentsComponent comments={promise} />
                </Suspense>
                <NavigationLink link='/contactMe'>Leave me the message</NavigationLink>
            </article>
    )
};

export default AboutMeComponent;
