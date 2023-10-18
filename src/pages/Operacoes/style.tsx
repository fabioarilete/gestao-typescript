import styled from 'styled-components';

export const ContainerMateriais = styled.div`
  padding: 1em;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  padding: 5px;
  &:hover {
    color: #ffbb33;
  }
`;

export const ContainerCards = styled.div`
  width: 1200px;
  display: flex;
  justify-content: start;
  margin: 0 auto;
  flex-wrap: wrap;
`;
