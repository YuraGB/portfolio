import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-bc6f3.firebaseio.com/'
});

export default instance;