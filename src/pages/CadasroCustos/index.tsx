import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { CustoTypes } from '../FormCusto/types/CustoTypes';
import { FormCusto } from '../FormCusto';
import { useState } from 'react';

const inicialState: CustoTypes = {
  cod: '',
  name: '',
  unid: '',
  qt: 0,
  st: '',
  tipoProduto: '',
  sf_st: '',
  id: '',
  materiaisProduto: [],
  operacoesProduto: [],
};

export const CadastroCustos = () => {
  const [custo, setCusto] = useState<CustoTypes>(inicialState);
  const navigate = useNavigate();

  function createPost(custo: CustoTypes) {
    fetch('http://localhost:5000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(custo),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/produtos', {
          state: { message: 'Produto cadastrado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }

  return (
    <S.Container>
      <S.ContainerProduto>
        <FormCusto custo={custo} setCusto={setCusto} handleSubmit={createPost} />
      </S.ContainerProduto>
    </S.Container>
  );
};
