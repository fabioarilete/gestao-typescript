import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { MarkUpTypes } from '../MarkUp/types/MarkUpTypes';

interface FormMarkUpsProps {
  markUp: MarkUpTypes;
  setMarkUp: Dispatch<SetStateAction<MarkUpTypes>>;
  handleSubmit(markUp: MarkUpTypes): void;
}

export const FormMarkUps = ({ markUp, setMarkUp, handleSubmit }: FormMarkUpsProps) => {
  const coef = useMemo(() => {
    const encargos =
      markUp.impostos +
      markUp.adm +
      markUp.comissao +
      markUp.frete +
      markUp.financeiro +
      markUp.marketing +
      markUp.promotores +
      markUp.bonificacoes +
      markUp.lucro;

    const coeficiente = 100 / (100 - encargos);

    return parseFloat(coeficiente.toFixed(2));
  }, [markUp]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...markUp, coeficiente: coef });
  }

  return (
    <S.Container>
      <S.FormMarkUps onSubmit={_handleSubmit}>
        <S.Title>Cadastro de Mark Ups</S.Title>

        <Input
          type="text"
          label="Descrição do Mark Up"
          name="name"
          placeholder="Descreva o Mark Up"
          value={markUp.name}
          onChange={event =>
            setMarkUp({
              ...markUp,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Impostos"
          name="impostos"
          placeholder="Informe o % de impostos"
          value={markUp.impostos}
          onChange={event =>
            setMarkUp({
              ...markUp,
              impostos: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Comissão"
          name="impostos"
          placeholder="Informe o % de comissão"
          value={markUp.comissao}
          onChange={event =>
            setMarkUp({
              ...markUp,
              comissao: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Administração"
          name="adm"
          placeholder="Informe o % de administração"
          value={markUp.adm}
          onChange={event =>
            setMarkUp({
              ...markUp,
              adm: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Frete"
          name="frete"
          placeholder="Informe o % de frete"
          value={markUp.frete}
          onChange={event =>
            setMarkUp({
              ...markUp,
              frete: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Financeiro"
          name="financeiro"
          placeholder="Informe o % de financeiro"
          value={markUp.financeiro}
          onChange={event =>
            setMarkUp({
              ...markUp,
              financeiro: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Marketing"
          name="marketing"
          placeholder="Informe o % de marketing"
          value={markUp.marketing}
          onChange={event =>
            setMarkUp({
              ...markUp,
              marketing: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Promotores"
          name="promotores"
          placeholder="Informe o % de Promotores"
          value={markUp.promotores}
          onChange={event =>
            setMarkUp({
              ...markUp,
              promotores: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Bonificações"
          name="bonificacoes"
          placeholder="Informe o % de bonificações"
          value={markUp.bonificacoes}
          onChange={event =>
            setMarkUp({
              ...markUp,
              bonificacoes: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Lucro"
          name="lucro"
          placeholder="Informe o % de lucro"
          value={markUp.lucro}
          onChange={event =>
            setMarkUp({
              ...markUp,
              lucro: parseFloat(event.target.value),
            })
          }
        />

        <SubmitButton type="submit">Cadastrar Mark Up</SubmitButton>
      </S.FormMarkUps>
    </S.Container>
  );
};
