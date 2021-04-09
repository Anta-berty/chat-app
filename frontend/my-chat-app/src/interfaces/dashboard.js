import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©  Chat Application Projet continued '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

 
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">

      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              Welcome to my app chat
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
             This App is built with MERN (MongoDB, Express, ReactJS, NodeJS), using for chating.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to='/login'>
                    <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
                </Grid>
                <Grid item>
                <Link to='/login'>
                  <Button variant="outlined" color="primary">
                    Create a new account
                  </Button>
                  </Link> 
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}