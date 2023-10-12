import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.6em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.7em;
  border-radius: 0;
  border: 0.5px solid #7b7b7b;
  font-size: 18px;

  &::placeholder {
    color: #7b7b7b;
  }
`;
