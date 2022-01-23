import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography, Hidden } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../../img/arcesium/corporate-action', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['dashboard-voluntary.png'],
      'type': 'image',
      'title': 'Corporate Actions Dashboard (1/2)',
      'description': 'Voluntary corporate actions view of the dashboard.',
    },
    {
      'href': image['dashboard-mandatory.png'],
      'type': 'image',
      'title': 'Corporate Actions Dashboard (2/2)',
      'description': 'Mandatory corporate actions view of the dashboard.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const CorporateActionDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".75em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Arcesium</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2015-2021</small>
        </Box>
        <Typography variant="h3" style={{ color: pink[300] }}>Corporate Actions Dashboard</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Dashboard to enable co-ordination between different teams (front-office, compliance, middle-office) to seek election preferences and approvals for voluntary corporate actions.</Typography>
      </Grid>
      <Hidden smUp>
        <Grid item xs={12} align='center'>
          <img
            src={image['dashboard-voluntary.png']}
            alt="Corporate Actions Dashboard - Voluntary View"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12} align='center'>
          <img
            src={image['dashboard-mandatory.png']}
            alt="Corporate Actions Dashboard - Mandatory View"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid item xs='auto'>
          <img
            src={image['dashboard-voluntary.png']}
            alt="Corporate Actions Dashboard - Voluntary View"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs='auto'>
          <img
            src={image['dashboard-mandatory.png']}
            alt="Corporate Actions Dashboard - Mandatory View"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default CorporateActionDashboard;