import { useSetRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';

import { useNavigate } from 'react-router-dom';
import { isLoggedInState, userInfoState } from '../recoilAtoms';

const useLogin = (requestUserInfo) => {
  const navigator = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const requestLogin = async () => {
    console.log(requestUserInfo);
    try {
      const result = await axiosConfig.post('/auth/login', {
        email: requestUserInfo.email,
        password: requestUserInfo.password,
      });
      console.log('로그인 요청 성공 : ', result);
      if (result.status === 200) {
        setUserInfo(result.data.userInfo);
        setIsLoggedIn(result.data.isLoggedIn);
        navigator('/');
      }
    } catch (error) {
      console.log('로그인 요청 실패 : ', error);
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

  return { requestLogin, fetchLogin };
};
export default useLogin;
