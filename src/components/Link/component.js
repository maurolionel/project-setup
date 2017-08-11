import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import Paper from '../Paper';

const PaperLink = Paper.withComponent(Link);

const LinkCustom = styled(PaperLink)`
  color: ${({ primary, theme }) => (primary ? theme.base : theme.gray)};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.whiteGray)};

  &:active {
    color: ${({ primary, theme }) => darken(0.05, primary ? theme.base : theme.gray)};
    background-color: ${({ primary, theme }) => darken(0.05, primary ? theme.accent : theme.whiteGray)};
  }
`;

export default LinkCustom;
