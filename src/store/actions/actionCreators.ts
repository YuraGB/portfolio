/**
 * IAction creators
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import * as actyonTypes from './actions';
import {IAction, ICommentInterface, Message} from "../../system/types";
import * as types from '../../system/types';

export const setHPActionCreator = (HPState:types.IHomePageState):IAction => {
    return {
        type: actyonTypes.SET_HOMEPAGE_STATE,
        payload: HPState
    }
};

export const fetchHPActionCreator = ():IAction => {
    return {
        type: actyonTypes.FETCH_HOMEPAGE_STATE
    }
};

export const fetchCommentsActionCreator = ():IAction => {
    return {
        type: actyonTypes.FETCH_COMMENTS
    }
};

export const sethCommentsActionCreator = (COmmentsState:types.CommentType):IAction => {
    return {
        type: actyonTypes.SET_COMMENTS,
        payload: COmmentsState
    }
};

export const setSystemMessage = (message:Message):IAction => {
    return {
        type: actyonTypes.SYSTEM_MESSAGE,
        payload: message
    }
};

export const saveCommentsActionCreator = (data:ICommentInterface):IAction => {
    return {
        type: actyonTypes.SAVE_MESSAGE,
        payload: data
    }
};

export const spinnerStatus = (status:boolean):IAction => {
    return {
        type: actyonTypes.SPINNER_SHOW,
        payload: status
    }
};

export const fetchBooksActionCreator = ():IAction => {
    return {
        type: actyonTypes.FETCH_BOOKS
    }
};

export const setBooksActionCreator = (Books:types.IHomePageState):IAction => {
    return {
        type: actyonTypes.SET_BOOKS,
        payload: Books
    }
};