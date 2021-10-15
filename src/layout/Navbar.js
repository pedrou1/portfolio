import React from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Scrollchor } from 'react-scrollchor';

import {
    AppBar,
    Toolbar,
    Typography,
    Checkbox,
    Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';


const styles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none'
    }
}))

const Navbar = ({ isChecked, isChanged }) => {

    const classes = styles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Portafolio
                    </Typography>
                    <Scrollchor to="#welcome" className={classes.link}>
                        <Button style={{ color: '#FFFFFF' }}>Acerca</Button>
                    </Scrollchor>

                    <Scrollchor to="#projects" className={classes.link}>
                        <Button style={{ color: '#FFFFFF' }}>Proyectos</Button>
                    </Scrollchor>

                    <Scrollchor to="#contact" className={classes.link}>
                        <Button style={{ color: '#FFFFFF' }}>Contacto</Button>
                    </Scrollchor>

                    <Checkbox
                        checked={isChecked}
                        onChange={isChanged}
                        icon={<Brightness4Icon color="secondary" />}
                        checkedIcon={<Brightness7Icon color="secondary" />}
                        name="checkedDark"
                    />
                </Toolbar>
            </AppBar>

        </>);
}

export default Navbar;