import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.i.attrs({
  className: 'fa fa-circle-o-notch'
})`
  animation: ${loading} 2s infinite linear;
`;

const Preloader = () => (
  <div><Spinner /></div>
);

export default Preloader;
