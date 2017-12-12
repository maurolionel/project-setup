import styled from 'styled-components';
import Paper from '../Paper';

const PaperTextarea = Paper.withComponent('textarea');

const Textarea = styled(PaperTextarea)`
  resize: vertical;
  min-height: 100px;
  max-height: 400px;
  line-height: 1.5;
`;

export default Textarea;
