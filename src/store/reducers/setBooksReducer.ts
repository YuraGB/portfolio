/**
 * Set books data reducer
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actionTypes from  '../actions/actions';
import {IAction} from '../../system/types';

const initHPState = [];

/**
 * homePageReducer
 *
 * @param state
 * @param action
 */
export const booksReducer = (state= initHPState, action:IAction) => {
    switch (action.type) {
        case actionTypes.SET_BOOKS : {
            return [...action.payload]
        }
        default : {
            return state;
        }
    }
};