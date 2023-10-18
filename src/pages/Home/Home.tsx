import * as S from './Home.style';
import imagem from '../../img/logo São Francisco.png';

export const Home = () => {
  return (
    <S.Container>
      <S.H1>
        Bem-vindo ao <S.Span>Custos</S.Span>
      </S.H1>
      <S.Img src={imagem} />
    </S.Container>
  );
};
