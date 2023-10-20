import { useNavigate } from 'react-router-dom';
import * as S from './style';
import React, { useState } from 'react';
import { MaterialProdutoTypes } from '../FormMateriaisProduto/types/MaterialProduto';
import { FormMateriaisProduto } from '../FormMateriaisProduto';

const inicialState: MaterialProdutoTypes = {
  id: '',
  name: '',
  qt: 0,
  obs: '',
  unid: '',
};

export const AddMateriaisProduto = () => {
  const [materialProduto, setMaterialProduto] = useState<MaterialProdutoTypes>(inicialState);
  const navigate = useNavigate();

  function createPost(materialProduto: MaterialProdutoTypes) {
    fetch('http://localhost:5000/produtos/materiaisProduto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(materialProduto),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/produtos', {
          state: { message: 'Material adicionado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }

  function handleSubmit(materialProduto: MaterialProdutoTypes) {
    const { name, obs, qt, unid } = materialProduto;

    if (!name || !obs || !qt || !unid) {
      window.alert('Preencha todos os campos!');
      return;
    }

    createPost(materialProduto);
  }

  return (
    <S.Container>
      <S.ContainerCadastro>
        <FormMateriaisProduto materialProduto={materialProduto} setMaterialProduto={setMaterialProduto} />
      </S.ContainerCadastro>
    </S.Container>
  );
};
