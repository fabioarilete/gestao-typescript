import * as S from './style';
import { Input } from '../../Form/Input';
import { SubmitButton } from '../../Form/SubmitButton';
import React, { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Select } from '../../Form/Select';
import { MaterialProdutoTypes } from './types/MaterialProduto';
import { SelectOptions } from '../../Form/SelectOptions';

interface FormMateriaisProdutoProps {
  materialProduto: MaterialProdutoTypes;
  setMaterialProduto: Dispatch<SetStateAction<MaterialProdutoTypes>>;
}

export const FormMateriaisProduto = ({ materialProduto, setMaterialProduto }: FormMateriaisProdutoProps) => {
  const [materiais, setMateriais] = useState<MaterialProdutoTypes[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/materiaPrima', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setMateriais(data);
      })
      .catch(e => console.log(e));
  }, []);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setMateriais({ ...materiais, [e.target.name]: e.target.value });
  }

  return (
    <S.Container>
      <S.FormMateriais>
        <S.Title>Cadastro de Materiais</S.Title>

        <SelectOptions onChange={handleChange} label="Matéria-prima">
          {materiais.map(item => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </SelectOptions>

        <Input
          type="text"
          label="Observação"
          name="obs"
          placeholder="Faça uma observação"
          value={materialProduto.obs}
          onChange={event =>
            setMaterialProduto({
              ...materialProduto,
              obs: event.currentTarget.value.toUpperCase(),
            })
          }
        />

        <Input
          step={0.001}
          type="number"
          label="Quantidade"
          name="qt"
          placeholder="Informe a quantidade de material"
          value={materialProduto.qt}
          onChange={event =>
            setMaterialProduto({
              ...materialProduto,
              qt: parseFloat(event.target.value),
            })
          }
        />

        <Select
          label="Unidade"
          name="unid"
          value={materialProduto.unid}
          onChange={event =>
            setMaterialProduto({
              ...materialProduto,
              unid: event.currentTarget.value,
            })
          }
        />

        {/* <SubmitButton type="submit">Cadastrar Material</SubmitButton> */}
      </S.FormMateriais>
    </S.Container>
  );
};
