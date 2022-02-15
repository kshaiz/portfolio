import { React } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { yellow, pink, teal } from '@material-ui/core/colors';

const UserArchetype = () => {
  return (
    <>
      <Typography variant="h4" id="user-archetype" style={{ paddingTop: '4rem', color: pink[300] }}>User Archetypes</Typography>
      <Grid container spacing={4} style={{ marginTop: '.25rem' }}>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: pink[100], textAlign: 'center' }}>
            <Typography variant="h5">Operations Analysts</Typography>
            <small>Internal Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: pink[50] }}>
            <Typography>
              <p>Operations analysts are the first point of contact and responsible for data quality issues, tracking filing progress and getting any reported issues resolved by reaching out to the correct teams who provided the underlying data.</p>
              <p>
                <strong>Interview Notes:</strong><br/>
                <span>Would like to see summary of data quality checks, impacted questions, assigned tasks. Want to create notification events and configure review levels based upon client requirements.</span>
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: teal[200], textAlign: 'center' }}>
            <Typography variant="h5">Review Analysts</Typography>
            <small>Internal/External Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: teal[50] }}>
            <Typography>
              <p>Depending upon the client's needs, there can be one or more levels of reviews, which are typically split into different groups (viz., Risk, Compliance, Management Reporting, etc.) responsible for reviewing the various questions. Multiple levels of reviews correspond to the management levels within the firm (e.g. level-1 review is handled by analysts, while level-2 reviews are handles by senior analysts).</p>
              <p>
                <strong>Interview Notes:</strong><br/>
                <span>Would like to filter by categories, questions, funds, assigned tasks. Bulk sign-off, historical views and drill-downs would be useful. Would like to configure reminders to ensure that deadlines are met.</span>
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ borderRadius: '.5rem .5rem 0 0', padding: '1rem', backgroundColor: yellow[400], textAlign: 'center' }}>
            <Typography variant="h5">CCO/Directors</Typography>
            <small>External Users</small>
          </div>
          <div style={{ borderRadius: '0 0 .5rem .5rem', padding: '1rem', backgroundColor: yellow[50] }}>
            <Typography>
              <p>The last level of reviewers who are responsible for signing off on the filing before it's uploaded to the regulator's portals.</p>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default UserArchetype;