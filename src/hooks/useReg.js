import { useEffect, useState } from 'react';

export const emailRegTest = (email) => {
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailReg.test(email);
};
export const PasswordRegTest = (password) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  return passwordReg.test(password);
};
export const phoneNumberRegTest = (phoneNumber) => {
  const phoneNumberReg = /^01[0-9]-\d{3,4}-\d{4}$/;
  return phoneNumberReg.test(phoneNumber);
};
export const isTrim = (value) => {
  console.log(value);
  return !!value.trim();
};
export const isSame = (value1, value2) => {
  if (value1 === value2) {
    return true;
  }
  return false;
};

const useReg = (value, valueType, others) => {
  const [isValueReg, setIsValueReg] = useState(false);

  useEffect(() => {
    if (valueType === 'email') {
      setIsValueReg(emailRegTest(value));
    }
    if (valueType === 'password') {
      setIsValueReg(PasswordRegTest(value));
    }
    if (valueType === 'phoneNumber') {
      setIsValueReg(phoneNumberRegTest(value));
    }
    if (valueType === 'trim') {
      setIsValueReg(isTrim(value));
    }
    if (valueType === 'same') {
      setIsValueReg(isSame(value, others));
    }
  }, [value, others, valueType]);

  return isValueReg;
};

export default useReg;
