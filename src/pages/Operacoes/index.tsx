import { useEffect, useState } from 'react';
import * as S from './style';
import { LinkButton } from '../../components/LinkButton';
import { useLocation } from 'react-router-dom';
import { Message } from '../../components/Message';
import Loading from '../../components/Loading';
import { CardOperacoes } from '../CardOperacoes';

export const Operacoes = () => {
  const [operacoes, setOperacoes] = useState<any[]>([]);
  const [operacaoMessage, setOperacaoMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/listaOperacoes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setOperacoes(data);
          setRemoveLoading(true);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  function handleRemove(id: string) {
    fetch(`http://localhost:5000/listaOperacoes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        setOperacoes(operacoes.filter(operacao => operacao.id !== id));
        setOperacaoMessage('Operação removida com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <S.ContainerMateriais>
      <S.TitleContainer>
        <S.Title>Operações</S.Title>
        <LinkButton to="/operacoes" text="Cadastrar nova operação" />
      </S.TitleContainer>
      {operacaoMessage && <Message type="success" msg={operacaoMessage} />}
      <S.ContainerCards>
        {operacoes.map(operacao => (
          <CardOperacoes
            handleRemove={handleRemove}
            id={operacao.id}
            name={operacao.name}
            valor={operacao.valor}
            unid={operacao.unid}
            key={operacao.id}
          />
        ))}
      </S.ContainerCards>
      {!removeLoading && <Loading />}
      {removeLoading && operacoes.length === 0 && <p>Não há operações cadastradas</p>}
    </S.ContainerMateriais>
  );
};
