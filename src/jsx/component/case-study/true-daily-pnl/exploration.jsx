import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Grid, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['exploration-1.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Wireframes were created to get some quick feedback',
    },
    {
      'href': image['exploration-2.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Wireframes were created to get some quick feedback',
    },
    {
      'href': image['exploration-3.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Wireframes were created to get some quick feedback',
    },
    {
      'href': image['exploration-4.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Wireframes were created to get some quick feedback',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const Exploration = () => {
  return (
    <>
      <Typography variant="h4" id="exploration" style={{ paddingTop: '4rem', color: pink[300] }}>Explorations</Typography>
      
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['exploration-1.jpg']}
          alt="Initial wireframes"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt()}}
        />
      </Box>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['exploration-2.jpg']}
          alt="Initial wireframes"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(1)}}
        />
      </Box>
      <Grid container spacing={2} style={{ marginTop: '-.75rem' }}>
        <Grid item xs={6}>
          <Box style={{ marginTop: '1rem' }}>
            <img
              src={image['exploration-3.jpg']}
              alt="Initial wireframes"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery.openAt(2)}}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ marginTop: '1rem' }}>
            <img
              src={image['exploration-4.jpg']}
              alt="Initial wireframes"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery.openAt(3)}}
            />
          </Box>
        </Grid>
      </Grid>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Wireframes were created to get some quick feedback. Click on the images to expand.</small>
      </Box>
    </>
  )
}

export default Exploration;