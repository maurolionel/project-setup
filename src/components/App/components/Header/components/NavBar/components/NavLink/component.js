import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
  text-decoration: none;
  transition: 0.05s background-color linear;

  &:hover {
    background-color: ${({ theme }) => theme.whiteGray}
  }
  &:active, &.active {
    background-color: ${({ theme }) => darken(0.02, theme.whiteGray)}
  }
`;

export default StyledNavLink;
