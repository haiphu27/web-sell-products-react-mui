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
import {Stack} from "@mui/material";
import {useState} from "react";

const SingleProductDesktop= ({product, matches}) => {
    const [showOptions,setShowOptions] = useState(false);

    const handleMouseEnter=() => {
        setShowOptions(true)
    }
    const handleMouseLeave=() => {
        setShowOptions(false)
    }

    return (
        <>
            <Product theme={theme} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image}/>

                <ProductFavButton isFav={0}>
                    <Favorite/>
                </ProductFavButton>

                {showOptions &&
                    <ProductAddToCart show={showOptions} variant={'contained'}>
                        Add to cart
                    </ProductAddToCart> }


                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductFavButton isFav={0}>
                            <Favorite/>
                        </ProductFavButton>

                        <ProductFavButton>
                            <Share color="primary"/>
                        </ProductFavButton>

                        <ProductFavButton>
                            <FitScreen color="primary"/>
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>

            </Product>

            <ProductMeta product={product} matches={matches}/>
        </>
    );
};

export default SingleProductDesktop;
