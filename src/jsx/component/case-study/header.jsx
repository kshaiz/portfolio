import { React } from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Container, Grid, Toolbar, AppBar, Button, makeStyles } from '@material-ui/core';

import { importFile, downloadFile } from '../../../js/script';
import Breakpoint from '../../breakpoint';

const resume = importFile(require.context('../../../pdf', false, /\.(pdf)$/));

const useStyles = makeStyles({
  portAppBar: {
    width: "100%",
    backgroundColor: '#fafafa',

    [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
      paddingTop: '.35rem',
      paddingBottom: '.75rem',
    },
  },
  portContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  portToolbar: {
    marginLeft: '-6px',

    [`@media screen and (max-width: ${Breakpoint.values.sm}px)`]: {
      marginLeft: '0',
    },
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position={"fixed"} elevation={0} color="transparent" className={classes.portAppBar}>
      <Container className={classes.portContainer}>
        <Toolbar className={classes.portToolbar}>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs="auto">
              <Button variant="text" to='/portfolio#about' component={RouterLink}>About</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text" to='/portfolio#case-study' component={RouterLink}>Case Studies</Button>
            </Grid>
            <Grid item xs="auto">
              <Button variant="text" to='/portfolio#other-work' component={RouterLink}>Other Works</Button>
            </Grid>
            <Grid item xs={0} md />
            <Grid item xs={12} md="auto" align="center">
              <Button variant="outlined" color="primary" onClick={() => {downloadFile( resume, "shaiz-kunhimohammed-resume", "pdf")}}>Download Resume</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;