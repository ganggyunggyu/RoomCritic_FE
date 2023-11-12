import { userInfoState, isLoggedInState } from '../recoilAtoms';

import axiosConfig from '../api/axiosConfig';
import { useSetRecoilState } from 'recoil';

const useLoginFetch = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);
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

  return { fetchLogin };
};
export default useLoginFetch;
