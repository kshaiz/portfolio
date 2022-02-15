import { React } from 'react';

import { Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const ProjectObjective = () => {
    return (
        <>
          <Typography variant="h4" id='project-objective' style={{ paddingTop: '4rem', color: pink[300] }}>Project Objectives</Typography>
          <Typography variant="h5" style={{ marginTop: '1rem', color: pink[300] }}>Primary Objectives</Typography>
          <Typography style={{ marginTop: '.25rem' }}>The primary objective of this project was to provide meaningful visibility of TDP runs and schedules in order to:</Typography>
          <ul style={{ marginTop: '.25rem' }}>
            <li><Typography>reduce informational TDP delay support tickets</Typography></li>
            <li><Typography>reduce turnaround on TDP delay support tickets</Typography></li>
            <li><Typography>reduce Operations team’s time to address TDP related queries</Typography></li>
          </ul>
          <Typography variant="h5" style={{ marginTop: '2rem', color: pink[300] }}>Secondary Objectives</Typography>
          <Typography style={{ marginTop: '.25rem' }}>The secondary goal of this project was to educate the users about the background processes involved in a TDP run, so that they can debug certain types of delays themselves and choose the correct course of action. This will reduce the number of support tickets logged by clients, and save a lot of time.</Typography>
        </>
    )
}

export default ProjectObjective;