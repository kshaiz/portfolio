import React from 'react';
import GLightbox from 'glightbox';

import {Box, Container, Grid, Typography, Button, Hidden } from '@material-ui/core';
import { cyan, pink, grey } from '@material-ui/core/colors';

import { HashLink as RouterLink } from 'react-router-hash-link';
import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../img/systematic-risk-filing', false, /\.(png|jpe?g|svg)$/));

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
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box style={{ paddingBottom: "1rem" }}>
                <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".5em", color: grey[500]}}>March-July 2021</Typography>
              </Box>
              <Typography variant="h3" style={{ color: pink[500] }}>Systematic Risk Filing</Typography>
              <Typography variant="h5">Regulatory filing portal design</Typography>
              <Typography variant="body1" style={{ marginTop: "1em"}}>Designing a portal to optimize and efficiently satisfy regulatory reporting requirements for asset management firms.</Typography>
              <Hidden only={['xs', 'sm']}>
                <Button variant="contained" color="primary" style={{ marginTop: "2em" }} to='/portfolio/case-study/systematic-risk-filing#application-overview' component={RouterLink}>View Case Study</Button>
              </Hidden>
            </Grid>
            <Hidden only={['md', 'lg', 'xl']}>
              <Grid item xs={12} md={6}>
                <img
                  src={image['1.png']}
                  alt="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                  title="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                  className={"port-thumbnail"}
                  onClick={() => {gallery.openAt()}}
                  width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" color="primary" to='/portfolio/case-study/systematic-risk-filing#title' component={RouterLink}>View Case Study</Button>
              </Grid>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
              <Grid item xs={12} md={6}>
                <img
                  src={image['1.png']}
                  alt="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                  title="Snapshot of final deliverable for Systematic Risk Filing Review Screen"
                  className={"port-thumbnail"}
                  onClick={() => {gallery.openAt()}}
                  width="100%" />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default SystematicRiskFiling;