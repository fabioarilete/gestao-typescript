import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

type Props = {
  name: string;
  impostos: number;
  comissao: number;
  adm: number;
  frete: number;
  financeiro: number;
  marketing: number;
  promotores: number;
  bonificacoes: number;
  lucro: number;
  coeficiente: number;
  id: number;
  handleRemove(id: string): void;
};

export const CardMarkUps = ({
  id,
  name,
  impostos,
  comissao,
  adm,
  frete,
  financeiro,
  marketing,
  promotores,
  bonificacoes,
  lucro,
  coeficiente,
  handleRemove,
}: Props) => {
  function handleRemoveClick() {
    handleRemove(id);
  }

  return (
    <S.Box>
      <S.ContainerMarkUp>
        <S.ContainerTitle>
          <S.Title>{name}</S.Title>
        </S.ContainerTitle>
        <S.ContainerInfo>
          <S.Container20>
            <S.Span>Valor:</S.Span>
            <S.P>
              {formatCurrency(valor, 'BRL')} {unid}
            </S.P>
          </S.Container20>
        </S.ContainerInfo>
        <S.ContainerActions>
          {' '}
          <S.ButtonEdit href={`listaOperacoes/${id}`}>
            <BsPencil /> Editar
          </S.ButtonEdit>
          <S.ButtonRemove onClick={handleRemoveClick}>
            <BsFillTrashFill /> Excluir
          </S.ButtonRemove>
        </S.ContainerActions>
      </S.ContainerMarkUp>
    </S.Box>
  );
};
