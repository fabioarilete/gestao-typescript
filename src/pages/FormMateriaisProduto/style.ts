import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  display: grid;
  place-items: center;
  padding: 10px;
  background-color: #f6f6f1;
  border-radius: 10px;
  box-shadow: 2px 2px 4px grey;
`;

export const FormMateriais = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  width: 95%;
  border-radius: 5px;
  font-size: 30px;
  color: #08a67c;
  padding: 5px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ContainerRadio = styled.div`
  border-radius: 5px;
  background-color: #fff;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: end;
  border: 1px solid #08a67c;
`;

export const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 18px;
  color: #7b7b7b;
`;
