import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, deepOrange, cyan, orange } from '@mui/material/colors';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: teal,
        secondary: deepOrange,
        background: {
          default: '#ffffff',
          paper: '#f9f9f9',
        },
        text: {
          primary: '#000000',  // Màu chữ chính trong chế độ sáng
          secondary: '#555555',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: cyan,
        secondary: orange,
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',  // Màu chữ chính trong chế độ tối
          secondary: '#aaaaaa',
        },
      },
    },
  },
  cssVarPrefix: 'mui',
  colorSchemeSelector: '[data-color-scheme]',

});

export default theme;
