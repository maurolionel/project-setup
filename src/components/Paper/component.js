import styled from 'styled-components';

const Paper = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
  transition-duration: 0.25s, 0.25s;
  transition-property: box-shadow, box-shadow;
  transition-timing-function: ease, ease;

  &:hover {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 -1px 3px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default Paper;
