import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 1em;
`;

export const Ul = styled.ul`
  font-weight: bold;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 1em;
`;

export const Img = styled.img`
  width: 180px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffbb33;
  }
`;
