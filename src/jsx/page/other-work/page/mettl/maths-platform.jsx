import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography, Hidden } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../js/script';

const image = importFile(require.context('../../img/mettl', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['tutrr-homepage.png'],
      'type': 'image',
      'title': 'Tutrr: Online Maths Platform (1/2)',
      'description': 'Homepage design',
    },
    {
      'href': image['tutrr-algebra-editor.png'],
      'type': 'image',
      'title': 'Tutrr: Online Maths Platform (2/2)',
      'description': 'Snapshot of algebra editor in production',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const MathsPlatform = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".75em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Mettl</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2013-2014</small>
        </Box>
        <Typography variant="h3" style={{ color: pink[300] }}>Tutrr: Online Maths Platform</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Skeuomorphic explorations for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various maths topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks.</Typography>
      </Grid>
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item xs={12}>
          <img
            src={image['tutrr-homepage.png']}
            alt="Tutrr homepage"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['tutrr-algebra-editor.png']}
            alt="Algebra Editor"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
      <Hidden only={['xs', 'sm']}>
        <Grid item xs="auto">
          <img
            src={image['tutrr-homepage.png']}
            alt="Tutrr homepage"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['tutrr-algebra-editor.png']}
            alt="Algebra Editor"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default MathsPlatform;