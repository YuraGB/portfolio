/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext, useEffect} from 'react';

import './AboutMe.css';
import {fireBaseCalls} from "../../axios";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import Context from "../../Context/context";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import ProfileImg from "../../components/ProfileImg/ProfileImg";
import AuthobiographyComponent from "../../components/AuthobiographyComponent/AuthobiographyComponent";


/**
 * About Me
 *
 * @return {*} component
 */
const AboutMeComponent = () => {
    const {state, stateHandler} = useContext(Context);

    useEffect(() => {
        if(!state.abMe) {
            fireBaseCalls.get('/comments.json')
                .then(resp => {
                    if (resp) {
                        stateHandler((prevState) => {
                            return {
                                ...prevState,
                                abMe: Object.keys(resp.data).map(commentsId => ({
                                    id: commentsId,
                                    commentData: resp.data[commentsId]
                                }))
                        }});
                    }
                }
            );
        }
    },[state.abMe, stateHandler]);

    return (
        <article className='content AboutMePage'>
            <ProfileImg/>
            <AuthobiographyComponent/>
            <CommentsComponent comments={state.abMe}/>
        </article>
    )
};

export default withErrorHandler(AboutMeComponent, fireBaseCalls);
