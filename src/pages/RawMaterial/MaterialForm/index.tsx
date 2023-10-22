import React, { Dispatch, SetStateAction } from 'react';
import { MaterialTypes } from '../types/MaterialTypes';
import * as S from './style';

interface FormMaterialsProps {
  material: MaterialTypes;
  setMaterial: Dispatch<SetStateAction<MaterialTypes>>;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const MaterialForm = ({ setOpen, isOpen, material, setMaterial }: FormMaterialsProps) => {
  if (isOpen) {
    return (
      <S.Container>
        <S.Form>
          <h1>Formulário de materiais</h1>
          <button onClick={() => setOpen(!isOpen)}>Fechar Formulário</button>
        </S.Form>
      </S.Container>
    );
  }
};
