import React from 'react';
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper, ProductAddToCart,
    ProductFavButton,
    ProductImage
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import theme from "../../styles/theme";
import {Favorite, FitScreen, Share} from "@mui/icons-material";
import {Stack, Typography} from "@mui/material";

const SingleProductMobile = ({product, matches}) => {

    return (
            <Product theme={theme} >
                <ProductImage src={product.image}/>
                <ProductMeta product={product} matches={matches}/>

                <ProductActionsWrapper >
                        <Stack direction="row">
                            <ProductFavButton isFav={0} >
                                <Favorite/>
                            </ProductFavButton>

                            <ProductActionButton>
                                <Share color="primary"/>
                            </ProductActionButton>
                            <ProductActionButton>
                                <FitScreen color="primary"/>
                            </ProductActionButton>
                        </Stack>
                </ProductActionsWrapper>
                <ProductAddToCart variant={'contained'}>
                    Add to cart
                </ProductAddToCart>
            </Product>
    );
};

export default SingleProductMobile;
