import React from 'react';

import {Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { lightGreen, cyan, pink } from '@material-ui/core/colors';

import { importFile, downloadFile } from '../../js/script';

const caseStudyImg = importFile(require.context('../../img/case-study', false, /\.(png|jpe?g|svg)$/));
const caseStudy = importFile(require.context('../../file/case-study', false, /\.(pdf)$/));



const CaseStudy = () => {
  return (
    <>
      <Box style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Typography variant="h2" style={{ textTransform: "uppercase", textAlign: "center" }}>Case Studies</Typography>
      </Box>
      <Box sx={{  py: "80px", backgroundColor: lightGreen[50] }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box style={{ paddingBottom: ".5em" }}>
                <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>October 2021</Typography>
              </Box>
              <Typography variant="h3">True Daily P&amp;L</Typography>
              <Typography variant="h5">Redesigning process tracker application</Typography>
              <Typography variant="body1" style={{ marginTop: "1em"}}>Revamping an existing application to reduce the time users spent co-ordinating with each other, while ensuring transparency in the data.</Typography>
              <Button variant="outlined" color="primary" style={{ marginTop: "2em" }} onClick={() => {downloadFile( caseStudy, "tdp", "pdf")}}>Download Case Study</Button>
            </Grid>
            <Grid item xs={6}>
            <img src={caseStudyImg['srf.png']} alt="Snapshot of final deliverable for True Daily P&amp;L Run History Screen" title="Snapshot of final deliverable for True Daily P&amp;L Run History Screen" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{  py: "80px", backgroundColor: cyan[50] }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box style={{ paddingBottom: ".5em" }}>
                <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>March-July 2021</Typography>
              </Box>
              <Typography variant="h3">Systematic Risk Filing</Typography>
              <Typography variant="h5">Regulatory filing portal design</Typography>
              <Typography variant="body1" style={{ marginTop: "1em"}}>Create a portal to optimize and efficiently satisfy regulatory reporting requirements for asset management firms.</Typography>
              <Button variant="outlined" color="primary" style={{ marginTop: "2em" }} onClick={() => {downloadFile( caseStudy, "srf", "pdf")}}>Download Case Study</Button>
            </Grid>
            <Grid item xs={6}>
              <img src={caseStudyImg['srf.png']} alt="Snapshot of final deliverable for Systematic Risk Filing Review Screen" title="Snapshot of final deliverable for Systematic Risk Filing Review Screen" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default CaseStudy;