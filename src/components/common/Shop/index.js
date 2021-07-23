import React from 'react';

import { Container, Typography, Grid, CardMedia, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ImagesData from "../../../assets/imagesData/images";
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Shop() {

    const classes = useStyles();

    return (
        <main className="mainShop">
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {ImagesData.map((card) => (
                        <Grid item key={card} xs={12} sn={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.url}
                                    title={card.id}
                                    price={card.price}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        <p>{card.id}</p>
                                    </Typography>
                                    <Typography>
                                        Product description.
                                    </Typography>
                                    <Typography>
                                        <p className={classes.title}>Price:{card.price}$</p>
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="medium" color="secondary">
                                        Buy it
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

export default Shop;