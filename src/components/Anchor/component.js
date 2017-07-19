import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Anchor = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Anchor;
