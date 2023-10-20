import { useNavigate } from 'react-router-dom';
import { FormOperacoes } from '../FormOperacoes';
import { OperacaoTypes } from '../Operacao/types/OperacaoTypes';
import * as S from './style';
import { useState } from 'react';

const inicialState: OperacaoTypes = {
  id: '',
  name: '',
  unid: '',
  valor: 0,
};

export const CadastroOperacoes = () => {
  const [operacao, setOperacao] = useState<OperacaoTypes>(inicialState);
  const navigate = useNavigate();

  function createPost(operacao: OperacaoTypes) {
    fetch('http://localhost:5000/listaOperacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(operacao),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/listaOperacoes', {
          state: { message: 'Operação cadastrada com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }
  function handleSubmit(operacao: OperacaoTypes) {
    const { name, unid, valor } = operacao;

    if (!name || !unid || !valor) {
      window.alert('Preencha todos os campos!');
      return;
    }

    createPost(operacao);
  }

  return (
    <S.Container>
      <S.ContainerCadastro>
        <FormOperacoes operacao={operacao} setOperacao={setOperacao} handleSubmit={handleSubmit} />
      </S.ContainerCadastro>
    </S.Container>
  );
};
