/**
 * Axios configur
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-bc6f3.firebaseio.com/'
});

export default instance;