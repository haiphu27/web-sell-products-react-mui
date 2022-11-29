import React from 'react';
import {Grid, Box, Typography, ListItem, ListItemText, List, Stack, TextField, Button} from "@mui/material";
import {FooterTitle, SubscribeTf} from "../../styles/footer";
import {Colors} from "../../styles/theme";
import {Facebook, Instagram, Send, Twitter} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: {xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: {xs: "12px", md: "14px"}
            }}
        >
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item md={6} lg={4} xs={12}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant="caption2">
                        Tra i tanti ex allievi di prestigio figurano alti gradi delle forze armate, tra cui un capo
                        dell'European Union Military Committee, due capi di stato maggiore generale, quattro
                        dell'Esercito, due della Marina, uno
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray
                        }}
                    >
                        <Facebook sx={{mr: 1}}/>
                        <Twitter sx={{mr: 1}}/>
                        <Instagram/>
                    </Box>
                </Grid>

                <Grid item md={6} lg={2} xs={4}>
                    <FooterTitle variant={"body1"}>Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                About Us
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                Order Tracking
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                Privary &amp; Policy
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>

                    </List>
                </Grid>

                <Grid item md={6} lg={2} xs={4}>
                    <FooterTitle variant={"body1"}>My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                Login
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                My Cart
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                My Account
                            </Typography>
                        </ListItemText>

                        <ListItemText>
                            <Typography variant="caption2" lineHeight={2}>
                                Wishlist
                            </Typography>
                        </ListItemText>

                    </List>
                </Grid>

                <Grid item md={6} lg={4} xs={4}>
                    <FooterTitle variant={"body1"}>newsletter</FooterTitle>
                    <Stack sx={{color:Colors.white}}>

                        <SubscribeTf label="Enter email" variant="standard"/>
                        <Button
                            startIcon={<Send sx={{color: Colors.white}}/>}
                            sx={{mt: 4, mb: 4}}
                            variant='contained'
                        >
                            Subscribe
                        </Button>

                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
