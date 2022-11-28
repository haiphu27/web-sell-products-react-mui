import {Box, styled} from "@mui/material";
import {Colors} from "../theme";


export const PromotionsContainer=styled(Box)(({theme})=>({

    [theme.breakpoints.down('md')]:{
      padding:"40px 0"
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:"20px 0",
    overflow: 'hidden',
    background:Colors.secondary
}))


export const MessageText=styled(Box)(({theme})=>({
    fontFamily: '"Montez","cursive"',
    color: Colors.white,
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize:'2.0rem'
    }
}))
