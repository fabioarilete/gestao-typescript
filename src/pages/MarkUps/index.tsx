import { useEffect, useState } from 'react';
import * as S from './style';
import { LinkButton } from '../../components/LinkButton';
import { useLocation } from 'react-router-dom';
import { Message } from '../../components/Message';
import Loading from '../../components/Loading';
import { CardMarkUps } from '../CardMarkUps';

export const MarkUps = () => {
  const [markUps, setMarkUps] = useState<any[]>([]);
  const [markUpMessage, setMarkUpMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/listaMarkUps`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setMarkUps(data);
          setRemoveLoading(true);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  function handleRemove(id: string) {
    fetch(`http://localhost:5000/listaMarkUps/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        setMarkUps(markUps.filter(markUp => markUp.id !== id));
        setMarkUpMessage('Mark Up removido com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <S.ContainerMarkUps>
      <S.TitleContainer>
        <S.Title>Mark Ups</S.Title>
        <LinkButton to="/markUps" text="Cadastrar novo Mark Up" />
      </S.TitleContainer>
      {markUpMessage && <Message type="success" msg={markUpMessage} />}
      <S.ContainerCards>
        {markUps.map(markUp => (
          <CardMarkUps
            handleRemove={handleRemove}
            id={markUp.id}
            name={markUp.name}
            impostos={markUp.impostos}
            comissao={markUp.comissao}
            adm={markUp.adm}
            frete={markUp.frete}
            financeiro={markUp.financeiro}
            marketing={markUp.marketing}
            promotores={markUp.promotores}
            bonificacoes={markUp.bonificacoes}
            lucro={markUp.lucro}
            coeficiente={markUp.coeficiente}
            key={markUp.id}
          />
        ))}
      </S.ContainerCards>
      {!removeLoading && <Loading />}
      {removeLoading && markUps.length === 0 && <p>Não há Mark Ups cadastrados</p>}
    </S.ContainerMarkUps>
  );
};
