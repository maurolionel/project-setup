import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

const TopBarNavLink = styled(NavLink)`
  padding: 0.7rem 1rem;
  color: ${({ theme }) => theme.base};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.05s background-color linear;

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.primary)};
  }
  &:active, &.active {
    background-color: ${({ theme }) => darken(0.06, theme.primary)};
  }
`;

export default TopBarNavLink;
