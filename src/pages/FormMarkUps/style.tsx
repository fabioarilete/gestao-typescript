import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
`;

export const FormMarkUps = styled.form`
  width: 550px;
  margin: -40px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  border-radius: 5px;
  background: black;
  font-size: 30px;
  color: #ffbb33;
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
  border: 1px solid #646464;
`;

export const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 18px;
`;
