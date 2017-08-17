import styled from 'styled-components';
import Paper from '../Paper';

const PaperSelect = Paper.withComponent('select');

const Select = styled(PaperSelect)`
  text-transform: capitalize;
`;

export default Select;
