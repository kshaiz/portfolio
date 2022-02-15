import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography, Hidden } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../../js/script';

const image = importFile(require.context('../../img/pubmatic', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['reporting-analytics-beta.png'],
      'type': 'image',
      'title': 'Reporting & Analytics Revamp (1/4)',
      'description': 'Screenshot of a report in with live data streaming',
    },
    {
      'href': image['reporting-analytics-wireframe.png'],
      'type': 'image',
      'title': 'Reporting & Analytics Revamp (2/4)',
      'description': 'Wireframe for a customizable dashboard view with real time data streaming, alert notification and comparitive information',
    },
    {
      'href': image['reporting-analytics-exploration.png'],
      'type': 'image',
      'title': 'Reporting & Analytics Revamp (3/4)',
      'description': 'Exploring display options for showing numbers on the platform',
    },
    {
      'href': image['reporting-analytics-user-testing.png'],
      'type': 'image',
      'title': 'Reporting & Analytics Revamp (4/4)',
      'description': 'Snapshots of the contextual interviews. Think aloud protocol was employed to record the user feedback.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const ReportingAnalyticsRevamp = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".75em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: PubMatic</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2014-2015</small>
        </Box>
        <Typography variant="h3" style={{ color: pink[300] }}>Reporting &amp; Analytics Revamp</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Complete revamp of our data solutions, to enable the users to get easy and powerful insights into their business and take quick decisions in order to maximize the potential of their digital assets. Focus was on not just the descriptive reporting, but also on predictive as well as prescriptive reporting, to facilitate quick decision making.</Typography>
      </Grid>
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item xs={12}>
          <img
            src={image['reporting-analytics-beta.png']}
            alt="Screenshot of a report in with live data streaming"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['reporting-analytics-wireframe.png']}
            alt="Wireframe for a customizable dashboard view with real time data streaming, alert notification and comparitive information"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['reporting-analytics-exploration.png']}
            alt="Exploring display options for showing numbers on the platform"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['reporting-analytics-user-testing.png']}
            alt="Snapshots of the contextual interviews. Think aloud protocol was employed to record the user feedback."
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
      <Hidden only={['xs', 'sm']}>
        <Grid item xs="auto">
          <img
            src={image['reporting-analytics-beta.png']}
            alt="Screenshot of a report in with live data streaming"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['reporting-analytics-wireframe.png']}
            alt="Wireframe for a customizable dashboard view with real time data streaming, alert notification and comparitive information"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['reporting-analytics-exploration.png']}
            alt="Exploring display options for showing numbers on the platform"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['reporting-analytics-user-testing.png']}
            alt="Snapshots of the contextual interviews. Think aloud protocol was employed to record the user feedback."
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default ReportingAnalyticsRevamp;