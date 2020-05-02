/**
 * fetchBooks Saga
 * comments
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {put} from 'redux-saga/effects';

import {Generator} from '../../system/types';
import {setBooksActionCreator} from '../actions/actionCreators';
import {getBooks} from "../../apiCalls/googleApiBooks/googleBooksApiCalls";

/**
 * initHPState generator
 * @return void
 */
export function* fetchBooks():Generator {
    try {
        const response:any = yield getBooks();
        const commentsData = response.map( book => {
            return {
                id: book.id,
                imgLing: book.volumeInfo.imageLinks.thumbnail,
                description: book.volumeInfo.description,
                title: book.volumeInfo.title,
                date: book.publishedDate
            }
        });
        console.log("sadsadsadsad");
        yield put(setBooksActionCreator(commentsData));
    } catch (e) {
        console.log(e.message);
    }
}