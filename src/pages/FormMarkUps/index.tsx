import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormState {
  impostos: number;
  name: string;
  adm: number;
  frete: number;
  financeiro: number;
  comissao: number;
  marketing: number;
  bonificacoes: number;
  promotores: number;
  lucro: number;
}

export const FormMarkUps = () => {
  const [markUp, setMarkUp] = useState<FormState>({
    name: '',
    impostos: '' as any,
    adm: '' as any,
    comissao: '' as any,
    frete: '' as any,
    financeiro: '' as any,
    marketing: '' as any,
    promotores: '' as any,
    bonificacoes: '' as any,
    lucro: '' as any,
  });

  const navigate = useNavigate();

  function createPost() {
    fetch('http://localhost:5000/markUps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...markUp }),
    })
      .then(res => res.json())
      .then(data => {
        navigate('/listaMarkUps', {
          state: { message: 'Mark Up cadastrado com sucesso!' },
        });
      })
      .catch(e => console.log(e));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, impostos, comissao, adm, frete, marketing, promotores, financeiro, bonificacoes, lucro } = markUp;

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

    createPost();

    window.alert('Sucesso!');
  }

  return (
    <S.Container>
      <S.FormMarkUps onSubmit={handleSubmit}>
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
