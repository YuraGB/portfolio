/**
 * Comment Saga
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {put} from 'redux-saga/effects';

import {fireBaseCalls} from "../../axios";
import {Generator} from './system/types';
import {setSystemMessage,spinnerStatus} from '../actions/actionCreators';

/**
 * initHPState generator
 * @return void
 */
export function* saveMessage(data):Generator {
    yield put(spinnerStatus(true));
    try {
        const response:any = yield fireBaseCalls.post('/comments.json', data);
        response.statusText === 'OK' ?
            yield put(setSystemMessage({text:'The Message was saved', status: "Success" })) :
            yield put(setSystemMessage({text:'Something went wrong', status: "Fail" }));

        console.log(response.statusText);
        yield put(spinnerStatus(false));
    } catch (e) {
        yield put(setSystemMessage({text:e.message, status: "Fail" }));
        yield put(spinnerStatus(false));
    }
}