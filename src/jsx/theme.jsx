import { createTheme } from '@material-ui/core/styles';
import { teal, blueGrey } from '@material-ui/core/colors';

import Breakpoint from './breakpoint';

const Theme = createTheme({
  root: {
    backgroundColor: 'red'
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: teal[500],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: blueGrey[500],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '4.209rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '2.441rem'
      }
    },
    h2: {
      fontSize: '3.157rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '1.953rem'
      }
    },
    h3: {
      fontSize: '2.369rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '1.563rem'
      }
    },
    h4: {
      fontSize: '1.777rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '1.25rem'
      }
    },
    h5: {
      fontSize: '1.333rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '1.15rem'
      }
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
        fontSize: '1rem'
      }
    },
    small: {
      fontSize: '.75rem'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '.875rem',
      fontWeight: 300,
    },
    overline: {
      lineHeight: 1,
    },
    button: {},
  },
  overrides: {
    MuiButton: {
      root: {
        [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
          fontSize: '.85rem'
        },
      },
      sizeLarge: {
        fontSize: '1.25rem'
      }
    },
    MuiLink: {
      root: {
        cursor: 'pointer'
      }
    }
  },
});

export default Theme;