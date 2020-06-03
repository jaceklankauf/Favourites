import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(55, 0%, 83%);
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
