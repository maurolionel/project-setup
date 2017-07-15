const colors = {
  aqua: '#1fbba6',
  aquaDark: '#189786',
  blue: '#0072bf',
  blueDark: '#0b3670',
  green: '#17a84b',
  greenDark: '#0f692f',
  red: '#ed1c24',
  redDarker: '#9612170',
  yellow: '#f6c92f',
  yellowDark: '#9b7f1e',
  orange: '#fbb03b',
  orangeDarker: '#a14400',
  pink: '#ee3c80',
  pinkDarkest: '#972651',
  Violet: '#673189',
  blueFb: '#3b5998',
  blueDarker: '#263f70',
  blueLight: '#00c0ff',
  blueDarkBtn: '#008fa4',
  greenLight: '#73bf43',
  greenDarkBtn: '#5fa235',
  redLight: '#ee3e36',
  redDark: '#b32923',
  orangeLight: '#ff8400',
  OrangeDark: '#b75f01',
  pinkDark: '#f21f43',
  pinkDarker: '#a30f28',
  base: '#ffffff',
  whiteGray: '#f5f5f5',
  grayLighter: '#ececec',
  grayDark: '#acacac',
  gray: '#646464',
  grayBg: '#434851',
  grayDarker: '#333333',
  black: '#000000',
  petroleum: '#3f454e'
};

const colorsBase = Object.assign({}, colors, {
  // fonts
  fontBrandom: '"Brandon", Helvetica, Arial, sans-serif',
  fontMikado: '"Mikado Black", Arial, sans-serif;',
  fontSizeXS: '1rem',
  fontSizeS: '1.7rem',
  fontSizeM: '30px',
  fontSizeL: '3.1rem',

  // brand
  primary: colors.blue,
  accent: colors.orange,
  success: colors.greenLight,
  warning: colors.orangeLight,
  danger: colors.redLight,
  info: colors.blueLight
});

export default colorsBase;
