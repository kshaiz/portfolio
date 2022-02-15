import { React } from 'react';
import GLightbox from 'glightbox';

import {Box, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const imageCurrentApplication = GLightbox({
    elements: [
      {
        'href': image['current-application.jpg'],
        'type': 'image',
        'title': 'Systematic Risk Filing',
        'description': 'Screenshot of current application',
      }
    ],
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {}
});

const CurrentApplicationAnalysis = () => {
    return (
        <>
            <Typography variant="h4" id="current-application-analysis" style={{ paddingTop: '4rem', color: pink[300] }}>Current Application Analysis</Typography>
            <Typography style={{ marginTop: '.5rem' }}>I started by analysing the current application and meeting with stakeholders to understand their pain points as well as what they would like to see persisted in the new application.</Typography>
            <Box style={{ marginTop: '.5rem' }}>
                <img
                    src={image['current-application.jpg']}
                    alt="Screenshot of current application"
                    width="100%"
                    className={"port-thumbnail"}
                    onClick={() => {imageCurrentApplication.openAt()}}
                />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <small style={{ color: grey[700] }}>Screenshot of current application. Click on the image to expand</small>
            </Box>
            <Typography variant="h5" style={{ marginTop: '1rem', color: pink[300] }}>Layout was unoptimized</Typography>
            <Typography style={{ marginTop: '.5rem' }}>Users would typically spends upwards of an hour on each filing per session. This meant that once the user selected the filing, the entire search panel on the left was rendered virtually useless. To add to this, the users had to make several clicks in order to select the target filing.</Typography>
            <Typography style={{ marginTop: '1rem' }}>The filter panel above the questions allowed users to select the entities as well as filter the questions by groups or individual questions. However, this took up a lot of space in the UI, leaving very little for the core content. While this panel was collapsible, the ensuing interaction made it very cumbersome to filter the questions and view them at the same time.</Typography>

            <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Lack of transparency</Typography>
            <Typography style={{ marginTop: '.5rem' }}>These filings were used to file regulatory reports, and any delays in filing the same or inaccuracy in data could result in hefty fines for our clients or worse. With that in mind, I highlighted some of the issues I noticed in the application based on my conversations with the users.</Typography>
            <ul style={{ marginTop: '.5rem' }}>
                <li><Typography>Users didn't have a summary of the filing, which forced them to go through the entire form in order to determine the current state.</Typography></li>
                <li style={{ marginTop: '.5rem' }}><Typography>There were no indicators for which questions have been reviewed, and thus, they had to maintain a list of reviewed questions offline.</Typography></li>
                <li style={{ marginTop: '.5rem' }}><Typography>All communication regarding the filing happened offline, which became an issue when it was being reviewed, due to the lack of an audit trail.</Typography></li>
            </ul>
        </>
    )
}

export default CurrentApplicationAnalysis;