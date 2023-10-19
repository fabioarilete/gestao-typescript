import { LinkButton } from '../../components/LinkButton';
import * as S from './Cadastro.style';

export const Cadastro = () => {
  return (
    <>
      <S.Container>
        <S.Title>Cadastrar</S.Title>
        <S.ItensCadastro>
          <LinkButton to="/materiais" text="Materiais" />
          <LinkButton to="/operacoes" text="Operações" />
          <LinkButton to="/markUps" text="Mark Up" />
        </S.ItensCadastro>
      </S.Container>

      <S.Container>
        <S.Title>Editar</S.Title>
        <S.ItensEdicao>
          <LinkButton to="/materiaPrima" text="Materiais" />
          <LinkButton to="/listaOperacoes" text="Operações" />
          <LinkButton to="/listaMarkUps" text="Mark Ups" />
        </S.ItensEdicao>
      </S.Container>
    </>
  );
};
