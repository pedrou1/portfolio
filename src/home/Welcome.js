import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(9),
  }
}))

const Home = () => {

  const classes = styles();

  return (
    <div
      id='welcome'
      className={classes.root}
      style={{ minHeight: `50vh`, width: '100%' }} >
      <Typography variant='h3'>
        Title
      </Typography>
      <Typography variant='h4' color='secondary'>
        <Box fontStyle='italic'>
          Subtitle
        </Box>
      </Typography>
      <Typography variant='h6'>
        <Box>
          Text
        </Box>
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center" >
        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<GitHubIcon color='secondary' />}>
              Github
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<MailIcon color='secondary' />}>
              Mail
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
            <Button className={classes.button} startIcon={<PhoneAndroidIcon color='secondary' />}>
              Telefono
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
