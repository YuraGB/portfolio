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
import Context from "../../Context/context";
import Auxx from "../../hoc/Auxx/Auxx";
import {getBooks} from '../../apiCalls/googleApiBooks/googleBooksApiCalls'
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import bookNormolize from './utils/booksNormolize';

/**
 * HomePageComponent
 *
 * @return {*} component
 */
const HomePageComponent = () => {
    const {
        state,
        stateHandler,
        stateBooksHandler
    } = useContext(Context);

    useEffect( () => {
        if(!state.hp) {
            fireBaseCalls.get('/home page state.json')
                .then(resp => {
                    if (resp) {
                        stateHandler((prevState) => {
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
                }
            );

            getBooks()
                .then(books => {
                    if(books) {
                        stateBooksHandler(bookNormolize(books));
                    }
                });
        }
    }, [state.hp, stateHandler, stateBooksHandler]);

    return (
        <article className={['content', classes.HomePage].join(' ')}>
            {state.hp &&
                <Auxx>
                    <HomePageBlock linkDirection='link-right'
                                   title="Work Experience"
                                   category={state.hp.work}
                                   type='profession'
                    />
                    <HomePageBlock linkDirection='link-right'
                                   title="hobbies"
                                   category={state.hp.hobbies}
                    />
                    <HomePageBlock linkDirection='link-right'
                                   title="weakness && strengths"
                                   category={state.hp.weaknessesStrengths}
                    />
                </Auxx>
            }
        </article>
    )
};

export default withErrorHandler(HomePageComponent, fireBaseCalls);