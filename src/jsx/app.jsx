import React from 'react';

import { CssBaseline } from '@material-ui/core';
import Theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './header/main';
import About from './about/main';
import CaseStudy from './case-study/main';
import OtherWork from './other-work/main';

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
        <footer style={{ textAlign: "center", padding: "60px 0" }}>
          2022 © Shaiz Kunhimohammed 
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App;