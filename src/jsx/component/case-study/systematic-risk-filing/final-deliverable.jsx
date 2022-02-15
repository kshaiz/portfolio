import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Grid, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const imageReviewScreen1 = GLightbox({
  elements: [
    {
      'href': image['final-prototype-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Final version of the review screen.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const gallerySummaryPanel1 = GLightbox({
  elements: [
    {
      'href': image['final-prototype-2.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'First version of the summary panel.',
    },
    {
      'href': image['final-prototype-3.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Next iteration of the summary panel.',
    },
    {
      'href': image['final-prototype-4.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Final version of the summary panel.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const galleryToolbar1 = GLightbox({
  elements: [
    {
      'href': image['final-prototype-5.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'First version of the toolbar.',
    },
    {
      'href': image['final-prototype-6.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Next iteration of the toolbar.',
    },
    {
      'href': image['final-prototype-7.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Final version of the toolbar.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const galleryQuestionCard = GLightbox({
  elements: [
    {
      'href': image['final-prototype-question-card-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Question card and header - default state with level-1 signed off.',
    },
    {
      'href': image['final-prototype-question-card-2.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Question card and header - updated state.',
    },
    {
      'href': image['final-prototype-question-card-3.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Question card and header - marked as reviewed state.',
    },
    {
      'href': image['final-prototype-question-card-4.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Question card and header - all levels signed off state.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imageDetailPanel = GLightbox({
  elements: [
    {
      'href': image['final-prototype-detail-panel-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Details panel opens up when a user clicks on a qualifying metric.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imageAdditionalDetailPanel = GLightbox({
  elements: [
    {
      'href': image['final-prototype-additional-detail-panel-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Additional details panel showing audit history, comments and glossary.',
    }
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imageBulkSignOff = GLightbox({
  elements: [
    {
      'href': image['final-prototype-bulk-sign-off-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Bulk Sign-off dialog box. Question cards that were marked as reviewed, are automatically selected. Question cards that are completely signed off can’t be selected.',
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
      <Typography style={{ marginTop: '.5rem' }}>After some iterations and further discussions, I presented the final prototype to the team.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-1.jpg']}
          alt="Review Screen"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imageReviewScreen1.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Final version of the review screen. Click on the image to expand.</small>
      </Box>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Summary Panel</Typography>
      <Typography style={{ marginTop: '.5rem' }}>The option to toggle between views was moved to the summary panel. An additional filter was added to allow the users to select particular fund(s) or question(s), depending upon the view selected. The metrics below the view selection gets updated based on the selected fund(s) or question(s).</Typography>
      <Typography style={{ marginTop: '1rem' }}>The sections within the summary panel were reordered based on the priority of the information needed by the users.</Typography>

      <Grid container spacing={2} style={{ marginTop: '.25rem' }}>
        <Grid item xs={4}>
          <img
            src={image['final-prototype-2.jpg']}
            alt="Version 1 of Summary Panel"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallerySummaryPanel1.openAt()}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Version 1</small>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img
            src={image['final-prototype-3.jpg']}
            alt="Version 2 of Summary Panel"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallerySummaryPanel1.openAt(1)}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Version 2</small>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img
            src={image['final-prototype-4.jpg']}
            alt="Final version of Summary Panel"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {gallerySummaryPanel1.openAt(2)}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Final Version</small>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Toolbar</Typography>
      <Typography style={{ marginTop: '.5rem' }}>Added form, entity and selected fund or question name for easy identification. Question titles (while in fund mode) now show the complete name as opposed to just the question number.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-5.jpg']}
          alt="Version 1 of Toolbar"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {galleryToolbar1.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Version 1 of Toolbar. Click on the image to expand.</small>
      </Box>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-6.jpg']}
          alt="Version 1 of Toolbar"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {galleryToolbar1.openAt(1)}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Version 2 of Toolbar. Click on the image to expand.</small>
      </Box><Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-7.jpg']}
          alt="Version 1 of Toolbar"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {galleryToolbar1.openAt(2)}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Final version of Toolbar. Click on the image to expand.</small>
      </Box>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Question Cards</Typography>
      <Typography style={{ marginTop: '.5rem' }}>The question cards were redesigned to indicate the status of the question, highlight overwritten values, actions including at each field level. In addition to this, the navigation bar on top would update to be in sync with not only the question status, but also highlight any tags (viz. overwritten values, database sync errors, etc.).</Typography>

      <Grid container spacing={2} style={{ marginTop: '.25rem' }}>
        <Grid item xs={12} md={6}>
          <img
            src={image['final-prototype-question-card-1.jpg']}
            alt="Question card and header - default state with level-1 signed off"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryQuestionCard.openAt()}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Default state with level-1 signed off.</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image['final-prototype-question-card-2.jpg']}
            alt="Question card and header - default state with level-1 signed off"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryQuestionCard.openAt(1)}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Value overwritten state.</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image['final-prototype-question-card-3.jpg']}
            alt="Question card and header - default state with level-1 signed off"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryQuestionCard.openAt(2)}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Marked as reviewed state.</small>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image['final-prototype-question-card-4.jpg']}
            alt="Question card and header - default state with level-1 signed off"
            width="100%"
            className={"port-thumbnail"}
            onClick={() => {galleryQuestionCard.openAt(3)}}
          />
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>All levels signed off state.</small>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Details Panel</Typography>
      <Typography style={{ marginTop: '.5rem' }}>When the user clicks on a qualifying metric (displayed as a link), the drill-down details panel opens up to show the underlying data.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-detail-panel-1.jpg']}
          alt="Details panel showing drill-down data"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imageDetailPanel.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Details panel showing drill-down data. Click on the image to expand.</small>
      </Box>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Additional Details Panel</Typography>
      <Typography style={{ marginTop: '.5rem' }}>When the user clicks on a qualifying metric (displayed as a link), the drill-down details panel opens up to show the underlying data.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['final-prototype-additional-detail-panel-1.jpg']}
          alt="Additional details panel showing audit history, comments and glossary"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imageAdditionalDetailPanel.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Additional details panel showing audit history, comments and glossary. Click on the image to expand.</small>
      </Box>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Bulk Sign Off</Typography>
      <Grid container spacing={2} style={{ marginTop: '.25rem' }}>
        <Grid item xs={12} md={6}>
          <Typography>A bulk sign-off feature was introduced in the application. This allowed the users to mark a question as reviewed which saved the state in their local session without updating the database. Once satisfied, the users could then do a bulk sign-off.</Typography>
          <Typography style={{ marginTop: '1rem' }}> When the user clicks on the “Bulk Sign-off” button, a dialog box opens listing all the available questions, along with their current sign-off statuses. Question cards that were marked as reviewed, are automatically selected. Question cards that are completely signed off can't be selected. Once the user clicks on sign-off, the applicable sign-off level is given to the selected question cards.</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={image['final-prototype-bulk-sign-off-1.jpg']}
              alt="Bulk Sign-off dialog box"
              width="100%"
              className={"port-thumbnail"}
              onClick={() => {imageBulkSignOff.openAt()}}
            />
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <small style={{ color: grey[700] }}>Bulk Sign-off dialog box. Click on the image to expand.</small>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default FinalDeliverable;