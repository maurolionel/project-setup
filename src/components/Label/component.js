import styled from 'styled-components';
import { darken } from 'polished';

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => darken(0.3, theme.grayLighter)};
  font-size: 0.8rem;
`;

export default Label;
