import { createTheme } from '@mui/material/styles'

// import Breakpoint from './breakpoint';

const palette = {
  primary: {
    main: '#7a4bc8',
    contrastText: '#fff',
  },
  text: {
    primary: '#05032a',
    secondary: '#05032a67',
    disabled: '#05032a40',
    heading: '#7a4bc8',
  },
}

const Theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: palette.primary.main,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
      disabled: palette.text.disabled,
      heading: palette.text.heading,
    },
  },
  shape: {
    borderRadius: 4,
    borderRadiusLarge: 16,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Inter", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontVariationSettings: '"wdth" 100',
    // fontOpticalSizing: 'auto',
    // h1,
    // h2,
    // h3,
    // h4,
    // h5,
    // h6: {
    //   fontWeight: 700,
    //   lineHeight: 1.5,
    // },
    h1: {
      fontSize: '3.157rem',
      fontWeight: 500,
      lineHeight: 1.333,
    },
    h2: {
      fontSize: '2.369rem',
      fontWeight: 500,
      lineHeight: 1.333,
    },
    h3: {
      fontSize: '1.777rem',
      fontWeight: 500,
      lineHeight: 1.333,
    },
    h4: {
      fontSize: '1.333rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.75rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 700,
    },
    caption: {
      fontSize: '0.563rem',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderWidth: 1,
        },
      },
    },
    MuiTypography: {
      style: {
        root: {
          color: palette.text.primary,
        },
      },
      variants: [
        {
          style: {
            '&.text--serif': {
              fontFamily: '"Merriweather", serif',
              fontVariationSettings: '"wdth" 80',
            },
          },
        },
      ],
    },
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
        color: 'secondary',
        size: 'small',
        style: {
          boxShadow: 'none',
        },
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          padding: '0 8px',
          borderWidth: 0,
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                '&:not(:hover)': {
                  backgroundColor: 'transparent',
                },
              },
            },
            {
              props: { variant: 'outlined', color: 'quickNav' },
              style: {
                '&:not(:hover)': {
                  color: '#05032a',
                },
              },
            },
            {
              props: { variant: 'filled', color: 'quickNav' },
              style: {
                '&:not(:hover)': {
                  backgroundColor: '#05032a',
                  color: 'white',
                },
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        style: {
          boxShadow: 'none',
        },
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          lineHeight: 1.5,
          borderWidth: 2,
          padding: '4px 20px',
          fontWeight: 700,
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                borderStyle: 'solid',
                borderColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              },
            },
            {
              props: { variant: 'text' },
              style: {
                borderStyle: 'solid',
                borderColor: 'transparent',
                padding: '4px 8px',

                '&.nav-link:not(:hover)': {
                  color: '#05032a',
                },

                '&.nav-link--active:not(:hover)': {
                  color: '#05032a',
                  textDecorationLine: 'underline',
                  textUnderlineOffset: '9px',
                  textDecorationThickness: '2px',
                },
              },
            },
            {
              props: { color: 'primary' },
              style: {
                '&:hover': {
                  borderColor: palette.primary.main,

                  '&[class*=nav-link]': {
                    borderColor: '#05032a',
                  },
                },
              },
            },
            {
              props: { variant: 'contained', color: 'primary' },
              style: {
                '&:hover': {
                  color: palette.primary.main,
                },
              },
            },
            {
              props: { size: 'small' },
              style: {
                padding: '0 12px',
                height: '28px',
                // fontSize: '0.875rem',
              },
            },
          ],
        },
      },
    },
  },
})

export default Theme
