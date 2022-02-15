import React from 'react';
import GLightbox from 'glightbox';

import {Box, Grid, Typography, Hidden } from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';

import { importFile } from '../../../../../../js/script';

const image = importFile(require.context('../../img/mettl', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
  elements: [
    {
      'href': image['marketing-video.png'],
      'type': 'image',
      'title': 'Marketing Video (1/2)',
      'description': 'A still from the video',
    },
    {
      'href': 'https://www.youtube.com/watch?v=SGg19b0nAMA',
      'type': 'video',
      'title': 'Marketing Video(2/2)',
      'description': `If you are having trouble viewing the video, <a href="http://google.com">click here</a> to view on YouTube`,
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const MarketingVideo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ paddingBottom: ".75em" }}>
          <Typography variant="overline" style={{ borderBottom: `2px solid ${grey[500]}`, paddingBottom: ".35em", color: `${grey[500]}` }}>Client: Mettl</Typography>
          <small style={{ paddingLeft: '1em', color: `${grey[500]}` }}>2013-2014</small>
        </Box>
        <Typography variant="h3" style={{ color: pink[300] }}>Marketing Video</Typography>
        <Typography variant="body1" style={{ marginTop: ".5em" }}>Created a marketing video for Mettl to highlight their key offerings. As a part of this project, I created story boards, character illustrations and finally created the animation using Adobe Flash.</Typography>
      </Grid>
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item xs={12}>
          <img
            src={image['marketing-video.png']}
            alt="Still from Mettl marketing video"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['marketing-video-thumbnail.png']}
            alt="Play on YouTube"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
      <Hidden only={['xs', 'sm']}>
        <Grid item xs="auto">
          <img
            src={image['marketing-video.png']}
            alt="Still from Mettl marketing video"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt()}}
          />
        </Grid>
        <Grid item xs="auto">
          <img
            src={image['marketing-video-thumbnail.png']}
            alt="Play on YouTube"
            height="125px"
            className={"port-thumbnail"}
            onClick={() => {gallery.openAt(1)}}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default MarketingVideo;