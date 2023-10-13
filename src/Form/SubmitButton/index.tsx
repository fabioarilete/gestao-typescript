import * as S from './style';
import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const SubmitButton: FunctionComponent<ButtonProps> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};
