import * as S from './style';
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLAnchorElement> {
  name: string;
  type: string;
  text: string;
  placeholder: string;
  handleOnChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ name, type, text, placeholder, handleOnChange }) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{text}</S.InputLabel>
      <S.Input placeholder={placeholder} name={name} type={type} />
    </S.InputContainer>
  );
};
