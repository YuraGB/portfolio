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
import {Work} from "../../store/sagas/system/types";
import {fetchHPActionCreator} from '../../store/actions/actionCreators'


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
        }
    }, [dispatch, hpState.work]);
    //const context = useContext(Context);
/*
    useEffect( () => {
        if (context && context.state) {
            fireBaseCalls.get('/home page state.json')
                .then(resp => {
                    context.stateHandler((prevState) => {
                        return {
                            ...prevState,
                            hp: {
                                work: resp.data.work,
                                hobbies: resp.data.hobbies,
                                weaknessesStrengths: resp.data.weaknessesStrengths
                            }
                        }
                    });
                }
            );
            getBooks().then(console.log)
        }

    }, [state.hp, stateHandler]);*/
const state = {
    hobbies: {
        dancing: {
            bachata: true
        }
    },
    work: {
        "TOV SAUZ": {
            profession: "accountant"
        },
        "TOV TERKO": {
            profession: "accountant"
        }
    },
    weaknessesStrengths: {
        angry: "angry"
    }
}

    return (
        <article className={['content', classes.HomePage].join(' ')}>
            <Auxx>
                <HomePageBlock linkDirection='link-right' title="Work Experience" category={state.work} type='profession'/>
                <HomePageBlock linkDirection='link-left' title="hobbies" category={state.hobbies} />
                <HomePageBlock linkDirection='link-right' title="weakness && strengths" category={state.weaknessesStrengths} />
            </Auxx>
        </article>
    )
};

export default withErrorHandler(HomePageComponent, fireBaseCalls);