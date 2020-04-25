/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext, useEffect} from 'react';

import {fireBaseCalls} from '../../axios';
import classes from './HomePage.module.css';
import HomePageBlock from "../../components/HomePageBlock/HomePageBlock";
/*import {Index} from "../../store";*/
import Auxx from "../../hoc/Auxx/Auxx";
/*import {getBooks} from '../../apiCalls/googleApiBooks/googleBooksApiCalls'*/
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";


/**
 * HomePageComponent
 *
 * @return {*} component
 */
const HomePageComponent:React.FC = () => {
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