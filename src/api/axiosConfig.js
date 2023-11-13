import axios from 'axios';
import { HOST } from '../config';

const instance = axios.create({
  baseURL: HOST,
  headers: {
    Authorization: 'Bearer your-token',
  },
  withCredentials: true,
});

export default instance;
