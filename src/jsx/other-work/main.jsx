import React from 'react';

import {Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { pink, blueGrey } from '@material-ui/core/colors';

import { importFile, openUrl } from '../../js/script';

const corpActImg = importFile(require.context('../../img/other-work/corporate-action', false, /\.(png|jpe?g|svg)$/));
const ptapImg = importFile(require.context('../../img/other-work/ptap', false, /\.(png|jpe?g|svg)$/));
const eventManagerImg = importFile(require.context('../../img/other-work/event-manager', false, /\.(png|jpe?g|svg)$/));
const investorAccountImg = importFile(require.context('../../img/other-work/investor-account', false, /\.(png|jpe?g|svg)$/));

const OtherWork = () => {
  return (
    <>
      <Box style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Typography variant="h2" style={{ textTransform: "uppercase", textAlign: "center" }}>Other Works</Typography>
      </Box>
      <Container>
        <Grid container spacing={10} direction="column" style={{ paddingBottom: "4rem"}}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Arcesium</Typography>
                </Box>
                <Typography variant="h4">Corporate Actions Dashboard</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, hic illo beatae quos fugiat, odio id nesciunt harum perferendis officiis culpa commodi iste soluta voluptas optio, tenetur esse exercitationem aperiam.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={corpActImg['dashboard-voluntary.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={corpActImg['dashboard-mandatory.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Arcesium</Typography>
                </Box>
                <Typography variant="h4">Investor Management Portal</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, hic illo beatae quos fugiat, odio id nesciunt harum perferendis officiis culpa commodi iste soluta voluptas optio, tenetur esse exercitationem aperiam.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={investorAccountImg['search-result.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={investorAccountImg['create-dialog.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={investorAccountImg['create-wizard.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={investorAccountImg['detail.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={investorAccountImg['detail-difference.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Arcesium</Typography>
                </Box>
                <Typography variant="h4">Personal Trade Approval Portal</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, hic illo beatae quos fugiat, odio id nesciunt harum perferendis officiis culpa commodi iste soluta voluptas optio, tenetur esse exercitationem aperiam.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={ptapImg['zero-state.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={ptapImg['sample-form.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Arcesium</Typography>
                </Box>
                <Typography variant="h4">Event Manager</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, hic illo beatae quos fugiat, odio id nesciunt harum perferendis officiis culpa commodi iste soluta voluptas optio, tenetur esse exercitationem aperiam.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['zero-state.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-1.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-2.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-3.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: PubMatic</Typography>
                </Box>
                <Typography variant="h4">Reporting &amp; Analytics Revamp</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Complete revamp of our data solutions, to enable the users to get easy and powerful insights into their business and take quick decisions in order to maximize the potential of their digital assets. Focus was on not just the descriptive reporting, but also on predictive as well as prescriptive reporting, to facilitate quick decision making.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['zero-state.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-1.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-2.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-3.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Tutrr</Typography>
                </Box>
                <Typography variant="h4">Online Maths Platform</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Created skeuomorphic designs for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various math topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['zero-state.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-1.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-2.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-3.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <Box style={{ paddingBottom: ".5em" }}>
                  <Typography variant="overline" style={{ borderBottom: `2px solid ${pink[200]}`, paddingBottom: ".5em", color: pink[300]}}>Client: Mettl</Typography>
                </Box>
                <Typography variant="h4">Marketing Video</Typography>
                <Typography variant="body1" style={{ marginTop: ".5em" }}>Created an marketing video for Mettl to highlight their key offerings. As a part of this project, I created story boards, character illustrations and finally created the animation using Adobe Flash.</Typography>
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['zero-state.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-1.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <img src={eventManagerImg['create-2.png']} alt="" title="" width="100%" style={{ border: `1px solid ${blueGrey[200]}` }} />
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="primary" wrapText onClick={() => {openUrl('https://www.youtube.com/watch?v=SGg19b0nAMA', '_blank')}}>Watch on YouTube</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default OtherWork;