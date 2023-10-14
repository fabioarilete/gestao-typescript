import { LinkButton } from '../../components/LinkButton';
import * as S from './Cadastro.style';

export const Cadastro = () => {
  return (
    <>
      <S.Container>
        <S.Title>Cadastrar</S.Title>
        <S.ItensCadastro>
          <LinkButton href="/materiais" text="Materiais" />
          <LinkButton href="/operacoes" text="Operações" />
          <LinkButton href="/markUps" text="Mark Up" />
        </S.ItensCadastro>
      </S.Container>

      <S.Container>
        <S.Title>Editar</S.Title>
        <S.ItensEdicao>
          <LinkButton href="/listaMateriais" text="Materiais" />
          <LinkButton href="/listaOperacoes" text="Operações" />
          <LinkButton href="/listaMarkUps" text="Mark Up" />
        </S.ItensEdicao>
      </S.Container>
    </>
  );
};
