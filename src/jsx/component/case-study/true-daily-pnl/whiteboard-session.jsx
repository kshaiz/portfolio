import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['whiteboard-1.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Whiteboard session to discuss the wireframes and finalize a set of designs that can be taken forward for prototyping.',
    },
    {
      'href': image['whiteboard-2.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Whiteboard session to discuss the wireframes and finalize a set of designs that can be taken forward for prototyping.',
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
      <Typography style={{ marginTop: '.5rem' }}>I sat down with Vipul (Product Owner) and discussed the wireframes over an online whiteboard session. While the initial wireframes tried to capture the essence of the information needed to be displayed, the purpose of this session was to explore alternative designs, visualization options and finalize a set of designs that can be taken forward for prototyping.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['whiteboard-1.jpg']}
          alt="Whiteboard Session"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt()}}
        />
      </Box>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['whiteboard-2.jpg']}
          alt="Whiteboard Session"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(1)}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Click on the images to expand.</small>
      </Box>
    </>
  )
}

export default WhiteboardSession;