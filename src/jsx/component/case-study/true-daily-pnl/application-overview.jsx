import { React } from 'react';
import GLightbox from 'glightbox';

import {Box, Typography, Hidden } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';

import { importFile } from '../../../../js/script';

const image = importFile(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const gallery = GLightbox({
    elements: [
      {
        'href': image['current-application.jpg'],
        'type': 'image',
        'title': 'True Daily P&L',
        'description': 'Screenshot of current application',
      }
    ],
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
    onOpen: () => {},
    beforeSlideLoad: (slide, data) => {}
});

const ApplicationOverview = () => {
    return (
        <>
            <Hidden only={['xs', 'sm']}>
                <Typography variant="h4" id="application-overview" style={{ paddingTop: '4rem', color: pink[300] }}>Application Overview</Typography>
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
                <Typography variant="h4" id="application-overview" style={{ marginTop: '-2rem', color: pink[300] }}>Application Overview</Typography>
            </Hidden>
            <Typography style={{ marginTop: '.5rem' }}>Profit &amp; Loss (P&amp;L) runs occur on a daily basis to calculate each client’s positions. However, there can be cases when corrections are made in the data at a later date. These corrections are captured in True Daily P&amp;L (TDP) runs. Because clients rely on TDP data for their end of day reporting, any delays in the TDP runs cause breaches in their internal SLAs.</Typography>

            <Box style={{ marginTop: '1rem' }}>
                <img
                    src={image['current-application.jpg']}
                    alt="Screenshot of current application"
                    width="100%"
                    className={"port-thumbnail"}
                    onClick={() => {gallery.openAt()}}
                />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <small style={{ color: grey[700] }}>Screenshot of current application. Click on the image to expand</small>
            </Box>
        </>
    )
}

export default ApplicationOverview;