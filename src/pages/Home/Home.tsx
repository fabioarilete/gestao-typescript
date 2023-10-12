import * as S from './Home.style';
import imagem from '../../img/produtos-sfco.jpg';
import { LinkButton } from '../../components/LinkButton';

export const Home = () => {
  return (
    <S.Container>
      <S.H1>
        Bem-vindo ao <S.Span>Custos</S.Span>
      </S.H1>
      <S.P>Comece agora a gerir seus custos</S.P>
      <LinkButton href="novocusto" text="Criar Novo Custo" />
      <S.Img src={imagem} />
    </S.Container>
  );
};
