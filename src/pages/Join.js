/** @format */

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import FormInput from '../components/FormInput';
import FormHeader from '../components/FormHeader';
import FormButton from '../components/FormButton';
import { emailReg, passwordReg } from '../util/Regs';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setContirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isPasswordReg, setIsPasswordReg] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isEmailReg, setIsEmailReg] = useState(false);
  const [isPhoneNumberCheck, setIsPhoneNumberCheck] = useState(false);

  const [isJoinSubmitAble, setIsJoinSubmitAble] = useState(false);

  const FormItems = [
    {
      value: email,
      setValue: setEmail,
      type: 'email',
      placeholder: '이메일을 입력해주세요',
      name: 'email',
    },
    {
      value: password,
      setValue: setPassword,
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
    },
    {
      value: confirmPassword,
      setValue: setContirmPassword,
      type: 'password',
      placeholder: '비밀번호 확인',
    },
    {
      value: displayName,
      setValue: setDisplayName,
      type: 'text',
      placeholder: '이름을 입력해주세요',
    },
    {
      value: phoneNumber,
      setValue: setPhoneNumber,
      type: 'text',
      placeholder: '전화번호를 입력해주세요',
      name: 'phoneNumber',
    },
  ];
  const isJoin = async () => {
    try {
      const result = await axios.post('/auth/join', {
        email: email,
        password: password,
        displayName: displayName,
        phoneNumber: phoneNumber,
      });
      console.log('가입요청성공 : ', result.data.message);
    } catch (error) {
      console.log('가입요청실패 : ', error);
    }
  };

  const isTrim = (value) => {
    return !!value.trim();
  };

  useEffect(() => {
    setIsPasswordReg(passwordReg.test(password));
    setIsPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setIsEmailReg(emailReg.test(email));
  }, [email]);
  useEffect(() => {
    if (phoneNumber.length === 13) {
      setIsPhoneNumberCheck(true);
    } else {
      setIsPhoneNumberCheck(false);
    }
  }, [phoneNumber]);

  useEffect(() => {
    setIsJoinSubmitAble(
      isEmailReg &&
        isPasswordReg &&
        isPasswordMatch &&
        isPhoneNumberCheck &&
        isTrim(displayName)
    );
    console.log('회원가입 조건 적합 : ', isJoinSubmitAble);
  }, [
    isEmailReg,
    isPasswordReg,
    isPasswordMatch,
    isPhoneNumberCheck,
    displayName,
  ]);

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <FormHeader text={'Sign up'} />
      <form className='w-5/6 md:w-80 mt-5'>
        {FormItems.map((el, i) => {
          return (
            <FormInput
              key={i}
              value={el.value}
              setValue={el.setValue}
              type={el.type}
              placeholder={el.placeholder}
              name={el.name}
            />
          );
        })}
        <FormButton
          submitFunc={isJoin}
          isSubmitAble={isJoinSubmitAble}
          text={'Sigb up'}
        />
      </form>
    </div>
  );
}
