/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fireBaseCalls} from '../../axios';
import classes from './HomePage.module.css';
import HomePageBlock from "../../components/HomePageBlock/HomePageBlock";
import Auxx from "../../hoc/Auxx/Auxx";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import {Work} from "../../system/types";
import {fetchHPActionCreator, fetchBooksActionCreator} from '../../store/actions/actionCreators';

/**
 * HomePageComponent
 *
 * @return {*} component
 */
const HomePageComponent:React.FC = () => {
    const hpState:Work = useSelector(state => state.hp);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!hpState.work) {
            dispatch(fetchHPActionCreator());
            dispatch(fetchBooksActionCreator());
        }
    }, [dispatch, hpState.work]);

    return (
        <article className={['content', classes.HomePage].join(' ')}>
            {hpState.work &&
                <Auxx>
                    <HomePageBlock linkDirection='link-right' title="Work Experience" category={hpState.work} type='profession'/>
                    <HomePageBlock linkDirection='link-left' title="hobbies" category={hpState.hobbies}/>
                    <HomePageBlock linkDirection='link-right' title="weakness && strengths" category={hpState.weaknessesStrengths}/>
                </Auxx>
            }
        </article>
    )
};

export default withErrorHandler(HomePageComponent, fireBaseCalls);