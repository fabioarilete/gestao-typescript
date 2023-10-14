import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from '../../Form/Select';
import { RadioButton } from '../../Form/RadioButton';

interface FormState {
  valor: number;
  name: string;
  unid: string;
}

export const FormOperacoes = () => {
  const [operacao, setOperacao] = useState<FormState>({
    valor: '' as any,
    name: '',
    unid: '',
  });
  const navigate = useNavigate();

  function createPost() {
    fetch('http://localhost:5000/listaOperacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...operacao }),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/operacoes', {
          state: { message: 'Material cadastrado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, valor, unid } = operacao;

    if (!name || !valor || !unid) {
      window.alert('Preencha todos os campos!');
      return;
    }

    createPost();

    window.alert('Sucesso!');
  }

  return (
    <S.Container>
      <S.FormOperacoes onSubmit={handleSubmit}>
        <S.Title>Cadastro de Operações</S.Title>

        <Input
          type="text"
          label="Descrição da Operação"
          name="name"
          placeholder="Descreva a operação"
          value={operacao.name}
          onChange={event =>
            setOperacao({
              ...operacao,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Valor"
          name="valorOperacao"
          placeholder="Informe o valor da Operação"
          value={operacao.valor}
          onChange={event =>
            setOperacao({
              ...operacao,
              valor: parseFloat(event.target.value),
            })
          }
        />

        <Select
          label="Unidade"
          name="unid"
          value={operacao.unid}
          onChange={event =>
            setOperacao({
              ...operacao,
              unid: event.currentTarget.value,
            })
          }
        />

        <SubmitButton type="submit">Cadastrar Operação</SubmitButton>
      </S.FormOperacoes>
    </S.Container>
  );
};
