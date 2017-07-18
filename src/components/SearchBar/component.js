import styled from 'styled-components';
import { darken } from 'polished';
import Input from '../Input';

const SearchBar = styled(Input).attrs({
  type: 'search',
  placeholder: 'Buscar...'
})`
  padding: 0.5rem 0.8rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => darken(0.5, theme.grayLighter)};
`;

export default SearchBar;
