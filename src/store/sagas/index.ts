import { takeEvery } from 'redux-saga/effects';

import {initHPState} from './home-page';
import * as actionTypes from '../actions/actions';
import {Generator} from './system/types';

export function* watchHP (): Generator {
    yield takeEvery(actionTypes.FETCH_HOMEPAGE_STATE, initHPState);
}