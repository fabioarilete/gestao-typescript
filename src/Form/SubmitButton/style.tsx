import styled from 'styled-components';

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: black;
  color: #fff;
  padding: 0.7em 1.2em;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    font-weight: bold;
    color: black;
    background-color: #ffbb33;
  }
`;
