import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfoState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import axios from 'axios';

export default function KakaoLogin() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();

  const PARAMS = new URL(document.location).searchParams;
  const KAKAO_CODE = PARAMS.get('code');
  const [isToken, setIsToken] = useState(false);

  console.log(KAKAO_CODE);

  const getAccessToken = async () => {
    if (isToken) return;

    console.log('getAccessToken 호출');

    try {
      setIsToken(true);

      const response = await axios.post(
        'http://localhost:4000/auth/kakao/login',
        {
          authorizationCode: KAKAO_CODE,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const accessToken = response.data.accessToken;
      console.log('accessToken:', accessToken);

      setUserInfo({
        ...userInfo,
        accessToken: accessToken,
      });

      setIsToken(false);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setIsToken(false);
    }
  };

  useEffect(() => {
    if (KAKAO_CODE && !userInfo.accessToken) {
      getAccessToken();
    }
  }, [KAKAO_CODE]);

  return <div>Loding..</div>;
}
