import styled from 'styled-components';
import { darken } from 'polished';

const boxShadowBase = '0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.1)';
const boxShadowWithStateChanged = '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 -1px 3px 1px rgba(0, 0, 0, 0.1)';

const Paper = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => darken(0.5, theme.grayLighter)};
  background-color: ${({ theme }) => theme.base};
  border: 0;
  border-radius: 3px;
  outline: 0;
  box-shadow: ${boxShadowBase};
  font-size: 1rem;
  font-family: 'OpenSans', Arial, sans-serif;
  text-decoration: none;
  transition-duration: 0.25s, 0.25s;
  transition-property: box-shadow, box-shadow;
  transition-timing-function: ease, ease;

  &:hover, &:focus {
    box-shadow: 
      ${({ withoutChangingStateStyle }) => (withoutChangingStateStyle ? boxShadowBase : boxShadowWithStateChanged)};
  }
`;

export default Paper;
