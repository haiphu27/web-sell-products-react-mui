import React from 'react';
import {AppbarContainer, AppbarHeader} from "../../styles/appbar";
import {IconButton } from "@mui/material";
import {
    Search,
    Menu
} from "@mui/icons-material";
import Actions from "./actions";



const AppbarMobile = ({matches}) => {
    return (
        <AppbarContainer>
            <IconButton>
                <Menu/>
            </IconButton>
            <AppbarHeader textAlign={'center'} variant={'h4'}> My Bags </AppbarHeader>
            <IconButton>
                <Search/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    );
};

export default AppbarMobile;
