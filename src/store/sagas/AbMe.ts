/**
 * AbMe Saga
 * comments
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {put} from 'redux-saga/effects';

import {fireBaseCalls} from "../../axios";
import {Generator} from './system/types';
import {sethCommentsActionCreator} from '../actions/actionCreators';

/**
 * initHPState generator
 * @return void
 */
export function* initCommentsState():Generator {
    try {
        const response:any = yield fireBaseCalls.get('/comments.json');
        const commentsData = Object.keys(response.data).map(commentsId => ({
            id: commentsId,
            commentData: response.data[commentsId]
        }));
        yield put(sethCommentsActionCreator(commentsData));
    } catch (e) {
        console.log(e.message);
    }
}