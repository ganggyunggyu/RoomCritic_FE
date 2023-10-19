/** @format */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '82c9f7e8df21e783d191d3d4c1f46943',
    language: 'ko-KR',
  },
});

export default instance;
