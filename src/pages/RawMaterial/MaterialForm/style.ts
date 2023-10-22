import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;
`;
