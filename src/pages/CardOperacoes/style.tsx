import styled from 'styled-components';

export const Box = styled.div`
  width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ContainerOperacao = styled.div`
  padding: 0.2em;
  border-radius: 5px;
  box-shadow: 1px 1px 2px grey;
  width: 100%;
  margin: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ContainerTitle = styled.div`
  width: 50%;
  display: flex;
`;

export const ContainerInfo = styled.div`
  width: 30%;
  display: block;
`;

export const ContainerActions = styled.div`
  width: 20%;
  display: flex;
  justify-content: end;
`;

export const Container20 = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-around;
`;

export const Title = styled.h3`
  height: 30px;
  width: 75%;
  margin: 0;
  padding: 0 10px;
  background: #08a67c;
  color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 2px grey;
`;

export const Span = styled.span``;

export const P = styled.p`
  font-weight: bold;
`;

export const ButtonRemove = styled.button`
  text-decoration: none;
  border: none;
  background-color: red;
  color: #fff;
  font-size: 0.9em;
  padding: 0.4em 0.8em;
  cursor: pointer;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 5px;
  margin-left: 5px;

  &:hover {
    background-color: #fff;
    color: red;
    border: 2px solid red;
  }
`;

export const ButtonEdit = styled.a`
  text-decoration: none;
  border: none;
  background-color: blue;
  color: #fff;
  font-size: 0.9em;
  padding: 0.4em 0.8em;
  cursor: pointer;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #fff;
    color: blue;
    border: 2px solid blue;
  }
`;
