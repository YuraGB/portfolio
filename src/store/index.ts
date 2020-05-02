/**
 * Store
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    abMePageReducer,
    homePageReducer,
    systemMessageReducer,
    spinnerReducer,
    booksReducer
} from './reducers';
import * as sagas from './sagas';

const rootReducer = combineReducers({
    hp:homePageReducer,
    comments:abMePageReducer,
    systemMessage: systemMessageReducer,
    spinner: spinnerReducer,
    books: booksReducer
});

const sagaMiddleware = createSagaMiddleware();

export default function () {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    Object.keys(sagas).forEach(saga => {
        sagaMiddleware.run(sagas[saga])
    });

    return store;
};
