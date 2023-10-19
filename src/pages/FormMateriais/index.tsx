import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Select } from '../../Form/Select';
import { RadioButton } from '../../Form/RadioButton';
import { MaterialTypes } from '../Material/types/MaterialTypes';

interface FormMateriaisProps {
  material: MaterialTypes;
  setMaterial: Dispatch<SetStateAction<MaterialTypes>>;
  handleSubmit(material: MaterialTypes): void;
}

export const FormMateriais = ({ material, setMaterial, handleSubmit }: FormMateriaisProps) => {
  const totalMaterial = useMemo(() => {
    const valorFrete = material.preco * (material.frete / 100);
    const valorIcms = material.preco * (material.icms / 100);
    return material.preco - valorIcms + valorFrete;
  }, [material]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...material, total: totalMaterial });
  }

  return (
    <S.Container>
      <S.FormMateriais onSubmit={_handleSubmit}>
        <S.Title>Cadastro de Materiais</S.Title>
        <Input
          type="text"
          label="Descrição do material"
          name="name"
          placeholder="Descreva o material"
          value={material.name}
          onChange={event =>
            setMaterial({
              ...material,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Valor"
          name="preco"
          placeholder="Informe o valor do material"
          value={material.preco}
          onChange={event =>
            setMaterial({
              ...material,
              preco: parseFloat(event.target.value),
            })
          }
        />

        <Select
          label="Unidade"
          name="unid"
          value={material.unid}
          onChange={event =>
            setMaterial({
              ...material,
              unid: event.currentTarget.value,
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="Frete"
          name="frete"
          placeholder="Informe o % de Frete"
          value={material.frete}
          onChange={event =>
            setMaterial({
              ...material,
              frete: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="NF"
          name="nf"
          placeholder="Informe o % de NF"
          value={material.nf}
          onChange={event =>
            setMaterial({
              ...material,
              nf: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="Aliquota de ICMS"
          name="icms"
          placeholder="Informe o % de ICMS"
          value={material.icms}
          onChange={event =>
            setMaterial({
              ...material,
              icms: parseFloat(event.target.value),
            })
          }
        />

        <S.Label>Tipo de Fornecedor</S.Label>
        <S.ContainerRadio>
          <RadioButton
            name="tipoFornecedor"
            label="Simples"
            value={1}
            onChange={event =>
              setMaterial({
                ...material,
                tipoFornecedor: event.target.value,
              })
            }
          />
          <RadioButton
            name="tipoFornecedor"
            label="Presumido"
            value={0}
            onChange={event =>
              setMaterial({
                ...material,
                tipoFornecedor: event.target.value,
              })
            }
          />
        </S.ContainerRadio>

        <SubmitButton type="submit">Cadastrar Material</SubmitButton>
      </S.FormMateriais>
    </S.Container>
  );
};
