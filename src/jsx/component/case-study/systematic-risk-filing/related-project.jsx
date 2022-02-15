import { React } from 'react';
import GLightbox from 'glightbox';

import {Box, Typography, Link } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile, jumpTo } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const imageRelatedProject1 = GLightbox({
    elements: [
      {
        'href': image['related-project-event-manager.jpg'],
        'type': 'image',
        'title': 'Systematic Risk Filing',
        'description': 'Screenshot of event manager application, used to create regulatory filing events and manage user notifications.',
      }
    ],
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {}
});

const imageRelatedProject2 = GLightbox({
    elements: [
      {
        'href': image['related-project-workflow-manager.jpg'],
        'type': 'image',
        'title': 'Systematic Risk Filing',
        'description': 'Screenshot of workflow manager application, used to allow the users to customize the approval stages (as shown in the user flow) for their filing needs.',
      }
    ],
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {}
});
const RelatedProject = () => {
    return (
        <>
            <Typography variant="h4" id="related-project" style={{ paddingTop: '4rem', color: pink[300] }}>Related Projects</Typography>
            <Typography variant="h5" style={{ marginTop: '.5rem', color: pink[300] }}>Event Manager</Typography>
            <Typography style={{ marginTop: '.5rem' }}>Application to create regulatory filing events and manage user notifications.</Typography>

            <Box style={{ marginTop: '.5rem' }}>
                <img
                    src={image['related-project-event-manager.jpg']}
                    alt="Screenshot of event manager"
                    width="100%"
                    className={"port-thumbnail"}
                    onClick={() => {imageRelatedProject1.openAt()}}
                />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <small style={{ color: grey[700] }}>Screenshot of event manager. Click on the image to expand</small>
            </Box>

            <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Workflow Manager</Typography>
            <Typography style={{ marginTop: '.5rem' }}>The workflow manager was created to allow the users to customize the approval stages (as shown in the <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('user-flow')}}>user flow</Link>) for their filing needs.</Typography>

            <Box style={{ marginTop: '.5rem' }}>
                <img
                    src={image['related-project-workflow-manager.jpg']}
                    alt="Screenshot of workflow manager"
                    width="100%"
                    className={"port-thumbnail"}
                    onClick={() => {imageRelatedProject2.openAt()}}
                />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <small style={{ color: grey[700] }}>Screenshot of workflow manager. Click on the image to expand</small>
            </Box>
        </>
    )
}

export default RelatedProject;