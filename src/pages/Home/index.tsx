import * as S from './style';

import logo from '../../img/logo.png';

type Props = {};

const Home = (props: Props) => {
  return (
    <S.Container>
      <h1 className="title">
        Bem-vindo ao <span className="span">Custos</span>
      </h1>
      <p className="slogan">Comece agora a gerir seus custos</p>
      <img className="logo" src={logo} alt="" />
    </S.Container>
  );
};

export default Home;
