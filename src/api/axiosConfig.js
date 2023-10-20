/** @format */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: 'Bearer your-token',
  },
  withCredentials: true, // withCredentials를 true로 설정
});

export default instance;
