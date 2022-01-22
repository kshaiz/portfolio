import React from 'react';

import {Box, Container, Grid, Typography, Button, Divider, Link } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import { importFile, downloadFile } from '../../../js/script';

const logo = importFile(require.context('../../../img/logo', false, /\.(png|jpe?g|svg)$/));
const resume = importFile(require.context('../../../pdf', false, /\.(pdf)$/));

const About = () => {
  return (
    <>
      <Box sx={{ minHeight: "100vh", py: "4rem", backgroundColor: blueGrey[50] }} id='about'>
        <Grid container alignItems="stretch" spacing={6} direction="column" style={{ height: "calc(100vh - 80px)"}}>
          <Grid item xs />
          <Grid item xs="auto">
            <Container>
              <Typography variant="h4">
                Hello! I'm
              </Typography>
              <Typography variant="h1">
                Shaiz Kunhimohammed
              </Typography>
              <Typography variant="h3">
                a Product Designer based in Toronto, Canada
              </Typography>
              <Typography variant="h5" style={{ marginTop: "1em" }}>
                I have been working as a designer for 10+ years, translating business goals into products that satisfy user needs. An avid learner, I am always seeking out opportunities to learn &amp; contribute towards user-centered product development.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs="auto">
            <Container>
              <Grid container spacing={6}>
                <Grid item xs="auto">
                  <Typography variant="overline">Master of Design</Typography>
                  <Box mt={1}>
                    <img src={logo['unsw.png']} alt="University of New South Wales Logo" title="University of New South Wales Logo" height="100px" />
                  </Box>
                </Grid>
                <Grid item xs="auto" align="center">
                  <Typography variant="overline">Bachelor of Design</Typography>
                  <Box mt={1}>
                    <img src={logo['iitg.png']} alt="Indian Institute of Technology Guwahati Logo" title="Indian Institute of Technology Guwahati Logo" height="100px" />
                  </Box>
                </Grid>
                <Grid item xs />
                <Grid item xs={3}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={"auto"}>
                      <Link href="https://www.linkedin.com/in/shaizk/" target={"_blank"}>
                        <img src={logo['linkedin.png']} alt="LinkedIn Logo" title="Visit my LinkedIn Profile" height="36px" />
                      </Link>
                    </Grid>
                    <Grid item xs={"auto"}>
                      <Typography size="large" style={{ marginTop: "-5px" }}><b>k.shaiz@gmail.com</b></Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" size="large" onClick={() => {downloadFile( resume, "shaiz-kunhimohammed-resume", "pdf")}} style={{ width: '100%' }}>Download Resume</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
      <Container align="center">
        <Box style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <Typography variant="h3" style={{ textTransform: "uppercase" }}>Core Competencies</Typography>
        </Box>
        <Grid container spacing={2} align="center" style={{ paddingBottom: '4rem' }}>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  User Research
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Design System
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Visual Design
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Responsive Layouts
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Wireframes
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Prototypes
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box maxWidth="50%">
          <Divider />
        </Box>
        <Box style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <Typography variant="h3" style={{ textTransform: "uppercase" }}>Toolsets</Typography>
          <Typography variant="h5" style={{width: "calc(800%/12)", marginTop: '.5em'}}>Over the course of my career, I have used various tools to produce the deliverables best suited for the project requirements.</Typography>
        </Box>
        <Grid container spacing={4} align="center" style={{ paddingBottom: '4rem' }}>
          <Grid item xs={3} align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={logo['adobeai.png']} alt="Adobe Illustrator" title="Adobe Illustrator" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['adobeps.png']} alt="Adobe Photoshop" title="Adobe Photoshop" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['adobeid.png']} alt="Adobe InDesign" title="Adobe InDesign" height="100px" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={logo['adobexd.png']} alt="Adobe XD" title="Adobe XD" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['figma.png']} alt="Figma" title="Figma" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['moqups.png']} alt="Moqups" title="Moqups" height="100px" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={logo['whiteboard.png']} alt="Microsoft Whiteboard" title="Microsoft Whiteboard" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['html.png']} alt="HTML" title="HTML" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['js.png']} alt="JavaScript" title="JavaScript" height="100px" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={logo['css.png']} alt="CSS" title="CSS" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['scss.png']} alt="SCSS" title="SCSS" height="100px" />
              </Grid>
              <Grid item xs={12}>
                <img src={logo['react.png']} alt="React" title="React" height="100px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box maxWidth="50%">
          <Divider/>
        </Box>
      </Container>
    </>
  )
}

export default About;