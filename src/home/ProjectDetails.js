import {
    CardContent,
    Grid,
    Typography,
    CardMedia,
    Box,
    Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const ProjectDetails = (props) => {

    return ( 
        <Box mt={15}>
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={image}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
     );
}
 
export default ProjectDetails;