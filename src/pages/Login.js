/** @format */

import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

import { userInfoState, isLoggedInState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';

export default function Login() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const FormITems = [
    { value: email, setValue: setEmail, type: 'email', placeholder: '이메일' },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '비밀번호',
    },
  ];
  const isLogin = async () => {
    try {
      const result = await axiosConfig.post(
        '/auth/login',
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
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
  const isJoin = () => {
    navigator('/join');
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <FormHeader text={'Login'} />
      <form className='w-5/6 md:w-80 mt-5'>
        {FormITems.map((el, i) => {
          return (
            <FormInput
              key={i}
              value={el.value}
              setValue={el.setValue}
              type={el.type}
              placeholder={el.placeholder}
            />
          );
        })}
        <FormButton submitFunc={isLogin} text={'Login'} />
        <FormButton submitFunc={isJoin} text={'Signup'} />
      </form>
    </div>
  );
}
