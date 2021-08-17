import React from 'react';

import { Container, Typography, Grid, CardMedia, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import ProductsData from "../../../assets/productsData/products";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './index.scss';

import { connect } from "react-redux";
import { loadCurrentItem } from '../../../redux/actions';

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



const Shop = ({ products, loadCurrentItem }) => {

    console.log(loadCurrentItem);
    const classes = useStyles();

    return (
        <main className="mainShop">
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {products.map((card) => (
                        <Grid item key={card.id} xs={12} sn={6} md={4}>

                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.url}
                                    title={card.id}
                                    price={card.price}
                                />
                                <CardContent className={classes.cardContent}>

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

                                    <Link to={`/product/${card.id}`}>
                                        <Button
                                            size="medium" color="secondary">
                                            See more
                                        </Button>
                                    </Link>

                                </CardActions>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
/*
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};
*/


const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.LOAD_CURRENT_ITEM.products,
    };
};


export default connect(/*{mapDispatchToProps},*/ mapStateToProps)(Shop);