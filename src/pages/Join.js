import React, { useEffect, useState } from 'react';

import Input from '../components/atom-components/Input';
import FormHeader from '../components/FormHeader';
import Button from '../components/atom-components/Button';
import WrapProvider from '../components/wraper-components/WrapProvider';

import useReg from '../hooks/useReg';
import useJoin from '../hooks/useJoin';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setContirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const isEmailReg = useReg(email, 'email');
  const isPasswordReg = useReg(password, 'password');
  const isPhoneNumberReg = useReg(phoneNumber, 'phoneNumber');
  const isDisplayName = useReg(displayName, 'trim');
  const isConfirmPassword = useReg(password, 'same', confirmPassword);

  const [isJoinAble, setIsJoinAble] = useState(false);
  const { submitJoin, data } = useJoin({
    email: email,
    password: password,
    displayName: displayName,
    phoneNumber: phoneNumber,
  });

  useEffect(() => {
    setIsJoinAble(
      isEmailReg && isPasswordReg && isPhoneNumberReg && isDisplayName && isConfirmPassword,
    );
  }, [isEmailReg, isPasswordReg, isPhoneNumberReg, isDisplayName, isConfirmPassword]);

  const FormItems = [
    {
      value: email,
      setValue: setEmail,
      type: 'email',
      placeholder: '이메일',
      name: 'email',
    },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '영문 숫자 특수기호 조합 8자리 이상',
    },
    {
      value: confirmPassword,
      setValue: setContirmPassword,
      type: 'password',
      placeholder: '비밀번호를 한번 더 입력해주세요',
    },
    {
      value: displayName,
      setValue: setDisplayName,
      type: 'text',
      placeholder: '이름',
    },
    {
      value: phoneNumber,
      setValue: setPhoneNumber,
      type: 'text',
      placeholder: '전화번호',
      name: 'phoneNumber',
    },
  ];

  return (
    <WrapProvider type={'wrap'}>
      <FormHeader text={'회원가입'} />
      <WrapProvider type={'form'}>
        {FormItems.map((el, i) => {
          return (
            <Input
              key={i}
              value={el.value}
              setValue={el.setValue}
              type={el.type}
              placeholder={el.placeholder}
              name={el.name}
              size={'wfull'}
            />
          );
        })}
        <Button
          submitFunc={submitJoin}
          isSubmitAble={isJoinAble}
          label={'회원가입'}
          size={'wfull'}
          bg={isJoinAble ? 'red' : 'grey'}
          text={'white'}
        />
      </WrapProvider>
    </WrapProvider>
  );
}
