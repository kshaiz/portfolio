import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../../img/arcesium/investor-account-manager', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['search-result.png'],
      'type': 'image',
      'title': 'Investor Accounts Manager (1/5)',
      'description': 'Search results page',
    },
    {
      'href': image['create-dialog.png'],
      'type': 'image',
      'title': 'Investor Accounts Manager(2/5)',
      'description': 'Dialog box with minimal fields to create a new account',
    },
    {
      'href': image['create-wizard.png'],
      'type': 'image',
      'title': 'Investor Accounts Manager(3/5)',
      'description': 'Optional wizard to create a new account',
    },
    {
      'href': image['detail.png'],
      'type': 'image',
      'title': 'Investor Accounts Manager(4/5)',
      'description': 'Investor account details page',
    },
    {
      'href': image['detail-difference.png'],
      'type': 'image',
      'title': 'Investor Accounts Manager(5/5)',
      'description': 'Historical view with difference mode enabled',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const InvestorAccountManager = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".5em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Arcesium</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2015-2021</small>
        </Box>
        <Typography variant="h4" style={{ color: pink[300] }}>Investor Accounts Manager</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Part of a series of application to onboard and manager new clients to the platform.</Typography>
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['search-result.png']}
          alt="Search results page"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt()}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['create-dialog.png']}
          alt="Dialog box with minimal fields to create a new account"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(1)}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['create-wizard.png']}
          alt="Optional wizard to create a new account"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(2)}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['detail.png']}
          alt="Investor account details page"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(3)}}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <img
          src={image['detail-difference.png']}
          alt="Historical view with difference mode enabled"
          height="125px"
          className={"port-thumbnail"}
          onClick={() => {gallery.openAt(4)}}
        />
      </Grid>
    </Grid>
  )
}

export default InvestorAccountManager;