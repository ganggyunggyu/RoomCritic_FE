import { useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const useJoin = (requestUserInfo) => {
  const navigator = useNavigate();
  const [data, setData] = useState('');
  const submitJoin = async () => {
    try {
      const result = await axiosConfig.post('/auth/join', {
        email: requestUserInfo.email,
        password: requestUserInfo.password,
        displayName: requestUserInfo.displayName,
        phoneNumber: requestUserInfo.phoneNumber,
      });

      // alert(result.data.message);

      if (result.data.message === '회원가입 성공') navigator('/login');
      setData(result.data.message);
    } catch (error) {
      console.log('가입요청실패 : ', error);
    }
  };

  return { submitJoin, data };
};
export default useJoin;
