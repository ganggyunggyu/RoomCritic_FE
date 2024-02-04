import React, { useState } from 'react';
import FormHeader from '../components/FormHeader';
import Input from '../components/AtomComponent/Input';
import Button from '../components/AtomComponent/Button';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import { inputHandler } from '../util/inputValue';
import { PasswordRegTest, emailRegTest } from '../util/Regs';

export default function Login() {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { submitLogin, data } = useLogin({ email: email, password: password });
  const directJoin = () => {
    navigator('/join');
  };

  const LoginInputs = [
    {
      value: email,
      setValue: setEmail,
      type: 'email',
      placeholder: '이메일',
      isReg: emailRegTest(email),
    },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '비밀번호',
      isReg: PasswordRegTest(password),
    },
  ];

  const isLoginAble = () => {
    return !LoginInputs.some((FormItem) => {
      return FormItem.isReg === false;
    });
  };
  const activeLogin = isLoginAble();

  return (
    <ResponsiveProvider direction={'col'}>
      <FormHeader text={'로그인'} />
      <form action="" className="flex flex-col gap-3 md:w-1/2 w-full pb-10">
        {LoginInputs.map((FormItem, i) => {
          return (
            <Input
              key={i}
              value={FormItem.value}
              type={FormItem.type}
              onChange={(e) => {
                inputHandler(e, FormItem.setValue);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  submitLogin();
                }
              }}
              label={FormItem.placeholder}
            />
          );
        })}
        {data && <p className="py-3 text-red-400">{data}</p>}
        <Button
          label={'로그인'}
          bg={activeLogin ? 'main' : 'disable'}
          disabled={!activeLogin}
          onCLick={submitLogin}
        />
        <Button label={'회원가입'} bg={'main'} onClick={directJoin} />
      </form>
    </ResponsiveProvider>
  );
}
