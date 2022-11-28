import React from 'react';
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper, ProductAddToCart,
    ProductFavoriteButton,
    ProductImage
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import theme from "../../styles/theme";
import {Favorite, FitScreen, Share} from "@mui/icons-material";
import {Stack} from "@mui/material";

const SingleProduct = ({product, matches}) => {
    return (
            <Product theme={theme}>
                <ProductImage src={product.image}/>

                <ProductFavoriteButton isFav={0}>
                    <Favorite/>
                </ProductFavoriteButton>


                <ProductMeta product={product} matches={matches}/>
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavoriteButton isFav={0}>
                            <Favorite/>
                        </ProductFavoriteButton>
                        <ProductActionButton>
                            <Share color="primary"/>
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreen color="primary"/>
                        </ProductActionButton>

                    </Stack>
                </ProductActionsWrapper>

                <ProductAddToCart>
                    Add to cart
                </ProductAddToCart>
            </Product>
    );
};

export default SingleProduct;
