import { useEffect, useState } from 'react';
import * as S from './style';
import { LinkButton } from '../../components/LinkButton';
import { useLocation } from 'react-router-dom';
import { CardMateriais } from '../CardMateriais';
import { Message } from '../../components/Message';
import Loading from '../../components/Loading';

export const Materiais = () => {
  const [materiais, setMateriais] = useState<any[]>([]);
  const [materialMessage, setMaterialMessage] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/materiaPrima`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setMateriais(data);
          setRemoveLoading(true);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  function handleRemove(id: string) {
    fetch(`http://localhost:5000/materiaPrima/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        setMateriais(materiais.filter(material => material.id !== id));
        setMaterialMessage('Material removido com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <S.ContainerMateriais>
      <S.TitleContainer>
        <S.Title>Matérias-primas</S.Title>
        <LinkButton to="/materiais" text="Cadastrar nova matéria-prima" />
      </S.TitleContainer>
      {materialMessage && <Message type="success" msg={materialMessage} />}
      <S.ContainerCards>
        {materiais.map(material => (
          <CardMateriais
            handleRemove={handleRemove}
            id={material.id}
            name={material.name}
            preco={material.preco.toFixed(2)}
            unid={material.unid}
            total={material.total.toFixed(2)}
            key={material.id}
          />
        ))}
      </S.ContainerCards>
      {!removeLoading && <Loading />}
      {removeLoading && materiais.length === 0 && <p>Não há matéria-prima cadastradas</p>}
    </S.ContainerMateriais>
  );
};
