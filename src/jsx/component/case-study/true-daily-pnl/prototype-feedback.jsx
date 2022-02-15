import { React } from 'react';
import GLightbox from 'glightbox';

import { Box, Typography } from '@material-ui/core';
import { grey, pink, blueGrey } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const stillImage1 = GLightbox({
  elements: [
    {
      'href': image['prototype-1.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Search page design when the user lands on the application',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const stillImage2 = GLightbox({
  elements: [
    {
      'href': image['prototype-2.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Sample search results',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {}
});

const stillImage3 = GLightbox({
  elements: [
    {
      'href': image['prototype-3.jpg'],
      'type': 'image',
      'title': 'True Daily P&L',
      'description': 'Details panel opens up when you select a record',
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
      <Typography style={{ marginTop: '.5rem' }}>I created prototypes using HTML, JS and CSS. I chose this over more popular tools like Figma because I would also assist the frontend developers with the implementation, and having the entire prototype in code resulted in shorter development time. Once the prototypes were ready, I presented the same in a meeting with various stakeholders - members from each of the user archetypes, product owner and developers. The purpose of this meeting was to not only gather feedback on the designs, but also to highlight any additional requirements either in terms of new feature requests or developer bandwidth.</Typography>
      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Search Page</Typography>
      <Typography variant="h6" style={{ marginTop: '.5rem' }}><strong>Design Decisions</strong></Typography>
      <ul style={{ marginTop: '.25rem' }}>
        <li><Typography>A search panel was added to the application, allowing the users to search for runs based on varying criteria, as well as quickly execute recent search queries.</Typography></li>
        <li><Typography>Ability to save these search criteria and set the same as default was also introduced, as different user groups searched for runs using different criteria.</Typography></li>
        <li><Typography>A link to the application wiki was added in the empty space where the results would otherwise get populate.</Typography></li>
      </ul>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['prototype-1.jpg']}
          alt="Search page design when the user lands on the application"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {stillImage1.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Search page design when the user lands on the application. Click on the image to expand.</small>
      </Box>
      <Typography variant="h6" style={{ marginTop: '1rem' }}><strong>User Feedback</strong></Typography>
      <Typography style={{ padding: '0rem .5rem', marginTop: '.5rem', borderLeft: `4px solid ${blueGrey[100]}`, color: blueGrey[700] }}>Client Liaison: <em>We don't usually search for historical dates.</em></Typography>
      <Typography style={{ marginTop: '.5rem' }}>
        Typically, when a user lands on a search page within the Arcesium platform, they have to execute a search to proceed. The users of this application felt that this was an unnecessary step as they primarily want to get information on the current day's runs. The feature to save their search criteria and set it to default search was welcomed.
      </Typography>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Search Results</Typography>
      <Typography variant="h6" style={{ marginTop: '.5rem' }}><strong>Design Decisions</strong></Typography>
      <ul style={{ marginTop: '.25rem' }}>
        <li><Typography>Colour coded the values in different columns so that the users can easily differentiate between the different records, and thus reduce cognitive load.</Typography></li>
        <li><Typography>Runs which has exceeded the expected run duration were highlighted in red to further draw the user's attention. Non-critical information was dropped from the search results grid (and moved to the details panel showcased in the next page).</Typography></li>
        <li><Typography>Frequently used filters were added above the grid, along with a count of the underlying records.</Typography></li>
        <li><Typography>The link to the application wiki was moved above the grid in the corner to the right.</Typography></li>
      </ul>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['prototype-2.jpg']}
          alt="Sample search results"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {stillImage2.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Sample search results. Click on the image to expand.</small>
      </Box>
      <Typography variant="h6" style={{ marginTop: '1rem' }}><strong>User Feedback</strong></Typography>
      <Typography style={{ padding: '0rem .5rem', marginTop: '.5rem', borderLeft: `4px solid ${blueGrey[100]}`, color: blueGrey[700] }}>Client Liaison: <em>There is too much colour on this page.</em></Typography>
      <Typography style={{ marginTop: '.5rem' }}>
        While the initial assumption was that colour coding the columns Run Status, Run Mode, Run Type will help the user easily differentiate the different entries, the feedback we got was that it's not achieving its intended purpose. Information like Run Mode and Run Type aren't critical, and by colour coding them, the focus shifted away from the Estimated Time for Completion column just to the left of Run Mode.
      </Typography>

      <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Details Panel</Typography>
      <Typography variant="h6" style={{ marginTop: '.5rem' }}><strong>Design Decisions</strong></Typography>
      <ul style={{ marginTop: '.25rem' }}>
        <li><Typography>The details panel expands whenever the user selects any record in the grid by clicking on it. This done to layer the information so that the primary users of this application (Client Executive &amp; Client Liaison) aren't bombarded with information in the results grid.</Typography></li>
        <li><Typography>Colour coded metrics were added so that the Operations team can analyze the data and look at the timelines to determine the cause of failure.</Typography></li>
        <li><Typography>Complete run information was added to include the columns that were dropped from the results grid. This enabled us to reduce the amount of horizontal scrolling users need to do in order to see the complete meta-data for a given run.</Typography></li>
        <li><Typography>A button to log ticket was added which would automatically add a deep link to this run's details panel on the ticket, along with relevant meta data.</Typography></li>
      </ul>
      <Box style={{ marginTop: '.5rem' }}>
        <img
          src={image['prototype-3.jpg']}
          alt="Details panel opens up when you select a record"
          width="100%"
          className={"port-thumbnail"}
          onClick={() => {stillImage3.openAt()}}
        />
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <small style={{ color: grey[700] }}>Sample search results. Click on the image to expand.</small>
      </Box>
      <Typography variant="h6" style={{ marginTop: '1rem' }}><strong>User Feedback</strong></Typography>
      <Typography style={{ padding: '0rem .5rem', marginTop: '.5rem', borderLeft: `4px solid ${blueGrey[100]}`, color: blueGrey[700] }}>Client Liaison: <em>The clients don't fully understand the metrics and may misinterpret the data.</em></Typography>
      <Typography style={{ padding: '0rem .5rem', marginTop: '.5rem', borderLeft: `4px solid ${blueGrey[100]}`, color: blueGrey[700] }}>Client Liaison: <em>We may see more tickets logged because of the presence of the Log Ticket button.</em></Typography>
      <Typography style={{ padding: '0rem .5rem', marginTop: '.5rem', borderLeft: `4px solid ${blueGrey[100]}`, color: blueGrey[700] }}>Operations Analyst: <em>It’s not clear which task has failed.</em></Typography>
      <Typography style={{ marginTop: '.5rem' }}>
        We simplified the underlying data keeping our secondary goal in mind without overwhelming the users, but it missed the mark, as the Client Liaison still felt overwhelmed, and the Operations Analysts felt they didn’t have enough information to make an informed decision.
      </Typography>
    </>
  )
}

export default PrototypeFeedback;