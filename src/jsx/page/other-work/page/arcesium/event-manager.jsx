import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../../img/arcesium/event-manager', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['zero-state.png'],
      'type': 'image',
      'title': 'Event Manager (1/4)',
      'description': 'Landing page',
    },
    {
      'href': image['create-1.png'],
      'type': 'image',
      'title': 'Event Manager(2/4)',
      'description': 'Dialog box options for creating a new event',
    },
    {
      'href': image['create-2.png'],
      'type': 'image',
      'title': 'Event Manager(3/4)',
      'description': 'Dialog box options for creating a new event',
    },
    {
      'href': image['create-3.png'],
      'type': 'image',
      'title': 'Event Manager(4/4)',
      'description': 'Dialog box options for creating a new event',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const EventManager = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".5em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Arcesium</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2015-2021</small>
        </Box>
        <Typography variant="h4" style={{ color: pink[300] }}>Event Manager</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Application to create regulatory filing events and manage user notifications.</Typography>
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['zero-state.png']}
          alt="Landing page"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt()}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['create-1.png']}
          alt="Dialog box options for creating a new event"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(1)}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['create-2.png']}
          alt="Dialog box options for creating a new event"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(2)}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['create-3.png']}
          alt="Dialog box options for creating a new event"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(3)}}
        />
      </Grid>
    </Grid>
  )
}

export default EventManager;