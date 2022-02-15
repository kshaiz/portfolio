import { React } from 'react';

import {Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const ProblemDescription = () => {
    return (
        <>
            <Typography variant="h4" id="problem-description" style={{ paddingTop: '4rem', color: pink[300] }}>Problem Description</Typography>
            <Typography style={{ marginTop: '.5rem' }}>The current application reports the TDP run completion status, without providing any further information about the cause of the delay, backlogs, task breakdowns, etc. In the event of delays, the Client Liaison team have to reach out to the Operations team to get these details. Considerable amount of time is spent co-ordinating with different teams to fetch this information and relay the same to the clients to ensure that their tasks are getting completed before any deadlines. Many of these tasks are repetitive in nature, but in the absence of a dedicated UI, have to be manually fetched by Operations team causing loss of time.</Typography>
        </>
    )
}

export default ProblemDescription;