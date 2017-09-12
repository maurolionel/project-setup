import styled from 'styled-components';

const Alert = styled.div.attrs({
  className: props => `alert-${props.kind}`
})`
  padding: .75rem 1.25rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: .25rem;
  &.alert-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
  &.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  &.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  &.alert-error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;

export default Alert;
