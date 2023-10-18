import { useNavigate } from 'react-router-dom';
import { FormMateriais } from '../FormMateriais';
import { MaterialTypes } from '../Material/types/MaterialTypes';
import * as S from './style';
import React, { useState } from 'react';

const inicialState: MaterialTypes = {
  id: '',
  name: '',
  preco: 0,
  frete: 0,
  icms: 0,
  nf: 0,
  tipoFornecedor: '',
  total: 0,
  unid: '',
};

export const CadastroMateriais = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const navigate = useNavigate();

  function createPost(material: MaterialTypes) {
    fetch('http://localhost:5000/materiaPrima', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(material),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/materiaPrima', {
          state: { message: 'Material cadastrado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }

  function handleSubmit(material: MaterialTypes) {
    const { name, preco, icms, frete, nf, tipoFornecedor } = material;

    if (!name || !preco || !icms || !frete || !nf || !tipoFornecedor) {
      window.alert('Preencha todos os campos!');
      return;
    }

    createPost(material);
  }

  return (
    <S.Container>
      <S.ContainerCadastro>
        <S.Title></S.Title>
        <FormMateriais material={material} setMaterial={setMaterial} handleSubmit={handleSubmit} />
      </S.ContainerCadastro>
    </S.Container>
  );
};
