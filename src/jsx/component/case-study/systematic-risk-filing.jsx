import { React } from 'react';

import { Container, Grid, Link, Box, Hidden, Typography } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { grey } from '@material-ui/core/colors';

import { HashLink as RouterLink } from 'react-router-hash-link';

import { jumpTo } from '../../../js/script';

import Header from './header';
import Sidebar from './systematic-risk-filing/sidebar';
import ApplicationOverview from './systematic-risk-filing/application-overview';
import ProblemDescription from './systematic-risk-filing/problem-description';
import BusinessGoal from './systematic-risk-filing/business-goal';
import DesignProcess from './systematic-risk-filing/design-process';
import CurrentApplicationAnalysis from './systematic-risk-filing/current-application-analysis';
import UserArchetype from './systematic-risk-filing/user-archetype';
import UserFlow from './systematic-risk-filing/user-flow';
import WhiteboardSession from './systematic-risk-filing/whiteboard-session';
import PrototypeFeedback from './systematic-risk-filing/prototype-feedback';
import FinalDeliverable from './systematic-risk-filing/final-deliverable';
import RelatedProject from './systematic-risk-filing/related-project';

const CaseStudySrf = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Grid container spacing={8} style={{ paddingBottom: '4rem' }}>
            <Hidden only={['xs', 'sm']}>
              <Grid item xs={0} md={3} style={{ paddingTop: '6rem' }}>
                <Sidebar />
              </Grid>
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
              <Grid item xs={12} style={{ paddingTop: '9rem' }} id="title">
                <small style={{ color: `${grey[500]}` }}>CASE STUDY / ARCESIUM</small>
                <Typography variant="h3">
                  Systematic Risk Filing
                </Typography>
                <Typography variant="h5">
                  Regulatory filing portal design
                </Typography>
                <Box style={{ marginTop: '2rem' }}>
                  <small style={{ color: `${grey[500]}` }}>
                  COLLABORATORS
                  </small>
                  <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                    Shaiz K.<span style={{ color: `${grey[500]}` }}> / Product Designer</span>
                  </Typography>
                  <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                    Arifa Kazi<span style={{ color: `${grey[500]}` }}> / Product Owner</span>
                  </Typography>
                  <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                    Sahil Agarwal<span style={{ color: `${grey[500]}` }}> / Developer</span>
                  </Typography>
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={9}>
              <ApplicationOverview />
              <ProblemDescription />
              <BusinessGoal />
              <DesignProcess />
              <CurrentApplicationAnalysis />
              <UserArchetype />
              <UserFlow />
              <WhiteboardSession />
              <PrototypeFeedback />
              <FinalDeliverable />
              <RelatedProject />
              
              <Grid container style={{ marginTop: '4rem' }}>
                <Grid item xs={12} md={"auto"}>
                  <Hidden only={['xs', 'sm']}>
                    <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('application-overview')}}><ArrowUpward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /> Scroll to Top</Link>
                  </Hidden>
                  <Hidden only={['md', 'lg', 'xl']}>
                    <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('title')}}><ArrowUpward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /> Scroll to Top</Link>
                  </Hidden>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs={12} md={"auto"} style={{ textAlign: 'right' }}>
                  <Hidden only={['xs', 'sm']}>
                    <Link style={{ lineHeight: 1.75 }} to='/portfolio/case-study/true-daily-pnl#application-overview' component={RouterLink}>View True Daily P&amp;L Case Study <ArrowForward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /></Link>
                  </Hidden>
                  <Hidden only={['md', 'lg', 'xl']}>
                    <Link style={{ lineHeight: 1.75 }} to='/portfolio/case-study/true-daily-pnl#title' component={RouterLink}>View True Daily P&amp;L Case Study <ArrowForward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /></Link>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default CaseStudySrf;