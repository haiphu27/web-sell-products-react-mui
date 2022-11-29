import React from 'react';
import {Dialog, DialogContent, DialogTitle, IconButton, Slide, useMediaQuery, useTheme} from "@mui/material";
import {Box, display, styled} from "@mui/system";
import {Close} from "@mui/icons-material";
import {Colors} from "../../styles/theme";
import useDialogModal from "../../hook/useDialogModal";
import {Product, ProductImage} from "../../styles/products";

const SlideTransition = ({props}) => {
    return <Slide direction={'down'} {...props} ></Slide>
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}))

const ProductInfoTitle = styled()

const ProductDetail = ({open, onClose, product}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Dialog
            transitionComponent={SlideTransition}
            variant="permanat"
            open={open}
            fullScreen
        >
            <DialogTitle
                sx={{
                    background: Colors.secondary
                }}
            >
                <Box
                    display={'flex'}
                    alignItems={"center"}
                    justifyContent={'center'}
                >
                    Product Title
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{mr:4}}>
                        <ProductImage src={product.image}/>
                    </Product>

                </ProductDetailWrapper>

            </DialogContent>
        </Dialog>
    );
};

export default ProductDetail;
