import { useSetRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';

import { useNavigate } from 'react-router-dom';
import { isLoggedInState, userInfoState } from '../recoilAtoms';
import { useState } from 'react';

const useLogin = (requestUserInfo) => {
  const navigator = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [data, setData] = useState('');

  const submitLogin = async () => {
    console.log(requestUserInfo);
    try {
      const result = await axiosConfig.post('/auth/login', {
        email: requestUserInfo.email,
        password: requestUserInfo.password,
      });
      console.log('로그인 요청 성공 : ', result.data);
      if (result.status === 200) {
        setUserInfo(result.data.userInfo);
        setIsLoggedIn(result.data.isLoggedIn);
        navigator('/');
      }
      if (result.status === 201) {
        setData(result.data.message);
      }
    } catch (error) {
      console.log('로그인 요청 실패 : ', error.response.data);
      setData(error.response.data);
    }
  };

  const fetchLogin = async () => {
    try {
      const result = await axiosConfig.get('/auth/login/check', {
        withCredentials: true,
      });
      console.log(result);
      if (result.status === 200) {
        setIsLoggedIn(true);
        setUserInfo(result.data.userInfo.user);
      }
      if (result.status === 201) {
        console.log(result.data.message);
        setIsLoggedIn(false);
        setUserInfo({});
      }
    } catch (err) {
      console('fetchLoginERROR !!', err);
    }
  };

  return { submitLogin, fetchLogin, data };
};
export default useLogin;
