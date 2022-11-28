import {Box, Button, IconButton, styled} from "@mui/material";
import theme, {Colors} from "../theme";
import {slideInBottom, slideInRight} from "../../animation";

export const Product = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        position: 'relative',
    }
}))

export const ProductImage = styled('img')(({src, theme}) => ({
    url: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px',
    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4
}))

export const ProductFavoriteButton = styled(ProductActionButton,{
    shouldForwardProp:prop=> prop!=='isFav'
})(({isFav, theme}) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.down('md')]: {
        position: "absolute",
        right: 0,
        top: 0
    },

}))

export const ProductAddToCart = styled(Button)(({show, theme}) => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    },
    background: Colors.secondary,
    opacity: 0.9
}))

export const ProductMeteWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}))

export const ProductActionsWrapper = styled(Box)(({show, theme}) => ({
    [theme.breakpoints.down('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)`
    }
}))


























