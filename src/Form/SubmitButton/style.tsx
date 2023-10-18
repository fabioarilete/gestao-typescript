import styled from 'styled-components';

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #08a67c;
  color: #fff;
  padding: auto;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    font-weight: bold;
    color: #08a67c;
    background-color: #fff;
    border: 2px solid #08a67c;
  }
`;
