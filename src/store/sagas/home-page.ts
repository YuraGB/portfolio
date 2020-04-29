/**
 * HomePage Saga
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {put} from 'redux-saga/effects';

import {fireBaseCalls} from "../../axios";
import {Generator} from '../../system/types';
import {setHPActionCreator} from '../actions/actionCreators';

/**
 * initHPState generator
 * @return void
 */
export function* initHPState():Generator {
    try {
        const response:any = yield fireBaseCalls.get('/home page state.json');
        yield put(setHPActionCreator(response.data));
    } catch (e) {
        console.log(e.message);
    }
}
