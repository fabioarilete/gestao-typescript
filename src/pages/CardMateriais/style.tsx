import styled from 'styled-components';

export const ContainerCard = styled.div`
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 24%;
  margin: 0.5%;
`;

export const Title = styled.h4`
  background-color: black;
  color: #ffbb33;
  padding: 0.4em;
  margin-bottom: 1.3em;
  font-size: 1.3em;
`;

export const P = styled.p`
  color: #7a7a7a;
  margin-bottom: 1em;
`;

export const Span = styled.span`
  color: #7a7a7a;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const ContainerActions = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;
`;

export const ButtonRemove = styled.button`
  text-decoration: none;
  border: none;
  background-color: #fff;
  color: black;
  font-size: 0.9em;
  padding: 0.6em 1em;
  cursor: pointer;
  margin-right: 1em;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    background-color: black;
    color: #ffbb33;
  }
`;
