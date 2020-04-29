/**
 * HP reducer
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actionTypes from  '../actions/actions';
import {IAction, Message} from '../sagas/system/types';

const initHPState:Message | {} = {};

/**
 * homePageReducer
 *
 * @param state
 * @param action
 */
export const systemMessageReducer = (state= initHPState, action:IAction):Message | {} => {
    switch (action.type) {
        case actionTypes.SYSTEM_MESSAGE : {
            return action.payload;
        }
        default : {
            return state;
        }
    }
};