import { React } from 'react';

import { Typography, Hidden } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const ApplicationOverview = () => {
    return (
        <>
            <Hidden only={['xs', 'sm']}>
                <Typography variant="h4" id="application-overview" style={{ paddingTop: '4rem', color: pink[300] }}>Application Overview</Typography>
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
                <Typography variant="h4" id="application-overview" style={{ marginTop: '-2rem', color: pink[300] }}>Application Overview</Typography>
            </Hidden>
            <Typography style={{ marginTop: '.5rem' }}>Systematic Risk Filing (SRF) aimed to optimize and efficiently submit most regulatory reporting requirements for asset management firms.</Typography>
        </>
    )
}

export default ApplicationOverview;