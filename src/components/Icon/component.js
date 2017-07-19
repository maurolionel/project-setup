import styled from 'styled-components';

const Icon = styled.i`
  margin: ${({ placement }) => (placement === 'right' ? '0 0 0 0.5rem' : '0 0.5rem 0 0')};
  font-size: 1rem;
`;

export default Icon;
