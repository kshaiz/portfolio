import React from 'react';

import {Box, Container, Grid, Typography, Button, Divider, Link, makeStyles, Hidden } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import { importFile, downloadFile } from '../../../js/script';
import Breakpoint from '../../breakpoint';

const logo = importFile(require.context('../../../img/logo', false, /\.(png|jpe?g|svg)$/));
const resume = importFile(require.context('../../../pdf', false, /\.(pdf)$/));

const useStyles = makeStyles({
  portHeroBox: {
    minHeight: '100vh',
    backgroundColor: blueGrey[50],
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  portHeroGrid: {
    margin: 0,
    minHeight: 'calc(100vh - 4rem)',
    width: '100%'
  },
  portEducationMaster: {
    [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
      textAlign: 'center',
    },
  },
  portEducationLogo: {
    height: '100px',
  },
  portResumeButton: {
    // width: '100%',
    whiteSpace: 'no-wrap',

    [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
      width: 'auto',
    },
  },
  portContactDetail: {
    
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.portHeroBox} id='about'>
        <Grid className={classes.portHeroGrid} container spacing={6} direction="column">
          <Grid item xs />
          <Grid item xs="auto">
            <Container>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Hello! I'm
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h1">
                    Shaiz Kunhimohammed
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3">
                    a Product Designer based in Toronto, Canada
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ marginTop: "1em" }}>
                  I started my career as a UX Designer in Sydney (Australia), translating business goals into products that satisfy user needs. Over the course of 10+ years, I have worked in multi-disciplinary teams, from small startups to multinational corporations, launching products in diverse sectors such as FinTech, ad marketplace and eLearning. I recently moved to Canada (on PR) and am seeking out opportunities to learn &amp; contribute towards user-centered product development.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={6} style={{ marginTop: '2rem' }}>
                <Grid item xs={12} sm="auto" className={classes.portEducationMaster}>
                  <Typography variant="overline">Master of Design</Typography>
                  <Box mt={1}>
                    <img src={logo['unsw.png']} alt="University of New South Wales Logo" title="University of New South Wales Logo" className={classes.portEducationLogo} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm="auto" align="center">
                  <Typography variant="overline">Bachelor of Design</Typography>
                  <Box mt={1}>
                    <img src={logo['iitg.png']} alt="Indian Institute of Technology Guwahati Logo" title="Indian Institute of Technology Guwahati Logo" className={classes.portEducationLogo} />
                  </Box>
                </Grid>
                <Grid item xs={0} md />
                <Hidden only={['xs', 'sm']}>
                  <Grid  item xs={12} sm={"auto"}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs />
                      <Grid item xs="auto">
                        <Link href="https://www.linkedin.com/in/shaizk/" target={"_blank"}>
                          <img src={logo['linkedin.png']} alt="LinkedIn Logo" title="Visit my LinkedIn Profile" height="36px" />
                        </Link>
                      </Grid>
                      <Grid item xs={"auto"}>
                        <Typography size="large" style={{ marginTop: "-5px" }}><b>k.shaiz@gmail.com</b></Typography>
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'right' }}>
                        <Button variant="contained" color="primary" size="large" className={classes.portResumeButton} onClick={() => {downloadFile( resume, "shaiz-kunhimohammed-resume", "pdf")}}>Download Resume</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                  <Grid item item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs />
                      <Grid item xs="auto">
                        <Link href="https://www.linkedin.com/in/shaizk/" target={"_blank"}>
                          <img src={logo['linkedin.png']} alt="LinkedIn Logo" title="Visit my LinkedIn Profile" height="36px" />
                        </Link>
                      </Grid>
                      <Grid item xs={"auto"}>
                        <Typography size="large" style={{ marginTop: "-5px" }}><b>k.shaiz@gmail.com</b></Typography>
                      </Grid>
                      <Grid item xs />
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" size="large" className={classes.portResumeButton} onClick={() => {downloadFile( resume, "shaiz-kunhimohammed-resume", "pdf")}}>Download Resume</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
      <Container align="center">
        <Box style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <Typography variant="h3" style={{ textTransform: "uppercase" }}>Areas of Interest</Typography>
        </Box>
        <Hidden only={['xs', 'sm']}>
          <Grid container spacing={2} align="center" style={{ paddingBottom: '4rem' }}>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    User Experience
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    User Interface
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Design Systems
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Visual Design
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Design for Scale
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Responsive Design
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Prototypes
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Usability
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <Grid container spacing={2} align="center" style={{ paddingBottom: '4rem' }}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    User Experience
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    User Interface
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Design Systems
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Visual Design
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Design for Scale
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Responsive Design
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Prototypes
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Usability
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Box maxWidth="50%">
          <Divider />
        </Box>
        <Box style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <Typography variant="h3" style={{ textTransform: "uppercase" }}>Toolsets</Typography>
          <Typography variant="h5" style={{width: "calc(800%/12)", marginTop: '.5rem'}}>Over the course of my career, I have used various tools to produce the deliverables best suited for the project requirements.</Typography>
        </Box>
        <Hidden only={['md', 'lg', 'xl']}>
          <Grid container spacing={4} align="center" style={{ paddingBottom: '4rem' }}>
            <Grid item xs={4} align="center">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={logo['figma.png']} alt="Figma" title="Figma" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['adobexd.png']} alt="Adobe XD" title="Adobe XD" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['moqups.png']} alt="Moqups" title="Moqups" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['whiteboard.png']} alt="Microsoft Whiteboard" title="Microsoft Whiteboard" height="100px" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} align="center">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={logo['react.png']} alt="React" title="React" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['html.png']} alt="HTML" title="HTML" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['js.png']} alt="JavaScript" title="JavaScript" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['scss.png']} alt="SCSS" title="SCSS" height="100px" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} align="center">
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
          </Grid>
        </Hidden>
        <Hidden only={['xs', 'sm']}>
          <Grid container spacing={4} align="center" style={{ paddingBottom: '4rem' }}>
            <Grid item xs={3} align="center">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={logo['figma.png']} alt="Figma" title="Figma" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['adobexd.png']} alt="Adobe XD" title="Adobe XD" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['moqups.png']} alt="Moqups" title="Moqups" height="100px" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} align="center">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={logo['react.png']} alt="React" title="React" height="100px" />
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
                  <img src={logo['scss.png']} alt="SCSS" title="SCSS" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['css.png']} alt="CSS" title="CSS" height="100px" />
                </Grid>
                <Grid item xs={12}>
                  <img src={logo['whiteboard.png']} alt="Microsoft Whiteboard" title="Microsoft Whiteboard" height="100px" />
                </Grid>
              </Grid>
            </Grid>
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
          </Grid>
        </Hidden>
        <Box maxWidth="50%">
          <Divider/>
        </Box>
      </Container>
    </>
  )
}

export default About;