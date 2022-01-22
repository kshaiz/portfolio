import React from 'react';

import { CssBaseline } from '@material-ui/core';
import Theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

import '../css/style.css';
import { blueGrey } from '@material-ui/core/colors';

import Header from './page/header/index';
import About from './page/about/index';
import CaseStudy from './page/case-study/index';
import OtherWork from './page/other-work/index';


const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <Header />
        <main>
          <About />
          <CaseStudy />
          <OtherWork />
        </main>
        <footer style={{ textAlign: "center", padding: "6rem 0", backgroundColor: blueGrey[50], color: blueGrey[200] }}>
          2022 © Shaiz Kunhimohammed 
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App;