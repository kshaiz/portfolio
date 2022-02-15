import { React } from 'react';
import GLightbox from 'glightbox';

import {Box, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const imageUserFlow = GLightbox({
    elements: [
      {
        'href': image['user-flow.jpg'],
        'type': 'image',
        'title': 'Systematic Risk Filing',
        'description': 'User flow was created to better understand the process and identify touch points between the archetypes.',
      }
    ],
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {}
});

const UserFlow = () => {
    return (
        <>
            <Typography variant="h4" id="user-flow" style={{ paddingTop: '4rem', color: pink[300] }}>User Flow</Typography>
            <Typography style={{ marginTop: '.5rem' }}>Given the complex journey the filing takes spread across multiple days and review cycles conducted by different users, a user flow was created to better understand the process and identify touch points between the archetypes.</Typography>
            <Box style={{ marginTop: '.5rem' }}>
                <img
                    src={image['user-flow.jpg']}
                    alt="User flow"
                    width="100%"
                    className={"port-thumbnail"}
                    onClick={() => {imageUserFlow.openAt()}}
                />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <small style={{ color: grey[700] }}>User flow. Click on the image to expand</small>
            </Box>
        </>
    )
}

export default UserFlow;