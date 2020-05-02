import { takeEvery } from 'redux-saga/effects';

import {initHPState} from './home-page';
import {initCommentsState} from './AbMe';
import {saveMessage} from './saveMessage';
import * as actionTypes from '../actions/actions';
import {Generator} from '../../system/types';
import {fetchBooks} from "./fetchBooks";

export function* watchHP (): Generator {
    yield takeEvery(actionTypes.FETCH_HOMEPAGE_STATE, initHPState);
}

export function* watchABMe (): Generator {
    yield takeEvery(actionTypes.FETCH_COMMENTS, initCommentsState);
}

export function* watchSaveComment (): Generator {
    yield takeEvery(actionTypes.SAVE_MESSAGE, saveMessage);
}

export function* watchBooks (): Generator {
    yield takeEvery(actionTypes.FETCH_BOOKS, fetchBooks);
}