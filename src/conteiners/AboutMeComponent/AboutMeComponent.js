/**
 * About me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext, useEffect} from 'react';

import './AboutMe.css';
import axios from "../../axios";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import Context from "../../Context/context";


/**
 * About Me
 *
 * @return {*} component
 */
const AboutMeComponent = () => {
    const {state, stateHandler} = useContext(Context);

    useEffect(() => {
        if(!state.abMe) {
            axios.get('/comments.json')
                .then(resp => {
                    stateHandler((prevState) => {
                        return {
                            ...prevState,
                            abMe: Object.keys(resp.data).map(commentsId => ({
                                id: commentsId,
                                commentData: resp.data[commentsId]}))
                            }
                        }
                    );
                }
            );
        }
    },[state.abMe, stateHandler]);

    return (
            <article className='content AboutMePage'>
                <h1 className='page_title'>About Me</h1>
                <CommentsComponent comments={state.abMe}/>
            </article>
    )
};

export default AboutMeComponent;
