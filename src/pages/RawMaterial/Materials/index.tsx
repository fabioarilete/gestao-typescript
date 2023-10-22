import * as S from './style';
import { useEffect, useState } from 'react';
import { Message } from '../../../components/Message';
import { useLocation } from 'react-router-dom';
import Loading from '../../../components/Loading';
import Container from '../../../components/Container';
import { MaterialForm } from '../MaterialForm';
import { MaterialList } from '../MaterialList';
import getMaterials from '../../../api/getMaterials';
import { MaterialTypes } from '../types/MaterialTypes';

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

const Materials = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const [materials, setMaterials] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      getMaterials().then(res => {
        setMaterials(res);
      });
    }, 300);
  }, []);

  function handleRemove() {}

  return (
    <Container>
      <S.Header>
        <h1>Materiais</h1>
        <button onClick={() => setOpen(!open)}>Cadastrar Material</button>
        <MaterialForm isOpen={open} material={material} setMaterial={setMaterial} setOpen={setOpen} />
      </S.Header>
      <S.ContainerList>
        {materials.map(material => (
          <MaterialList
            handleRemove={handleRemove}
            id={material.id}
            name={material.name}
            preco={material.preco}
            unid={material.unid}
            frete={material.frete.toFixed(0)}
            nf={material.nf.toFixed(0)}
            icms={material.icms.toFixed(0)}
            tipoFornecedor={material.tipoFornecedor}
            total={material.total}
            key={material.id}
          />
        ))}
      </S.ContainerList>
    </Container>
  );
};

export default Materials;
