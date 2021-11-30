import { createTheme, ThemeOptions } from '@material-ui/core/styles';

function createMyTheme(options: ThemeOptions) {
  return createTheme({ ...options });
}

export const palette = {
  primary: {
    main: '#2e79b7',
    50: '#e6eff6',
    100: '#c0d7e9',
    200: '#97bcdb',
    300: '#6da1cd',
    400: '#4d8dc2',
    500: '#2e79b7',
    600: '#2971b0',
    700: '#2366a7',
    800: '#1d5c9f',
    900: '#124990',
    A100: '#c3dbff',
    A200: '#90bcff',
    A400: '#5d9dff',
    A700: '#438eff',
    contrastDefaultColor: 'light',
  },
  status: {
    approved: 'rgba(0, 255, 0, 0.5)',
    cancelled: 'rgba(192, 192, 192, 0.5)',
    denied: 'rgba(255,0,0,0.5)',
    pending: 'rgba(255, 255, 0, 0.5)',
  }
};
export const typography = {
  htmlFontSize: 12,
  fontFamily: '"Optima", "Roboto", sans-serif'
};

const MuiButtonBase = {
  root: {
    outline: '',
    WebkitTapHighlightColor: '',
    '-moz-appearance': '',
    '-webkit-appearance': '',
    '&::-moz-focus-inner': {
      borderStyle: ''
    }
  }
};

export default createMyTheme({
  typography,
  palette,
  overrides: {
    MuiButtonBase // WCAG 2 compliance, enables visual focus state
  }
});
