import React from 'react';
import {
    AppbarContainer,
    AppbarHeader,
    MyList
} from "../../styles/appbar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Search} from "@mui/icons-material";
import Actions from "./actions";


const AppbarDesktop = ({matches}) => {

    return (
        <AppbarContainer>
            <AppbarHeader>My bags</AppbarHeader>

            <MyList type={'row'}>
                <ListItemText primary={'Home'}/>
                <ListItemText primary={'Categories'}/>
                <ListItemText primary={'products'}/>
                <ListItemText primary={'Contact Us'}/>
                <ListItemButton>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>

            <Actions matches={matches}/>
        </AppbarContainer>
    );
};

export default AppbarDesktop;
