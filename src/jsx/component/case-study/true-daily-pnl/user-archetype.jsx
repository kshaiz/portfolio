import { React } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { blue, pink, teal } from '@material-ui/core/colors';

const UserArchetype = () => {
  return (
    <>
      <Typography variant="h4" id="user-archetype" style={{ paddingTop: '4rem', color: pink[300] }}>User Archetypes</Typography>
      <Grid container spacing={4} style={{ marginTop: '.25rem' }}>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: blue[200], textAlign: 'center' }}>
            <Typography variant="h5">Client Liaison Group</Typography>
            <small>Internal Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: blue[50] }}>
            <Typography>
              <p>As the primary users of the application, they monitor the current day’s P&amp;L runs and report any delays to the Client. They also co-ordinate with the Operations team to understand the reason for delay as well as the estimate time for completion, or to get any additional information as requested by the Client.</p>
              <p>
                <strong>Interview Notes:</strong><br/>
                <span>Lack of available actions or information in the current application them to reach out to Operations team every time.</span>
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: pink[200], textAlign: 'center' }}>
            <Typography variant="h5">Client Executives</Typography>
            <small>External Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: pink[50] }}>
            <Typography>
              <p>Executives from the Client’s firm visit the application to confirm the completion status of the P&L runs, before they start their work. Depending upon their company setup, they often are interested only in a subset of the runs happening on the platform.</p>
              <p>
                <strong>Interview Notes:</strong><br/>
                <span>Would like to search using one or more criteria like date, run mode, completion status, IDs, reason codes, etc.</span>
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: teal[200], textAlign: 'center' }}>
            <Typography variant="h5">Operations Analysts</Typography>
            <small>Internal Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: teal[50] }}>
            <Typography>
              <p>Analysts from the Operations team usually communicate with the Client Liaison, and provide them with information regarding the run schedule, estimate time for completion, past trends, or re-trigger the runs (in case of time-outs or failures).</p>
              <p>
                <strong>Interview Notes:</strong><br/>
                <span>Many support tickets are resolved by re-triggering the runs, which could potentially be done by the Client Liaison or the Client themselves.</span>
              </p>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default UserArchetype;