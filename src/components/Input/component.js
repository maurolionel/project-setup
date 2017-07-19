import { darken } from 'polished';
import Paper from '../Paper';

const StyledInput = Paper.withComponent('input');

const Input = StyledInput.extend`
  padding: 0.5rem 0.8rem;
  border: 0;
  outline: 0;
  color: ${({ primary, theme }) => (primary ? theme.base : darken(0.5, theme.grayLighter))};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.base)};

  &:active {
    background-color: ${({ primary, theme }) => (primary ? darken(0.05, theme.accent) : theme.base)};
  }
`;

export default Input;
