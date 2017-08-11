import styled from 'styled-components';

const SceneWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  max-width: ${({ theme }) => theme.desktop}px;
  margin: 2rem auto;
`;

export default SceneWrapper;
