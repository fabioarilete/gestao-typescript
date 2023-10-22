import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

type Props = {
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = ({ children, ...rest }) => {
  const [products, setProducts] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [operations, setOperations] = useState([]);

  const value = {
    products,
    setProducts,
    materials,
    setMaterials,
    operations,
    setOperations,
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/materialsList`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setMaterials(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/operationsList`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setOperations(data);
        })
        .catch(err => console.log(err));
    }, 300);
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
