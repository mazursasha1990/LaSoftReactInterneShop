import React from 'react';

import './index.css';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImagesData from "../../../imagesData/images";

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: '25px',

    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    imageList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',

    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <main className="mainHome">
            <div className="main-banner">
                <Paper className={classes.mainFeaturesPost}
                    style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
                    <Container fixed>
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        The Best Internet Shop
                                    </Typography>
                                    <Typography
                                        component="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </Typography>

                                    <Button href="/shop" variant="contained" color="secondary">
                                        To the shop
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </div>
            <div className={classes.root}>
                <ImageList className={classes.imageList} cols={2.5}>
                    {ImagesData.map((item) => (
                        <ImageListItem key={item.url}>
                            <img src={item.url} alt={item.id} />
                            <ImageListItemBar
                                title={item.id}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${item.price}`}>
                                        <p className={classes.title}>{item.price}$</p>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </main >
    )
}

export default Home;