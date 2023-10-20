import * as S from './Home.style';
import logo from '../../img/logo.png';

export const Home = () => {
  return (
    <S.Container>
      <S.H1>
        Bem-vindo ao <S.Span>Custos</S.Span>
      </S.H1>
      <S.P>Comece agora a gerir seus custos</S.P>
      <S.Img src={logo} />
    </S.Container>
  );
};
