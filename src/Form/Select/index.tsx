import * as S from './style';
import { InputHTMLAttributes, ReactNode, FC } from 'react';

type InputProps = InputHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export const Select: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select {...rest} name={name}>
        <option>Selecione uma opção</option>
        <option>UN</option>
        <option>PCT</option>
        <option>KG</option>
        <option>LT</option>
        <option>FD</option>
        <option>FX</option>
        <option>M2</option>
        <option>M3</option>
      </S.Select>
    </>
  );
};
