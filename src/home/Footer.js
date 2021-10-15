import React from 'react';
import {
    Typography,
    Box,
    Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const styles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: '0px -2px 4px 1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)'
    }
}))

const Footer = () => {

    const classes = styles();

    return (
        <div className={classes.root}>
            <Box textAlign='center' pt={2} pb={2}>
                <Typography variant='caption'>
                    Creado por 
                </Typography>
            </Box>
        </div>
    );
}

export default Footer;