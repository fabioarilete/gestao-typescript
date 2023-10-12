import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';

const handleChange = () => {};

export const FormMateriais = () => {
  return (
    <S.FormMateriais>
      <Input
        type="text"
        text="Descrição do material"
        name="name"
        placeholder="Descreva o material"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        type="text"
        text="Valor"
        name="preco"
        placeholder="Informe o valor do material"
        handleOnChange={handleChange}
      />

      <Input
        step={0.01}
        type="number"
        text="Frete"
        name="frete"
        placeholder="Informe o % de Frete"
        handleOnChange={handleChange}
      />

      <Input
        step={0.01}
        type="number"
        text="NF"
        name="nf"
        placeholder="Informe o % de NF"
        handleOnChange={handleChange}
      />

      <Input
        step={0.01}
        type="number"
        text="Aliquota de ICMS"
        name="icms"
        placeholder="Informe o % de ICMS"
        handleOnChange={handleChange}
      />

      <Input
        step={0.01}
        type="number"
        text="Aliquota de IPI"
        name="ipi"
        placeholder="Informe o % de IPI"
        handleOnChange={handleChange}
      />
    </S.FormMateriais>
  );
};
