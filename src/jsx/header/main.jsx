import React from 'react';

import { Container, Grid, Toolbar, AppBar, Button } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
// import { PhotoCamera } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position={"fixed"} elevation={0} color="transparent" style={{ backgroundColor: blueGrey[50], width: "100%" }}>
      <Container style={{ padding: 0 }}>
        <Toolbar>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs="auto">
              <Button variant="text">About</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text">Case Studies</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text">Other Works</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text">Contact</Button>
            </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;