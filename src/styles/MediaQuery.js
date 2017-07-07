import { css } from 'styled-components';

const sizes = {
  ipad: 1024, // ipad pro - 25
  tablet: 768, // ipad - 25
  phoneL: 415, // iphone 6Plus - 30
  phoneM: 375, // iphone 6 - 18
  phoneS: 320 // iphone 5 - 15
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

const heights = {
  desktop: 1600,
  ipad: 1366,
  tablet: 1024,
  phoneL: 736,
  phoneM: 667,
  phoneS: 500
};

export const mediaHeights = Object.keys(heights).reduce((accumulator, label) => {
  const emSize = heights[label];
  accumulator[label] = (...args) => css`
    @media (min-height: ${emSize}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
