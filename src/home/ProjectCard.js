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
import { styled } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';


const styles = makeStyles(theme => ({
    button: {
        color: theme.palette.action.active,
    },
    media: {
        height: 300,
    },
    link: {
        textDecoration: 'none',
    },
    card: {
        paddingButton: theme.spacing(4),
    }
}))

const ProjectCard = (props) => {

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: '#eeeeee',
        padding: theme.spacing(1),
    }));

    const classes = styles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.project.imageUrl}
                title="Image" />
            <Div> {props.project.tech} </Div>
            <CardActions style={{ justifyContent: 'center' }}>
                <a href={props.project.repository}
                    className={classes.link}>
                    <Button
                        className={classes.button}
                        size='small'
                        startIcon={<CodeIcon />} >
                        Código
                    </Button>
                </a>
                <a href={props.project.url}
                    className={classes.link}>
                    <Button
                        className={classes.button}
                        size='small'
                        startIcon={<OpenInNewIcon />} >
                        Demo
                    </Button>
                </a>
            </CardActions>
            <Button
                size='small'
                startIcon={<ArticleIcon />} >
                Detalles
            </Button>
        </Card>
    );
}

export default ProjectCard;