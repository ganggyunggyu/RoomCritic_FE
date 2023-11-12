import axios from 'axios';
import { HOST } from '../config';

const instance = axios.create({
  baseURL: HOST,
  headers: {
    Authorization: 'Bearer your-token',
  },
  withCredentials: true, // withCredentials를 true로 설정
});

export default instance;
