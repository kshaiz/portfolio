import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    // fontFamily: 'inherit',
  },
  palette: {
    // primary: {
    //   main: '#171717', // neutral-900
    //   dark: '#262626', // neutral-800
    //   contrastText: '#ffffff',
    // },
  },
  components: {
    MuiChip: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: '9999px', // rounded-full
      //     padding: '0.375rem 1rem', // py-1.5 px-4
      //     fontSize: '0.875rem', // text-sm
      //     height: 'auto',
      //   },
      //   label: {
      //     padding: 0,
      //   },
      // },
    },
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: "0.5rem", // rounded-lg
      //     paddingTop: "0.75rem", // py-3
      //     paddingBottom: "0.75rem",
      //     paddingLeft: "1.5rem", // px-6
      //     paddingRight: "1.5rem",
      //     textTransform: "none",
      //     gap: "0.5rem", // gap-2
      //     lineHeight: 1.5,
      //   },
      //   contained: {
      //     backgroundColor: "#171717", // neutral-900
      //     color: "#ffffff",
      //     boxShadow: "none",
      //     "&:hover": {
      //       backgroundColor: "#262626", // neutral-800
      //       boxShadow: "none",
      //     },
      //   },
      //   outlined: {
      //     borderColor: "#171717", // neutral-900
      //     color: "#171717",
      //     "&:hover": {
      //       backgroundColor: "#fafafa", // neutral-50
      //       borderColor: "#171717",
      //     },
      //   },
      // },
    },
  },
})
