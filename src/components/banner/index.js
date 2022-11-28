import React from 'react';
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import {BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle} from "../../styles/banner";

const Banner = () => {
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    return (
            <BannerContainer>
                <BannerImage src='/images/banner/banner.png'/>

                <BannerContent>
                    <Typography variant="h6">Huge Collection </Typography>
                    <BannerTitle vatiant={'h2'}> New Bags</BannerTitle>
                    <BannerDescription>
                        The electric eels are a genus, Electrophorus, of tropical freshwater fish from South America in the family Gymnotidae. They are electric fish, and can stun their prey by delivering shocks at up to 860 volts
                    </BannerDescription>
                </BannerContent>

            </BannerContainer>
    );
};

export default Banner;
