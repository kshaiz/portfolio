import React from 'react';

import { CssBaseline, Divider, Box, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import '../css/style.css';
import Theme from './theme';

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
        <Container align='center'>
          <Box maxWidth="50%">
            <Divider/>
          </Box>
        </Container>
        <footer style={{ textAlign: "center", padding: "2rem 0", color: blueGrey[200] }}>
          2022 © Shaiz Kunhimohammed 
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;