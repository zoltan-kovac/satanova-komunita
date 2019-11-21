import React from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import "typeface-montserrat"
import "typeface-merriweather"
import { createMuiTheme, ThemeProvider, makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    // fontSize: 16,
    // htmlFontSize: 20,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#333',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
  // spacing: 10,
  overrides: {
    MuiAppBar: {
      root: {
        paddingTop: '20px',
        paddingBottom: '20px',
      },
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '#333',
      },
    },
  },
});

theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function Layout({
  children
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}
