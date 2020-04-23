
import {put} from 'redux-saga/effects';

import {fireBaseCalls} from "../../axios";
import {HomePageState} from './system/types';

export function* initHPState<T extends {}>() {
    try {
        const response:Response = yield fireBaseCalls.get('/home page state');
        yield put(response);
    } catch (e:Error) {
        console.log(e.message);
    }
};
