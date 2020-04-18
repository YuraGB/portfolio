/**
 * Axios configure
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import axios from 'axios';

const fireBaseCalls = axios.create({
    baseURL: 'https://portfolio-bc6f3.firebaseio.com/'
});

export {
    fireBaseCalls
};