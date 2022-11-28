import React from 'react';
import {ProductMeteWrapper} from "../../styles/products";
import {Typography} from "@mui/material";

const ProductMeta = ({product,matches}) => {
    return (
        <ProductMeteWrapper>
            <Typography variant={matches ? "h6":"h5"} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches?"caption":"body1"}>
                ${product.price}
            </Typography>

        </ProductMeteWrapper>
    );
};

export default ProductMeta;
