import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { CssBaseline, Divider, Box, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import '../css/style.css';
import Theme from './theme';

import Home from './component/home';
import CaseStudyTdp from './component/case-study/true-daily-pnl';
import CaseStudySrf from './component/case-study/systematic-risk-filing';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/case-study/true-daily-pnl/" element={<CaseStudyTdp />} />
            <Route path="/portfolio/case-study/systematic-risk-filing/" element={<CaseStudySrf />} />
          </Routes>
        </Router>
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