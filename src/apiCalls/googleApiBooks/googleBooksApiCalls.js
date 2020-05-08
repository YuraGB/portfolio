/**
 * Google api call
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import config from './config';

/**
 * getBooks is api call to the google api
 * I am not satisfied to implement the script src into
 * the html file but I didn't find any other solution
 * for the implementing gapi throw the npm packages
 *
 * @return {Promise<unknown>}
 */
export const getBooks = function () {
    try {
        return new Promise((resolve) => {
            const {API_KEY, BOOKS_USER_ID, GOOGLE_BOOKS_URL} = config.google_kreds;

            function start() {
                gapi.client.init({
                    'key': API_KEY,
                }).then(function () {
                    return gapi.client.request({
                        'path': `${GOOGLE_BOOKS_URL}/${BOOKS_USER_ID}/bookshelves/0/volumes?key=${API_KEY}`,
                    }).then(resp => resolve(resp.result.items))
                });
            }
            /* global gapi */
            gapi.load('client', start);
        })
    } catch (e) {
        console.log(e);
    }
};