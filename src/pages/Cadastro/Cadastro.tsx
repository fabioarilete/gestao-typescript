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
          <LinkButton href="/unidades" text="Unidades" />
          <LinkButton href="/embalagens" text="Embalagens" />
        </S.ItensCadastro>
      </S.Container>

      <S.Container>
        <S.Title>Editar</S.Title>
        <S.ItensEdicao>
          <LinkButton href="/listaMateriais" text="Materiais" />
          <LinkButton href="/listaOperacoes" text="Operações" />
          <LinkButton href="/listaMarkUps" text="Mark Up" />
          <LinkButton href="/listaUnidades" text="Unidades" />
          <LinkButton href="/listaEmbalagens" text="Embalagens" />
        </S.ItensEdicao>
      </S.Container>
    </>
  );
};
