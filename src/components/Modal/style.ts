import styled from 'styled-components';

export const ContainerModal = styled.div`
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

  .modal {
    position: relative;
    top: 50%;
    left: 50%;
    padding: 15px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 1pt 1pt 5pt black;
  }
`;
