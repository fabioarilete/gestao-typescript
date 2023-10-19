import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

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
  id: string;
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
            <S.Span>Impostos:</S.Span>
            <S.P>{impostos}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Comissão:</S.Span>
            <S.P>{comissao}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Administração:</S.Span>
            <S.P>{adm}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Frete:</S.Span>
            <S.P>{frete}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Financeiro:</S.Span>
            <S.P>{financeiro}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Marketing:</S.Span>
            <S.P>{marketing}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Promotores:</S.Span>
            <S.P>{promotores}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Bonificações:</S.Span>
            <S.P>{bonificacoes}%</S.P>
          </S.Container20>
          <S.Container20>
            <S.Span>Lucro:</S.Span>
            <S.P>{lucro}%</S.P>
          </S.Container20>
          <S.ContainerCoef>
            <S.Span>Coeficiente:</S.Span>
            <S.P>{coeficiente}</S.P>
          </S.ContainerCoef>
        </S.ContainerInfo>
        <S.ContainerActions>
          <S.ButtonEdit href={`listaMarkUps/${id}`}>
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
