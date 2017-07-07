import createTheme from 'styled-components-theme';
import colors from './Colors';

const theme = createTheme(...Object.keys(colors));

export const themeColors = colors;

export default theme;
