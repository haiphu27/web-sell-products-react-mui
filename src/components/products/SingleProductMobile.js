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
import useDialogModal from "../../hook/useDialogModal";
import ProductDetail from "../productdetail"

const SingleProductMobile = ({product, matches}) => {
    const [ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailDialog]
    =useDialogModal(ProductDetail)


    return (
        <>
            <Product theme={theme} >
                <ProductImage src={product.image}/>
                <ProductMeta product={product} matches={matches}/>

                <ProductActionsWrapper >
                        <Stack direction="row">
                            <ProductFavButton isfav={0} >
                                <Favorite/>
                            </ProductFavButton>

                            <ProductActionButton>
                                <Share color="primary"/>
                            </ProductActionButton>
                            <ProductActionButton onClick={()=>showProductDetailDialog()}>
                                <FitScreen color="primary"/>
                            </ProductActionButton>
                        </Stack>
                </ProductActionsWrapper>
            </Product>

            <ProductAddToCart variant={'contained'}>
                Add to cart
            </ProductAddToCart>

            <ProductDetailDialog product={product} />
        </>
    );
};

export default SingleProductMobile;
