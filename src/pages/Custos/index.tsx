import { useEffect, useState } from 'react';
import * as S from './style';
import { LinkButton } from '../../components/LinkButton';
import { useLocation } from 'react-router-dom';
import { Message } from '../../components/Message';
import Loading from '../../components/Loading';
import { CardCustos } from '../CardCustos';

export const Custos = () => {
  const [custos, setCustos] = useState<any[]>([]);
  const [custoMessage, setCustoMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/produtos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setCustos(data);
          setRemoveLoading(true);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  function handleRemove(id: string) {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        setCustos(custos.filter(custo => custo.id !== id));
        setCustoMessage('Custo removido com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <S.ContainerCustos>
      <S.TitleContainer>
        <S.Title>Custos dos produtos</S.Title>
        <LinkButton to="/custos" text="Cadastrar novo produto" />
      </S.TitleContainer>
      {custoMessage && <Message type="success" msg={custoMessage} />}
      <S.ContainerCards>
        {custos.map(custo => (
          <CardCustos
            handleRemove={handleRemove}
            id={custo.id}
            name={custo.name}
            preco={custo.preco}
            unid={custo.unid}
            frete={custo.frete}
            nf={custo.nf}
            icms={custo.icms}
            tipoFornecedor={custo.tipoFornecedor}
            total={custo.total}
            key={custo.id}
          />
        ))}
      </S.ContainerCards>
      {!removeLoading && <Loading />}
      {removeLoading && custos.length === 0 && <p>Não há custos cadastrados</p>}
    </S.ContainerCustos>
  );
};
