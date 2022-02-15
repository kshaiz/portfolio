import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Typography } from '@material-ui/core';
import { grey, pink, blueGrey } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const imagePrototype1 = GLightbox({
  elements: [
    {
      'href': image['prototype-1.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'First draft of the prototype capturing the key elements.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imagePrototype2 = GLightbox({
  elements: [
    {
      'href': image['prototype-2.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Whiteboard session to discuss the first draft of the prototype.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const imagePrototype3 = GLightbox({
  elements: [
    {
      'href': image['prototype-3.jpg'],
      'type': 'image',
      'title': 'Systematic Risk Filing',
      'description': 'Second version of the prototype with more changes and additional.',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const PrototypeFeedback = () => {
  return (
    <>
      <Typography variant="h4" id="prototype-feedback" style={{ paddingTop: '4rem', color: pink[300] }}>Prototypes &amp; Feedback</Typography>
      <Typography style={{ marginTop: '.5rem' }}>I created a prototype of the review page using HTML, JS and CSS. I chose this over more popular tools like Figma because I would also assist the frontend developers with the implementation, and having the entire prototype in code resulted in shorter development time.</Typography>
      <Box style={{ marginTop: '1rem' }}>
        <img
          src={image['prototype-1.jpg']}
          alt="First draft of the prototype capturing the key elements."
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imagePrototype1.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>First draft of the prototype capturing the key elements. Click on the image to expand.</small>
      </Box>
      <Typography variant="h6" style={{ marginTop: '.5rem' }}><strong>Design Decisions</strong></Typography>
      <ol style={{ marginTop: '.25rem' }}>
        <li><Typography>Message notifying the users about questions that were updated/ re-opened, along with a way to filter said questions directly.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Placeholder containers for the current filing summary.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Replaced the search panel in the existing application with a button which will open a dialog box to select the another filing.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Applicable funds are displayed on the top, and the applicable questions for the selected fund (highlighted in teal) show up below. Questions are highlighted to indicate their status (approved, reviewed, re-opened, etc.) The question cards displayed below this show answers for the selected fund.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Ability to toggle between fund and question view. In question view, the position of the funds and questions shown in point#3 are swapped. This lets the users review the answers for a single question for multiple funds. Other global actions associated with the filing are also placed here.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Mentions question card title and total number of comments added in this card across all questions.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Shows approval levels required, and the name of the person who has approved at a particular level (if applicable).</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Indicates that a comment was added on this question.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Card level actions.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Placeholder section for showing comments.</Typography></li>
      </ol>

      <Typography style={{ marginTop: '2rem' }}>Once the prototype was ready, I discussed the same with the team, and brainstormed improvements to the design in a whiteboard session. This was also the stage when I fleshed out more details for the UI and discussed the same in the meeting. This iterative method resulted in a faster delivery time, essential for a time bound project like this.</Typography>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['prototype-2.jpg']}
          alt="Whiteboard session to discuss the first draft of the prototype."
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imagePrototype2.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Whiteboard session to discuss the first draft of the prototype. Click on the image to expand.</small>
      </Box>

      <Typography style={{ marginTop: '2rem' }}>I further improved the design based on the previous feedback, and fleshed out more details.</Typography>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['prototype-3.jpg']}
          alt="Second version of the prototype with more changes and additional."
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {imagePrototype3.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Second version of the prototype with changes and additional details. Click on the image to expand.</small>
      </Box>
      <Typography variant="h6" style={{ marginTop: '.5rem' }}><strong>Design Decisions</strong></Typography>
      <ol style={{ marginTop: '.25rem' }}>
        <li><Typography>As the filing activity takes place over the course of several days, an interactive activity summary was added to allow the users to track the progress.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>The top level selection (fund or question depending upon the view type) was changed to a dropdown, because the users wouldn’t be switching this selection frequently during a single session. Switching them to a dropdown allowed for a cleaner and more focused view.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Bulk sign-off was added to allow the user a quick way to approve the questions they have marked as “Reviewed”</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Overridden questions were highlighted and an “Undo” button was added to revert to its default value.</Typography></li>
        <li style={{ marginTop: '.25em' }}><Typography>Placeholder section for viewing underlying data for a particular value in a question.</Typography></li>
      </ol>
    </>
  )
}

export default PrototypeFeedback;