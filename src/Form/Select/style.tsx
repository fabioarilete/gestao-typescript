import styled from 'styled-components';

export const Select = styled.select`
  padding: 0.7em;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0.5px solid #7b7b7b;
  font-size: 18px;

  &::placeholder {
    color: #7b7b7b;
  }
`;

export const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 18px;
`;
