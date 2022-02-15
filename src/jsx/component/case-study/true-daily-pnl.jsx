import { React } from 'react';

import { Container, Grid, Link, Box, Hidden, Typography } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { grey } from '@material-ui/core/colors';

import { HashLink as RouterLink } from 'react-router-hash-link';

import { jumpTo } from '../../../js/script';

import Header from './header';
import Sidebar from './true-daily-pnl/sidebar';
import ApplicationOverview from './true-daily-pnl/application-overview';
import ProblemDescription from './true-daily-pnl/problem-description';
import ProjectObjective from './true-daily-pnl/project-objective';
import DesignProcess from './true-daily-pnl/design-process';
import UserArchetype from './true-daily-pnl/user-archetype';
import ServiceBlueprint from './true-daily-pnl/service-blueprint';
import Exploration from './true-daily-pnl/exploration';
import WhiteboardSession from './true-daily-pnl/whiteboard-session';
import PrototypeFeedback from './true-daily-pnl/prototype-feedback';
import FinalDeliverable from './true-daily-pnl/final-deliverable';

const CaseStudyTdp = () => {
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
                  True Daily P&amp;L
                </Typography>
                <Typography variant="h5">
                  Redesigning process tracker application
                </Typography>
                <Box style={{ marginTop: '2rem' }}>
                  <small style={{ color: `${grey[500]}` }}>
                  COLLABORATORS
                  </small>
                  <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                    Shaiz K.<span style={{ color: `${grey[500]}` }}> / Product Designer</span>
                  </Typography>
                  <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                    Vipul Gupta<span style={{ color: `${grey[500]}` }}> / Product Owner</span>
                  </Typography>
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={9}>
              <ApplicationOverview />
              <ProblemDescription />
              <ProjectObjective />
              <DesignProcess />
              <UserArchetype />
              <ServiceBlueprint />
              <Exploration />
              <WhiteboardSession />
              <PrototypeFeedback />
              <FinalDeliverable />
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
                    <Link style={{ lineHeight: 1.75 }} to='/portfolio/case-study/systematic-risk-filing#application-overview' component={RouterLink}>View True Daily P&amp;L Case Study <ArrowForward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /></Link>
                  </Hidden>
                  <Hidden only={['md', 'lg', 'xl']}>
                    <Link style={{ lineHeight: 1.75 }} to='/portfolio/case-study/systematic-risk-filing#title' component={RouterLink}>View Systematic Risk Filing Case Study <ArrowForward style={{width: '16px', height: '16px', position: 'relative', top: '3px' }} /></Link>
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

export default CaseStudyTdp;