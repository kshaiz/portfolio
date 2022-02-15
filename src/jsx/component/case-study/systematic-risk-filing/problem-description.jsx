import { React } from 'react';

import {Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const ProblemDescription = () => {
    return (
        <>
            <Typography variant="h4" id="problem-description" style={{ paddingTop: '4rem', color: pink[300] }}>Problem Description</Typography>
            <Typography style={{ marginTop: '.5rem' }}>The compliance frameworks of investment firms are tightly regulated, with requirements of various reports needing to be submitted at different times. These reports and their schedules vary from region to region, and missing any filing or reporting inaccurate data can lead to fines or even termination of trading license.</Typography>
            <Typography style={{ marginTop: '1rem' }}>e.g. In US, the SEC and CFTC requires hedge funds to file Form PF for hedge funds and private equity funds, CPO-PQR for their commodity pools,13F for trading huge volume listed securities. Similarly, In EU, hedge funds are required to report AIFMD to the relevant marketed jurisdiction in which they are marketing their funds.</Typography>
        </>
    )
}

export default ProblemDescription;