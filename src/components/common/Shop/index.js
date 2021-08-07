import React from 'react';

import { Container, Typography, Grid, CardMedia, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import ProductsData from "../../../assets/productsData/products";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './index.scss';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))



export const PostsList = () => {
    const posts = useSelector((state) => {
        console.log(state)
        return state.posts
    });
    const classes = useStyles();

    const renderedPosts = posts.map((post) => {


        return (
            <main className="mainShop">
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>

                        <Grid item key={post} xs={12} sn={6} md={4}>
                            <Link to={`/product/${post.id}`}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={post.url}
                                        title={post.id}
                                        price={post.price}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            <p>{post.id}</p>
                                        </Typography>
                                        <Typography>
                                            Product description.
                                        </Typography>
                                        <Typography>
                                            <p className={classes.title}>Price:{post.price}$</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                        <Button size="medium" color="secondary">
                                            Buy it
                                        </Button>

                                    </CardActions>
                                </Card>
                            </Link>
                        </Grid>

                    </Grid>
                </Container>


            </main>
        )
    }
    )
}