import { createTheme } from '@material-ui/core/styles';
import { purple, blueGrey } from '@material-ui/core/colors';

const Theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: purple[500],
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
    },
    h2: {
      fontSize: '3.157rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '2.369rem',
      fontWeight: 300,
    },
    h4: {
      fontSize: '1.777rem',
      fontWeight: 300,
    },
    h5: {
      fontSize: '1.333rem',
      fontWeight: 300,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    small: {
      fontSize: '.75rem'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    button: {
      // fontStyle: 'italic',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        // fontSize: '1.5rem',
      },
      sizeLarge: {
        fontSize: '1.25rem',
      }
    },
  },
});

export default Theme;