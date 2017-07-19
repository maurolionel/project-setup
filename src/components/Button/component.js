import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import Paper from '../Paper';

const PaperLink = Paper.withComponent(Link);

const Button = styled(PaperLink)`
  display: inline-block;
  padding: 0.5rem 0.8rem;
  color: ${({ primary, theme }) => (primary ? theme.base : theme.gray)};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.whiteGray)};
  text-decoration: none;

  &:active {
    color: ${({ primary, theme }) => darken(0.05, primary ? theme.base : theme.gray)};
    background-color: ${({ primary, theme }) => darken(0.05, primary ? theme.accent : theme.whiteGray)};
  }
`;

export default Button;
