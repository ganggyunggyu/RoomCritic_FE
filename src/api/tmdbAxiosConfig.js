/** @format */

import axios from 'axios';
import { TMDMAPIKEY } from '../config';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDMAPIKEY,
    language: 'ko-KR',
  },
});

export default instance;
