import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Grid, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const staticImage = GLightbox({
  elements: [
    {
      'href': image['final-run-history-1.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Search results automatically loads when user lands on the Run History Page',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const gallery1 = GLightbox({
  elements: [
    {
      'href': image['final-run-history-2.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Previous version of search results.',
    },
    {
      'href': image['final-run-history-3.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Final version of search results with reduced color.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const gallery2 = GLightbox({
  elements: [
    {
      'href': image['final-run-history-4.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Successful view',
    },
    {
      'href': image['final-run-history-5.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Failed view',
    },
    {
      'href': image['final-run-history-6.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Timed-out view.',
    },
    {
      'href': image['final-run-history-7.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'In-progress view',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imageRunDetail1 = GLightbox({
  elements: [
    {
      'href': image['final-run-detail-4.jpg'],
      'type': 'image',
    },
    {
      'href': image['final-run-detail-5.jpg'],
      'type': 'image',
    },
    {
      'href': image['final-run-detail-6.jpg'],
      'type': 'image',
    },
    {
      'href': image['final-run-detail-7.jpg'],
      'type': 'image',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imageRunDetail2 = GLightbox({
  elements: [
    {
      'href': image['final-run-detail-2.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Search result for Run Details',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const galleryRunDetail = GLightbox({
  elements: [
    {
      'href': image['final-run-detail-4.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Search result for Run Details',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const FinalDeliverable = () => {
  return (
    <>
      <Typography variant="h4" id="final-deliverable" style={{ paddingTop: '4rem', color: pink[300] }}>Final Deliverables</Typography>
      <Typography style={{ marginTop: '.5rem' }}>Based upon the feedback, I decided to split the application into two pages - a search page (now renamed to run history) which would cater primarily to Client Liaison and Client Executives, and a run details page which would focus on information needed by Operation Analysts.</Typography>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Run History</Typography>
      <Typography style={{ marginTop: '.5rem' }}>While the search panel remained untouched, the search is now automatically triggered based on default search preferences set by the application (unless the user has set their preference), whenever they land on the application.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-run-history-1.jpg']}
          alt="Search results"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {staticImage.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Search results automatically loads when user lands on the Run History page. Click on the image to expand.</small>
      </Box>

      <Grid container spacing={2} style={{ marginTop: '1.5rem' }}>
        <Grid item xs={12} md={4}>
          <Typography>Reduced the color visible on the screen by removing it from cells that were deemed less important.</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box>
            <img
              src={image['final-run-history-2.jpg']}
              alt="Previous version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery1.openAt()}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Previous version</small>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box>
            <img
              src={image['final-run-history-3.jpg']}
              alt="Final version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery1.openAt(1)}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Final version</small>
          </Box>
        </Grid>
      </Grid>

      <Typography style={{ marginTop: '2rem' }}>The details panel was completely revamped, and was redesigned to cater to Client and Client Liaison groups only. A dedicated details page (showcased later) was created keeping the needs of the Operations team in mind, as well as to allow the other user groups to learn more about the underlying processes should they want to.</Typography>
      <Grid container spacing={4} style={{ marginTop: '.15rem' }}>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={image['final-run-history-4.jpg']}
              alt="Previous version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery2.openAt()}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Success view</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={image['final-run-history-5.jpg']}
              alt="Final version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery2.openAt(1)}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Failed view</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={image['final-run-history-6.jpg']}
              alt="Final version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery2.openAt(2)}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Timed-out view</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={image['final-run-history-7.jpg']}
              alt="Final version of search results"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {gallery2.openAt(3)}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>In-progress view</small>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Run Details</Typography>
      <Typography style={{ marginTop: '.5rem' }}>Users who land on this page directly can search for a particular Run ID and fetch its details. Alternately, the run details could also be deep linked in the support ticket, allowing the operations team to easily access it. As with the Run History page, a link to the application wiki was added.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-run-detail-1.jpg']}
          alt="Search results"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imageRunDetail1.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Search page for Run Details. Click on the image to expand.</small>
      </Box>
      <Typography style={{ marginTop: '2rem' }}>Completion status was added to the overall run, as well as individual stages. A complete breakdown of each task split by different stages was included in the details page. Sub-tasks within a particular task were collapsed into the parent task, rather than have them repeat multiple times and overloading the UI.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-run-detail-2.jpg']}
          alt="Search results"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imageRunDetail2.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Search result for Run Details. Click on the image to expand.</small>
      </Box>

      <Typography style={{ marginTop: '2rem' }}>Different view types of the underlying data was added to the details page to help the operations team view it from different angles.</Typography>
      <Grid container spacing={2} style={{ marginTop: '.15rem' }}>
        <Grid item xs={12}>
          <img
            src={image['final-run-detail-4.jpg']}
            alt="Search results"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryRunDetail.openAt()}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['final-run-detail-5.jpg']}
            alt="Search results"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryRunDetail.openAt(1)}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['final-run-detail-6.jpg']}
            alt="Search results"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryRunDetail.openAt(2)}}
          />
        </Grid>
        <Grid item xs={12}>
          <img
            src={image['final-run-detail-7.jpg']}
            alt="Search results"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryRunDetail.openAt(3)}}
          />
        </Grid>
      </Grid>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Visualization options for run details. Click on the images to expand.</small>
      </Box>
    </>
  )
}

export default FinalDeliverable;