import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

type Props = {
  id: string;
  name: string;
  valor: number;
  unid: string;
  handleRemove(id: string): void;
};

export const CardOperacoes = ({ id, name, valor, unid, handleRemove }: Props) => {
  function handleRemoveClick() {
    handleRemove(id);
  }

  return (
    <S.Box>
      <S.ContainerOperacao>
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
      </S.ContainerOperacao>
    </S.Box>
  );
};
