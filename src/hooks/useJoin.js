import { useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const useJoin = (requestUserInfo) => {
  const navigator = useNavigate();
  const [data, setData] = useState({});
  const submitJoin = async () => {
    try {
      const result = await axiosConfig.post('/auth/join', {
        email: requestUserInfo.email,
        password: requestUserInfo.password,
        displayName: requestUserInfo.displayName,
        phoneNumber: requestUserInfo.phoneNumber,
      });
      console.log('가입요청성공 : ', result.data);
      setData(result.data);
      navigator(`/login`);
    } catch (error) {
      console.log('가입요청실패 : ', error);
    }
  };

  return { submitJoin, data };
};
export default useJoin;
