import { React } from 'react';

import { Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const BusinessGoal = () => {
  return (
    <>
      <Typography variant="h4" id='business-goal' style={{ paddingTop: '4rem', color: pink[300] }}>Business Goals</Typography>
      <Typography style={{ marginTop: '.5rem' }}>With an aim to minimize client pain points and drawbacks associated with regulatory filing processes, two goals were defined for this project:</Typography>
      <Typography style={{ marginTop: '1rem' }}><strong>Improve operational efficiency by</strong></Typography>
      <ul style={{ marginTop: '.25rem' }}>
        <li><Typography>creating a reporting infrastructure to connect existing information/files from different systems</Typography></li>
        <li><Typography>automating data inputs to eliminate manual uploads</Typography></li>
        <li><Typography>allowing the users to create custom status/rules to reduce time spent on manual reviews</Typography></li>
        <li><Typography>setting up user alerts to highlight report creation, changes, overrides, submissions, etc.</Typography></li>
      </ul>
      <Typography style={{ marginTop: '2rem' }}><strong>Improve transparency by</strong></Typography>
      <ul style={{ marginTop: '.25rem' }}>
        <li><Typography>allowing the users to view drill-down of any calculation to the underlying raw data/configuration</Typography></li>
        <li><Typography>commenting on and maintaining audit history for questions</Typography></li>
        <li><Typography>establishing multiple levels of audit for tracking changes made to the reports</Typography></li>
      </ul>
    </>
  )
}

export default BusinessGoal;