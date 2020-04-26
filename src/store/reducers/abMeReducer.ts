/**
 * HP reducer
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actionTypes from  '../actions/actions';
import {Action, CommentType} from '../sagas/system/types';

const initHPState:CommentType | [] = [];

/**
 * homePageReducer
 *
 * @param state
 * @param action
 */
export const abMePageReducer = (state= initHPState, action:Action):CommentType | [] | {}=> {
    switch (action.type) {
        case actionTypes.SET_COMMENTS : {
            return  action.payload
        }
        default : {
            return state;
        }
    }
};