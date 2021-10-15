import React from 'react';
import {
    Typography,
    Box,
    Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProjectCard from './ProjectCard';


const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(0),
    },
    toolbar: {
        margin: theme.spacing(4, 0, 4),
    }
}))

const Projects = () => {

    const classes = styles();

    const projects = [
        ]

    return (
        <Box
            id="projects"
            className={classes.root} >
            <div className={classes.toolbar} />
            <Typography variant="h2">
                <Box mb={4} textAlign='center'>
                    Proyectos
                </Box>
            </Typography>

            <Grid
                container
                justify='center'
                alignItems='center'
                spacing={5} >
                {
                    projects.map((value) => (
                        <Grid key={value} item xs={12} sm={4}>
                            <Box textAlign='center'>
                                <ProjectCard project={value} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.toolbar} />
        </Box>
    );
}

export default Projects;