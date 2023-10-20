import React from 'react';
import * as S from './style';

interface iModal {
  children: React.ReactNode;
}

const Modal = ({ children }: iModal) => {
  return (
    <S.ContainerModal>
      <div className="modal">{children}</div>
    </S.ContainerModal>
  );
};

export default Modal;
