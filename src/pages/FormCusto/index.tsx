import * as S from './style';
import { Input } from '../../Form/Input';
import React, { Dispatch, SetStateAction } from 'react';
import { Select } from '../../Form/Select';
import { RadioButton } from '../../Form/RadioButton';
import { CustoTypes } from './types/CustoTypes';

interface FormCustoProps {
  custo: CustoTypes;
  setCusto: Dispatch<SetStateAction<CustoTypes>>;
  handleSubmit(custo: CustoTypes): void;
}

export const FormCusto = ({ custo, setCusto, handleSubmit }: FormCustoProps) => {
  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...custo, materiaisProduto: [], operacoesProduto: [] });
  }

  return (
    <S.Container>
      <S.FormCustos onSubmit={_handleSubmit}>
        <S.Title>Novo Produto</S.Title>
        <Input
          type="text"
          label="Código"
          name="cod"
          placeholder="Informe o código do produto"
          value={custo.cod}
          onChange={event =>
            setCusto({
              ...custo,
              cod: event.currentTarget.value,
            })
          }
        />
        <Input
          type="text"
          label="Descrição do produto"
          name="name"
          placeholder="Descreva o produto"
          value={custo.name}
          onChange={event =>
            setCusto({
              ...custo,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />

        <Select
          label="Unidade"
          name="unid"
          value={custo.unid}
          onChange={event =>
            setCusto({
              ...custo,
              unid: event.currentTarget.value,
            })
          }
        />

        <Input
          type="number"
          label="Quantidade"
          name="qt"
          placeholder="Informe a quantidade na embalagem"
          value={custo.qt}
          onChange={event =>
            setCusto({
              ...custo,
              qt: parseInt(event.target.value),
            })
          }
        />

        <S.Label>Tipo de produto</S.Label>
        <S.ContainerRadio>
          <RadioButton
            name="tipoProduto"
            label="Produzido"
            value={1}
            onChange={event =>
              setCusto({
                ...custo,
                tipoProduto: event.target.value,
              })
            }
          />
          <RadioButton
            name="tipoProduto"
            label="Revenda"
            value={0}
            onChange={event =>
              setCusto({
                ...custo,
                tipoProduto: event.target.value,
              })
            }
          />
        </S.ContainerRadio>

        <S.Label>Substituição Tributária?</S.Label>
        <S.ContainerRadio>
          <RadioButton
            name="st"
            label="Sim"
            value={1}
            onChange={event =>
              setCusto({
                ...custo,
                st: event.target.value,
              })
            }
          />
          <RadioButton
            name="st"
            label="Não"
            value={0}
            onChange={event =>
              setCusto({
                ...custo,
                st: event.target.value,
              })
            }
          />
        </S.ContainerRadio>

        <S.Label>São Francisco x Santa Tereza</S.Label>
        <S.ContainerRadio>
          <RadioButton
            name="sf_st"
            label="Sim"
            value={1}
            onChange={event =>
              setCusto({
                ...custo,
                sf_st: event.target.value,
              })
            }
          />
          <RadioButton
            name="sf_st"
            label="Não"
            value={0}
            onChange={event =>
              setCusto({
                ...custo,
                sf_st: event.target.value,
              })
            }
          />
        </S.ContainerRadio>
      </S.FormCustos>
    </S.Container>
  );
};
