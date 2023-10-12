import { FormMateriais } from '../FormMateriais';
import * as S from './style';

export const CadastroMateriais = () => {
  return (
    <S.Container>
      <S.ContainerCadastro>
        <S.Title></S.Title>
        <FormMateriais />
      </S.ContainerCadastro>
    </S.Container>
  );
};
