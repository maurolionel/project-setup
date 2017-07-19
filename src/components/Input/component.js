import { darken } from 'polished';
import Paper from '../Paper';

const StyledInput = Paper.withComponent('input');

const Input = StyledInput.extend`
  padding: 0.5rem 0.8rem;
  border: 0;
  outline: 0;
  color: ${({ type, theme }) => (type === 'submit' ? theme.base : darken(0.5, theme.grayLighter))};
  background-color: ${({ type, theme }) => (type === 'submit' ? theme.accent : theme.base)};

  &:active {
    background-color: ${({ type, theme }) => (type === 'submit' ? darken(0.05, theme.accent) : theme.base)};
  }
`;

export default Input;
