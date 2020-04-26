/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import './AboutMe.css';
import {fireBaseCalls} from "../../axios";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import {fetchCommentsActionCreator} from '../../store/actions/actionCreators';

/**
 * About Me
 *
 * @return {*} component
 */
const AboutMeComponent = () => {
    const comments = useSelector(state => {
        return state.comments});
    const dispatch = useDispatch();

    useEffect(() => {
        if(!comments.length) {
            dispatch(fetchCommentsActionCreator());
        }
    },[]);

    return (
            <article className='content AboutMePage'>
                <h1 className='page_title'>About Me</h1>
                <CommentsComponent comments={comments}/>
            </article>
    )
};

export default withErrorHandler(AboutMeComponent, fireBaseCalls);
