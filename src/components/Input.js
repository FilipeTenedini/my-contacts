import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: #FFF;
  border: 2px solid #FFF;
  outline: none;
  font-size: 16px;
  transition: .2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main};

    &:focus {
      border-color: ${theme.colors.danger.main};
    }
  `}
`;
