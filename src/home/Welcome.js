import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  CardMedia
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0, 4),
  },
  child: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4, 0, 4),
  },
  text: {
    padding: theme.spacing(4, 0, 4),
  },
  textTop: {
    paddingTop: theme.spacing(0),
  },
  textpb: {
    paddingBottom: theme.spacing(4),
  },
  media: {
    padding: theme.spacing(0, 0, 0),
  },
}))

const Home = () => {

  const classes = styles();

  return (
    <div
      className={classes.root}
      style={{ width: '100%' }} >

<CardMedia
    className={classes.media}
    image=""
    component="img"
/>
     

      <div id='welcome' className={classes.child}>
        <Typography variant='h4' className={classes.textTop}>
          Titulo
        </Typography>
        <Typography variant='h4' color='secondary'>
          <Box fontStyle='italic' className={classes.text}>
            Subtitulo
          </Box>
        </Typography>
        <Typography variant='h6' className={classes.textpb}>
          <Box>
            Texto
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
    </div>
  );
}

export default Home;
