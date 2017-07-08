import styled from 'styled-components';

const SearchBar = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar...'
})`
  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => theme.grayDark};
  border: 1px solid ${({ theme }) => theme.grayDark};
`;

export default SearchBar;
