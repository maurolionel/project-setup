import styled from 'styled-components';
import { darken } from 'polished';
import Paper from '../Paper';

const PaperInput = Paper.withComponent('input');

const Input = styled(PaperInput)`
  width: 100%;
  color: ${({ primary, theme }) => (primary ? theme.base : darken(0.5, theme.grayLighter))};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.base)};
  line-height: normal;

  &:active {
    background-color: ${({ primary, theme }) => (primary ? darken(0.05, theme.accent) : theme.base)};
  }
`;

export default Input;
