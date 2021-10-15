import React from 'react';
import {
    Card,
    CardMedia,
    CardActions,
    Button
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { makeStyles } from '@mui/styles';


const styles = makeStyles(theme => ({
    button: {
        color: theme.palette.action.active
    },
    media: {
        height: 300
    }
}))

const ProjectCard = () => {

    const classes = styles()

    return (
        <Card>
            <CardMedia
                className={classes.media}
                image="https://picsum.photos/800/600"
                title="Image" />
            <CardActions style={{ justifyContent: 'center' }}>
                <Button
                    className={classes.button}
                    size='small'
                    startIcon={<CodeIcon />} >
                    Código
                </Button>
                <Button
                    className={classes.button}
                    size='small'
                    startIcon={<OpenInNewIcon />} >
                    Demo
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;