import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import Input from '../components/atom-components/Input';
import Button from '../components/atom-components/Button';
import { useNavigate } from 'react-router-dom';
import useKakaoLogin from '../hooks/useKakaoLogin';
import useLogin from '../hooks/useLogin';
import WrapProvider from '../components/wraper-components/WrapProvider';

export default function Login() {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { redirectKakao } = useKakaoLogin();
  const { requestLogin } = useLogin({ email: email, password: password });
  const directJoin = () => {
    navigator('/join');
  };

  const LoginInputs = [
    { value: email, setValue: setEmail, type: 'email', placeholder: '이메일' },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '비밀번호',
    },
  ];
  const LoginButtons = [
    { func: requestLogin, label: '로그인' },
    { func: directJoin, label: '회원가입' },
    { func: redirectKakao, label: '카카오 로그인' },
  ];

  return (
    <WrapProvider type={'wrap'}>
      <FormHeader text={'로그인'} />
      <WrapProvider type={'form'}>
        {LoginInputs.map((el, i) => {
          return (
            <Input
              key={i}
              value={el.value}
              setValue={el.setValue}
              type={el.type}
              placeholder={el.placeholder}
              size={'wfull'}
            />
          );
        })}
        {LoginButtons.map((btn, i) => {
          return (
            <Button
              key={i}
              submitFunc={btn.func}
              label={btn.label}
              bg={'red'}
              text={'white'}
              size={'wfull'}
              isSubmitAble={true}
            />
          );
        })}
      </WrapProvider>
    </WrapProvider>
  );
}
