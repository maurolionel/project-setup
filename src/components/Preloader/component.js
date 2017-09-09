import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to { transform: rotate(360deg); }
`;

const Preloader = styled.i.attrs({
  className: 'fa fa-circle-o-notch'
})`
  animation: ${loading} 2s infinite linear;
`;

export default Preloader;
