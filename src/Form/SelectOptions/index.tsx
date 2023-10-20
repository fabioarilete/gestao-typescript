import * as S from './style';
import React, { SelectHTMLAttributes, ReactNode, useEffect, useState } from 'react';

interface SelectOptionsProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  label?: string;
}

export const SelectOptions: React.FC<SelectOptionsProps> = ({ value, name, label, children, ...rest }) => {
  return (
    <>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select {...rest} id={name} value={value || ''} name={name}>
        {children}
      </S.Select>
    </>
  );
};
