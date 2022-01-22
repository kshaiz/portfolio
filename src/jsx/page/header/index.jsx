import { React } from 'react';

import { Container, Grid, Toolbar, AppBar, Button } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import { importFile, downloadFile, jumpTo } from '../../../js/script';

const resume = importFile(require.context('../../../pdf', false, /\.(pdf)$/));

const Header = () => {
  return (
    <AppBar position={"fixed"} elevation={0} color="transparent" style={{ backgroundColor: blueGrey[50], width: "100%" }}>
      <Container style={{ padding: 0 }}>
        <Toolbar>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs="auto">
              <Button variant="text" onClick={() => {jumpTo('about')}}>About</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text" onClick={() => {jumpTo('case-study')}}>Case Studies</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text" onClick={() => {jumpTo('other-work')}}>Other Works</Button>
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs="auto">
              <Button variant="outlined" onClick={() => {downloadFile( resume, "shaiz-kunhimohammed-resume", "pdf")}}>Download Resume</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;