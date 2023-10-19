import { useState } from 'react';
import { FormMarkUps } from '../FormMarkUps';
import { MarkUpTypes } from '../MarkUp/types/MarkUpTypes';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const inicialState: MarkUpTypes = {
  id: '',
  name: '',
  impostos: 0,
  comissao: 0,
  adm: 0,
  frete: 0,
  financeiro: 0,
  marketing: 0,
  promotores: 0,
  bonificacoes: 0,
  lucro: 0,
  coeficiente: 0,
};

export const CadastroMarkUps = () => {
  const [markUp, setMarkUp] = useState<MarkUpTypes>(inicialState);
  const navigate = useNavigate();

  function createPost(markUp: MarkUpTypes) {
    fetch('http://localhost:5000/listaMarkUps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(markUp),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/listaMarkUps', {
          state: { message: 'Mark Up cadastrado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }
  function handleSubmit(markUp: MarkUpTypes) {
    const { name, impostos, comissao, adm, frete, financeiro, marketing, promotores, bonificacoes, lucro } = markUp;

    if (
      !name ||
      !impostos ||
      !comissao ||
      !adm ||
      !frete ||
      !financeiro ||
      !marketing ||
      !promotores ||
      !bonificacoes ||
      !lucro
    ) {
      window.alert('Preencha todos os campos!');
      return;
    }

    createPost(markUp);
  }
  return (
    <S.Container>
      <S.ContainerMarkUp>
        <S.Title></S.Title>
        <FormMarkUps markUp={markUp} setMarkUp={setMarkUp} handleSubmit={handleSubmit} />
      </S.ContainerMarkUp>
    </S.Container>
  );
};
