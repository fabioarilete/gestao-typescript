import * as S from './style';
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { MouseEvent } from 'react';

type Props = {
  id: string;
  name: string;
  preco: number;
  unid: string;
  total: number;
  handleRemove(id: string): void;
};

export const CardMateriais = ({ id, name, preco, unid, total, handleRemove }: Props) => {
  function handleRemoveClick() {
    handleRemove(id);
  }

  return (
    <S.ContainerCard>
      <S.Title>{name}</S.Title>
      <S.P>
        <S.Span>Preço inicial:</S.Span>
        {preco}
      </S.P>
      <S.P>
        <S.Span>Unidade:</S.Span>
        {unid}
      </S.P>
      <S.P>
        <S.Span>Preço final:</S.Span>
        {total}
      </S.P>
      <S.ContainerActions>
        <Link to={`materiaPrima/${id}`}>
          <BsPencil /> Editar
        </Link>
        <S.ButtonRemove onClick={handleRemoveClick}>
          <BsFillTrashFill /> Excluir
        </S.ButtonRemove>
      </S.ContainerActions>
    </S.ContainerCard>
  );
};
