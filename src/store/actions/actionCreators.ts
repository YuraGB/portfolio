import * as actyonTypes from './actions';
import {Action} from "../sagas/system/types";
import * as types from '../sagas/system/types';

export const setHPActionCreator = (HPState:types.HomePageState):Action => {
    return {
        type: actyonTypes.SET_HOMEPAGE_STATE,
        payload: HPState
    }
}