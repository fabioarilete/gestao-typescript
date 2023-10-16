import * as S from './style';
import { Link } from 'react-router-dom';
import logo from '../../img/logo São Francisco.png';

console.log(typeof Link);

export const SideBar = () => {
  return (
    <S.Container>
      <S.Link href="/">
        <S.Img src={logo} alt="São Francisco" />
      </S.Link>
      <S.Ul>
        <S.Li>
          <S.Link href="/">Home</S.Link>
        </S.Li>
        <S.Li>
          <S.Link href="/cadastro">Cadastro</S.Link>
        </S.Li>
      </S.Ul>
    </S.Container>
  );
};
