import './style.css';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { Message } from '../../components/Message/index';
import { useParams } from 'react-router-dom';
import { MarkUpTypes } from './types/MarkUpTypes';
import { FormMarkUps } from '../FormMarkUps';

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

export const MarkUp = () => {
  const [markUp, setMarkUp] = useState<MarkUpTypes>(inicialState);
  const [message, setMessage] = useState<any>();
  const [type, setType] = useState<any>();
  const [showFormMarkUp, setShowFormMarkUp] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/listaMarkUps/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'applicatio/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setMarkUp(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, [id]);

  function editPost(markUp: any) {
    setMessage('');

    fetch(`http://localhost:5000/listaMarkUps/${markUp.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(markUp),
    })
      .then(resp => resp.json())
      .then(data => {
        setMarkUp(data);
        setShowFormMarkUp(false);
        setMessage('Mark Up atualizado!');
        setType('success');
      })
      .catch(err => console.log(err));
  }

  function toggleFormMarkUp() {
    setShowFormMarkUp(!showFormMarkUp);
  }

  return (
    <Container>
      {markUp.name ? (
        <div className="containerMarkUp">
          {message && <Message type={type} msg={message} />}
          <div className="containerTitulo">
            <div className="titulo">
              <h1>{markUp.name}</h1>
              <div className="button">
                <button onClick={toggleFormMarkUp}>{!showFormMarkUp ? 'Editar Mark Up' : 'Fechar'}</button>
              </div>
            </div>

            {!showFormMarkUp ? (
              <div className="containerInfo">
                <div className="item">
                  <span>Impostos:</span>
                  <p>{markUp.impostos}%</p>
                </div>
                <div className="item">
                  <span>Comissão:</span>
                  <p>{markUp.comissao}%</p>
                </div>
                <div className="item">
                  <span>Administração:</span>
                  <p>{markUp.adm}%</p>
                </div>
                <div className="item">
                  <span>Frete:</span>
                  <p>{markUp.frete}%</p>
                </div>
                <div className="item">
                  <span>Financeiro:</span>
                  <p>{markUp.financeiro}%</p>
                </div>
                <div className="item">
                  <span>Marketing:</span>
                  <p>{markUp.marketing}%</p>
                </div>
                <div className="item">
                  <span>Promotores:</span>
                  <p>{markUp.promotores}%</p>
                </div>
                <div className="item">
                  <span>Bonificações:</span>
                  <p>{markUp.bonificacoes}%</p>
                </div>
                <div className="item">
                  <span>Lucro:</span>
                  <p>{markUp.lucro}%</p>
                </div>
                <div className="coef">
                  <span>Coeficiente:</span>
                  <p>{markUp.coeficiente}%</p>
                </div>
              </div>
            ) : (
              <div className="form">
                <FormMarkUps markUp={markUp} setMarkUp={setMarkUp} handleSubmit={editPost} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  );
};
