import {Box, Button, styled, Typography} from "@mui/material";
import {Colors} from "../theme";
import {lighten} from "polished";


export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: ' 0 0',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}))
export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px'
}))

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}))
export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    letterSpacing: 1.25,
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5rem',
    }
}))

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px'
    }
}))

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'color',
    name: "MyShopButton",
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary
    ]
})(({theme}) => ({
    color:Colors.white,
    background: Colors.primary,
    "&:hover": {
        background: lighten(0.05, Colors.primary)
    },
    padding: "20px 0",
    fontWeight: 'bold',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
        padding: '10px 0',
        fontSize: '14px'
    }
}))




