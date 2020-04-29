/**
 * HP reducer
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actionTypes from  '../actions/actions';
import {IAction, IHomePageState} from '../../system/types';
import {mergeDeep} from '../../utills/deepMerge';

const initHPState:IHomePageState | {} = {};

/**
 * homePageReducer
 *
 * @param state
 * @param action
 */
export const homePageReducer = (state= initHPState, action:IAction):IHomePageState | any => {
    switch (action.type) {
        case actionTypes.SET_HOMEPAGE_STATE : {
            return mergeDeep({}, state, action.payload)
        }
        default : {
            return state;
        }
    }
};