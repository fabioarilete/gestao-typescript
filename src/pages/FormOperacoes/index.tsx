import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { Dispatch, SetStateAction } from 'react';
import { Select } from '../../Form/Select';
import { OperacaoTypes } from '../Operacao/types/OperacaoTypes';

interface FormOperacoesProps {
  operacao: OperacaoTypes;
  setOperacao: Dispatch<SetStateAction<OperacaoTypes>>;
  handleSubmit(operacao: OperacaoTypes): void;
}

export const FormOperacoes = ({ operacao, setOperacao, handleSubmit }: FormOperacoesProps) => {
  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...operacao });
  }

  return (
    <S.Container>
      <S.FormOperacoes onSubmit={_handleSubmit}>
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
