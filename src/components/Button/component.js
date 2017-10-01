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

  &:disabled, &[disabled] {
    color: ${({ theme }) => theme.grayLighter};
    background-color: ${({ theme }) => theme.whiteGray};
    cursor: default;
    box-shadow: none;
  }
`;

export default Button;
