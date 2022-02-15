import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['service-blueprint.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Service blueprint helped to understand the different touch-points between the archetypes and the application, identify areas of improvement as well as how to structure the flow of information',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const ServiceBlueprint = () => {
  return (
    <>
      <Typography variant="h4" id="service-blueprint" style={{ paddingTop: '4rem', color: pink[300] }}>Service Blueprint</Typography>
      <Typography style={{ marginTop: '.5rem' }}>I created a service blueprint to map out the various stages, time taken across the broad group of stages, as well as mention any pain points that came up during our discussions with the archetypes. This helped to understand the different touch-points between the archetypes and the application, identify areas of improvement as well as how to structure the flow of information. One major theme highlighted during my research across all the archetypes were the lack of actions available to them.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['service-blueprint.jpg']}
          alt="Service Blueprint"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Service blueprint. Click on the image to expand</small>
      </Box>
    </>
  )
}

export default ServiceBlueprint;