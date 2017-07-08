import styled from 'styled-components';
import { darken } from 'polished';

const SearchBar = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar...'
})`
  padding: 0.5rem 0.8rem;
  border: 1px solid ${({ theme }) => darken(0.2, theme.grayLighter)};
  outline: 0;
  color: ${({ theme }) => darken(0.2, theme.grayLighter)};
`;

export default SearchBar;
