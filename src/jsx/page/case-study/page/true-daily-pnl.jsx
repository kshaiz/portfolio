import React from 'react';
import GLightbox from 'glightbox';

import {Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { lightGreen, pink } from '@material-ui/core/colors';

import { importFile, downloadFile } from '../../../../js/script';

const image = importFile(require.context('../img/tdp', false, /\.(png|jpe?g|svg)$/));
const file = importFile(require.context('../pdf', false, /\.(pdf)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['1.png'],
      'type': 'image'
    },
    {
      'href': image['2.png'],
      'type': 'image'
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const TrueDailyPnl = () => {
  return (
    <>
      <Box sx={{ py: "4rem", backgroundColor: lightGreen[50] }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box style={{ paddingBottom: ".5em" }}>
                <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>October 2021</Typography>
              </Box>
              <Typography variant="h3">True Daily P&amp;L</Typography>
              <Typography variant="h5">Redesigning process tracker application</Typography>
              <Typography variant="body1" style={{ marginTop: "1em"}}>Revamping an existing application to reduce the time users spent co-ordinating with each other, while ensuring transparency in the data.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "2em" }} onClick={() => {downloadFile( file, "tdp", "pdf")}}>Download Case Study</Button>
            </Grid>
            <Grid item xs={6}>
              <img
                src={image['1.png']}
                alt="Snapshot of final deliverable for True Daily P&amp;L Run History Scree"
                title="Snapshot of final deliverable for True Daily P&amp;L Run History Scree"
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

export default TrueDailyPnl;