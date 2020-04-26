import { takeEvery } from 'redux-saga/effects';

import {initHPState} from './home-page';
import {initCommentsState} from './AbMe';
import * as actionTypes from '../actions/actions';
import {Generator} from './system/types';

export function* watchHP (): Generator {
    yield takeEvery(actionTypes.FETCH_HOMEPAGE_STATE, initHPState);
}

export function* watchABMe (): Generator {
    yield takeEvery(actionTypes.FETCH_COMMENTS, initCommentsState);
}