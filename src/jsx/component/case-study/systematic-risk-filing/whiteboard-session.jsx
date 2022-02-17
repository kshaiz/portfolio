import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Typography, Grid } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const galleryWhiteBoard = GLightbox({
  elements: [
    {
      'href': image['whiteboard-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Whiteboard session to discuss the wireframes and finalize a set of designs that can be taken forward for prototyping.',
    },
    {
      'href': image['whiteboard-2.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'A rough skeleton of the UI to identiy the key areas of content.',
    },
    {
      'href': image['whiteboard-3.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Adding some details to the sketch.',
    },
    {
      'href': image['whiteboard-4.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Adding some details to the sketch.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const WhiteboardSession = () => {
  return (
    <>
      <Typography variant="h4" id="whiteboard-session" style={{ paddingTop: '4rem', color: pink[300] }}>Whiteboard Session</Typography>
      <Typography style={{ marginTop: '.5rem' }}>I sat down with Arifa (Product Owner) and Sahil (Developer) in on online whiteboarding session. We discussed the problem statement and I quickly sketched out some wireframes which were improved over a span of several such sessions. The aim of this exercise was to come to a consensus on a design that we will take forward to the next step - prototyping.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['whiteboard-1.jpg']}
          alt="Whiteboard Session"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {galleryWhiteBoard.openAt()}}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img
            src={image['whiteboard-2.jpg']}
            alt="Whiteboard Session"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryWhiteBoard.openAt(1)}}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={image['whiteboard-3.jpg']}
            alt="Whiteboard Session"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryWhiteBoard.openAt(1)}}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={image['whiteboard-4.jpg']}
            alt="Whiteboard Session"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryWhiteBoard.openAt(1)}}
          />
        </Grid>
      </Grid>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Click on the images to expand.</small>
      </Box>
    </>
  )
}

export default WhiteboardSession;