import * as actionTypes from  '../actions/actions';
import {Action, HomePageState} from '../sagas/system/types';
import {mergeDeep} from '../../utills/deepMerge';

const initHPState:HomePageState = {
    hobbies: {},
    work: {},
    weaknessesStrengths: {}
};

/**
 *
 * @param state
 * @param action
 */
export const homePageReducer = (state=initHPState, action:Action): HomePageState | {} => {
    switch (action.type) {
        case actionTypes.SET_HOMEPAGE_STATE : {
            return mergeDeep(state, action.payload)
        }
        default : {
            return state;
        }
    }
};