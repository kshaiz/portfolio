import React from 'react';

import {Box, Container, Grid, Typography } from '@material-ui/core';

import CorporateActionDashboard from './component/arcesium/corporate-action-dashboard';
import PersonalTradeApprovalPortal from './component/arcesium/personal-trade-approval-portal';
import InvestorAccountManager from './component/arcesium/investor-account-manager';
import EventManager from './component/arcesium/event-manager';
import ReportingAnalyticsRevamp from './component/pubmatic/reporting-analytics-revamp';
import MathsPlatform from './component/mettl/maths-platform';
import MarketingVideo from './component/mettl/marketing-video';

const OtherWork = () => {
  return (
    <>
      <Box style={{ paddingTop: '8rem', paddingBottom: '4rem', marginTop: '-4rem' }} id='other-work'>
        <Typography variant="h2" style={{ textTransform: "uppercase", textAlign: "center" }}>Other Works</Typography>
      </Box>
      <Container>
        <Grid container direction="column" style={{ paddingBottom: "4rem"}}>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <CorporateActionDashboard />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <InvestorAccountManager />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <PersonalTradeApprovalPortal />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <EventManager />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <ReportingAnalyticsRevamp />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <MathsPlatform />
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: '3rem' }}>
            <MarketingVideo />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default OtherWork;