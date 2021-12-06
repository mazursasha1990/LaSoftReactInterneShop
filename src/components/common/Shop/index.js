import React, { useEffect } from 'react';

import { Container, Typography, Grid, CardMedia, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import ProductsData from "../../../assets/productsData/products";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './index.scss';

import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../../../redux/actions';
// import { loadCurrentItem } from '../../../redux/actions';

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



const Shop = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://run.mocky.io/v3/69fb5fe6-912c-4ad0-838e-5cde3ec71739")
            .catch((err) => {
                console.log("Err", err)
            })
        console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const classes = useStyles();


    console.log("Products :", products);

    return (
        <main className="mainShop">
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sn={6} md={4}>

                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={product.url}
                                    title={product.id}
                                    price={product.price}
                                />
                                <CardContent className={classes.cardContent}>

                                    <Typography>
                                        Product description.
                                    </Typography>
                                    <Typography>
                                        <span className={classes.title}>Price:{product.price}$</span>
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="medium" color="secondary">
                                        Buy it
                                    </Button>

                                    <Link to={`/product/${product.id}`}>
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
// /*
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {
//         loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
//     };
// };
// */


// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         products: state.setProducts.products,
//     };
// };

export default Shop;
    // export default connect(/*{mapDispatchToProps},*/ mapStateToProps)(Shop);
