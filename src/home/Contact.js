import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(2)
    }
}))

const Contact = () => {

    const classes = styles();

    return (
        <div id='contact' className={classes.root} style={{ minHeight: '80vh', width: '100%' }}>
            <Typography variant="h2">
                Contacto
            </Typography>

        </div>
    );
}

export default Contact;