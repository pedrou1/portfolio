import React, { useState } from 'react';
import { Scrollchor } from 'react-scrollchor';
import {
    AppBar,
    Toolbar,
    Typography,
    Checkbox,
    Button,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    Grid
} from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const styles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      }
}))

const Navbar = ({ isChecked, isChanged }) => {

    const classes = styles();
    const [anchor, setAnchor] = useState(null); // expands or retracs the mobile bar
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sets media query
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    return (
        <div>
            <AppBar>
                <Toolbar>
                {
                        isMobile ? (
                            <>
                                <Drawer
                                    variant="temporary"
                                    anchor={theme.direction === 'lrt' ? 'left' : 'right'}
                                    open={open}
                                    ModalProps={{
                                        keepMounted: true,
                                    }}
                                >
                                    <IconButton onClick={() => setAnchor(null)} className={classes.menuButton}>
                                        <CloseIcon />
                                    </IconButton>
                                    <div>
                                        <List>
                                            <ListItem component="a" href="#welcome">
                                                <Button style={{ color: '#2196f3', width: 100 }}>Acerca</Button>
                                            </ListItem>
                                            <ListItem component="a" href="#welcome">
                                            <Button href="#projects" style={{ color: '#2196f3' }}>Proyectos</Button>
                                            </ListItem>
                                            <ListItem component="a" href="#contact">
                                            <Button style={{ color: '#2196f3' }}>Contacto</Button>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Drawer>

                                <Grid item xs />

                                <IconButton
                                    color="primary"
                                    className={classes.menuButton}
                                    edge="end"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon style={{ color: 'white' }} />
                                </IconButton>
                            </>

                        ) : (
                            <>
                                <Typography variant="h6" className={classes.title}>
                                    Portafolio
                                </Typography>
                                <Scrollchor to="#welcome" className={classes.link} animate={{ offset: -100, duration: 500 }}>
                                    <Button style={{ color: '#FFFFFF' }}>Acerca</Button>
                                </Scrollchor>

                                <Scrollchor to="#projects" className={classes.link} animate={{ duration: 500 }}>
                                    <Button style={{ color: '#FFFFFF' }}>Proyectos</Button>
                                </Scrollchor>

                                <Scrollchor to="#contact" className={classes.link} animate={{ duration: 500 }}>
                                    <Button style={{ color: '#FFFFFF', marginRight: '1em' }}>Contacto</Button>
                                </Scrollchor>

                                <Checkbox
                                    checked={isChecked}
                                    onChange={isChanged}
                                    icon={<Brightness4Icon color="secondary" />}
                                    checkedIcon={<Brightness7Icon color="secondary" />}
                                    name="checkedDark"
                                />

                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;