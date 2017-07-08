import styled from 'styled-components';
import { darken } from 'polished';

const TopBarLink = styled.a.attrs({
  href: '#'
})`
  padding: 0.7rem 1rem;
  color: ${({ theme }) => theme.base};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s background-color linear;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.primary)};
  }
`;

export default TopBarLink;
