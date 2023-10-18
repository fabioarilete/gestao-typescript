import './style.css';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { Message } from '../../components/Message/index';
import { useParams } from 'react-router-dom';
import { OperacaoTypes } from './types/OperacaoTypes';
import { FormOperacoes } from '../FormOperacoes';
import formatCurrency from '../../utils/formatCurrency';

const inicialState: OperacaoTypes = {
  id: '',
  name: '',
  unid: '',
  valor: 0,
};

export const Operacao = () => {
  const [operacao, setOperacao] = useState<OperacaoTypes>(inicialState);
  const [message, setMessage] = useState<any>();
  const [type, setType] = useState<any>();
  const [showFormOperacao, setShowFormOperacao] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/listaOperacoes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'applicatio/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setOperacao(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, [id]);

  function editPost(operacao: any) {
    setMessage('');

    fetch(`http://localhost:5000/listaOperacoes/${operacao.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(operacao),
    })
      .then(resp => resp.json())
      .then(data => {
        setOperacao(data);
        setShowFormOperacao(false);
        setMessage('Operação atualizada!');
        setType('success');
      })
      .catch(err => console.log(err));
  }

  function toggleFormOperacao() {
    setShowFormOperacao(!showFormOperacao);
  }

  return (
    <Container>
      {operacao.name ? (
        <div className="containerOperacao">
          {message && <Message type={type} msg={message} />}
          <div className="containerTitulo">
            <div className="titulo">
              <h1>{operacao.name}</h1>
              <div className="button">
                <button onClick={toggleFormOperacao}>{!showFormOperacao ? 'Editar operação' : 'Fechar'}</button>
              </div>
            </div>

            {!showFormOperacao ? (
              <div className="containerInfo">
                <div className="div20">
                  <div>
                    <p>
                      <span>Valor:</span>
                      {formatCurrency(operacao.valor, 'BRL')}
                    </p>
                  </div>
                </div>
                <div className="div10">
                  <div>
                    <p>
                      <span>Unidade:</span>
                      {operacao.unid}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="form">
                <FormOperacoes operacao={operacao} setOperacao={setOperacao} handleSubmit={editPost} />
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
