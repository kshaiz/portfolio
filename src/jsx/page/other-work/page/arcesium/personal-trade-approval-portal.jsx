import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography, Hidden } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../../img/arcesium/personal-trade-approval-portal', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['zero-state.png'],
      'type': 'image',
      'title': 'Personal Trade Approvals Portal (1/2)',
      'description': 'Application view without any data',
    },
    {
      'href': image['sample-form.png'],
      'type': 'image',
      'title': 'Personal Trade Approvals Portal(2/2)',
      'description': 'Application view with data',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const PersonalTradeApprovalPortal = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".75em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Arcesium</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2015-2021</small>
        </Box>
        <Typography variant="h3" style={{ color: pink[300] }}>Personal Trade Approvals Portal</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Compliance portal for employees to log personal trade requests for approval.</Typography>
      </Grid>
      <Hidden smUp>
        <Grid item xs={12}>
          <img
            src={image['zero-state.png']}
            alt="Approvals page without data"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['sample-form.png']}
            alt="Approvals page with data"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid item xs="auto">
          <img
            src={image['zero-state.png']}
            alt="Approvals page without data"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['sample-form.png']}
            alt="Approvals page with data"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default PersonalTradeApprovalPortal;