import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../api/axiosConfig';
import { isLoggedInState, userInfoState } from '../recoilAtoms';

const useLogin = (requestUserInfo) => {
  const navigator = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [data, setData] = useState('');

  const submitLogin = async () => {
    try {
      const result = await axiosConfig.post('/auth/login', {
        email: requestUserInfo.email,
        password: requestUserInfo.password,
      });

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
      const result = await axiosConfig.get('/auth/login/check');
      if (result.status === 200) {
        setIsLoggedIn(true);
        setUserInfo(result.data.userInfo.user);
      }
      if (result.status === 201) {
        setIsLoggedIn(false);
        setUserInfo({});
      }
    } catch (error) {
      console.error('fetchLoginERROR !!', error);
    }
  };

  return { submitLogin, fetchLogin, data };
};
export default useLogin;
