import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  background-color: black;
  height: 100px;
`;

export const Body = styled.div`
  background-color: red;
  color: yellow;
  font-size: 50px;
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;

export const Footer = styled.div`
  background-color: black;
  color: #fff;
  padding: 3em;
  text-align: center;
`;
