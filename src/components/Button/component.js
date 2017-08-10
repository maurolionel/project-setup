import styled from 'styled-components';
import { darken } from 'polished';
import Paper from '../Paper';

const PaperButton = Paper.withComponent('button');

const Button = styled(PaperButton)`
  color: ${({ primary, theme }) => (primary ? theme.base : theme.gray)};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.whiteGray)};
  cursor: pointer;

  &:active {
    color: ${({ primary, theme }) => darken(0.05, primary ? theme.base : theme.gray)};
    background-color: ${({ primary, theme }) => darken(0.05, primary ? theme.accent : theme.whiteGray)};
  }
`;

export default Button;
