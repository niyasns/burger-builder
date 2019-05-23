import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-9b4da.firebaseio.com/'
});

export default instance;