import React from 'react';
import GLightbox from 'glightbox';

import {Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { cyan, pink } from '@material-ui/core/colors';

import { importFile, downloadFile } from '../../../../js/script';

const image = importFile(require.context('../img/srf', false, /\.(png|jpe?g|svg)$/));
const file = importFile(require.context('../pdf', false, /\.(pdf)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['1.png'],
      'type': 'image'
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const SystematicRiskFiling = () => {
  return (
    <>
      <Box sx={{ py: "4rem", backgroundColor: cyan[50] }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box style={{ paddingBottom: ".5em" }}>
                <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>March-July 2021</Typography>
              </Box>
              <Typography variant="h3">Systematic Risk Filing</Typography>
              <Typography variant="h5">Regulatory filing portal design</Typography>
              <Typography variant="body1" style={{ marginTop: "1em"}}>Designing a portal to optimize and efficiently satisfy regulatory reporting requirements for asset management firms.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "2em" }} onClick={() => {downloadFile( file, "srf", "pdf")}}>Download Case Study</Button>
            </Grid>
            <Grid item xs={6}>
              <img
                src={image['1.png']}
                alt="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                title="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                className={"port-thumbnail"}
                onClick={() => {gallery.openAt()}}
                width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default SystematicRiskFiling;