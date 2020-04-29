/**
 * HP reducer
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actionTypes from  '../actions/actions';
import {IAction} from '../../system/types';

const initHPState:boolean = false;

/**
 * homePageReducer
 *
 * @param state
 * @param action
 */
export const spinnerReducer = (state= initHPState, action:IAction):boolean => {
    switch (action.type) {
        case actionTypes.SPINNER_SHOW : {
            return action.payload;
        }
        default : {
            return state;
        }
    }
};