import './style.css';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { FormMateriais } from '../FormMateriais';
import { Message } from '../../components/Message/index';
import { useParams } from 'react-router-dom';
import { MaterialTypes } from './types/MaterialTypes';
import formatCurrency from '../../utils/formatCurrency';

const inicialState: MaterialTypes = {
  id: '',
  name: '',
  preco: 0,
  frete: 0,
  icms: 0,
  nf: 0,
  tipoFornecedor: '',
  total: 0,
  unid: '',
};

export const Material = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const [message, setMessage] = useState<any>();
  const [type, setType] = useState<any>();
  const [showFormMaterial, setShowFormMaterial] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/materiaPrima/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'applicatio/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setMaterial(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, [id]);

  function editPost(material: any) {
    setMessage('');

    fetch(`http://localhost:5000/materiaPrima/${material.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(material),
    })
      .then(resp => resp.json())
      .then(data => {
        setMaterial(data);
        setShowFormMaterial(false);
        setMessage('Material atualizado!');
        setType('success');
      })
      .catch(err => console.log(err));
  }

  function toggleFormMaterial() {
    setShowFormMaterial(!showFormMaterial);
  }

  return (
    <Container>
      {material.name ? (
        <div className="containerMaterial">
          {message && <Message type={type} msg={message} />}
          <div className="containerTitulo">
            <div className="titulo">
              <h1>{material.name}</h1>
              <div className="button">
                <button onClick={toggleFormMaterial}>{!showFormMaterial ? 'Editar material' : 'Fechar'}</button>
              </div>
            </div>

            {!showFormMaterial ? (
              <div className="containerInfo">
                <div className="div20">
                  <div>
                    <p>
                      <span>Preço Inicial:</span>
                      {formatCurrency(material.preco, 'BRL')} {material.unid}
                    </p>
                  </div>
                </div>
                <div className="div10">
                  <div>
                    <p>
                      <span>Frete:</span>
                      {material.frete} %
                    </p>
                  </div>
                </div>
                <div className="div10">
                  <div>
                    <p>
                      <span>NF:</span>
                      {material.nf} %
                    </p>
                  </div>
                </div>
                <div className="div10">
                  <div>
                    <p>
                      <span>ICMS:</span>
                      {material.icms} %
                    </p>
                  </div>
                </div>
                <div className="div10">
                  <div>
                    <p>
                      <span>Fornecedor:</span>
                      {material.tipoFornecedor === '1' ? 'Simples' : 'Presumido'}
                    </p>
                  </div>
                </div>
                <div className="div20">
                  <div>
                    <p>
                      <span>Preço Final:</span>
                      {formatCurrency(material.total, 'BRL')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="form">
                <FormMateriais material={material} setMaterial={setMaterial} handleSubmit={editPost} />
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
