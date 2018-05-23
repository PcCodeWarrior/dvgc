import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dvgc-db421.firebaseio.com/'
});

export default instance;