import React from 'react';
import {AppbarContainer, AppbarHeader} from "../../styles/appbar";
import {IconButton } from "@mui/material";
import {
    Search,
    Menu
} from "@mui/icons-material";
import Actions from "./actions";
import {useUIContext} from "../../context/ui";


const AppbarMobile = ({matches}) => {
    const {setDrawerOpen,setShowSearchBox}=useUIContext()
    return (
        <AppbarContainer>
            <IconButton onClick={()=>setDrawerOpen(true)} >
                <Menu/>
            </IconButton>
            <AppbarHeader textAlign={'center'} variant={'h4'}> My Bags </AppbarHeader>
            <IconButton  onClick={()=>setShowSearchBox(true)} >
                <Search/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    );
};

export default AppbarMobile;
