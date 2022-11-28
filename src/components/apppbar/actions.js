import React from 'react';
import {ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList} from "../../styles/appbar";
import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import {Favorite, Person, ShoppingCart} from "@mui/icons-material";
import {Colors} from "../../styles/theme";

const Actions = ({matches}) => {
    const ActionDesktopOrMobile = matches? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <ActionDesktopOrMobile>
            <MyList type={'row'}>
                <ListItemButton sx={{display: 'flex', justifyContent: 'center'}}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color:matches && Colors.secondary
                    }}>
                        <ShoppingCart/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation={'vertical'} flexItem/>

                <ListItemButton sx={{display: 'flex', justifyContent: 'center'}}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color:matches && Colors.secondary
                    }}>
                        <Favorite/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation={'vertical'} flexItem/>


                <ListItemButton sx={{display: 'flex', justifyContent: 'center'}}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color:matches && Colors.secondary
                    }}>
                        <Person/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation={'vertical'} flexItem/>
            </MyList>
        </ActionDesktopOrMobile>
    );
};

export default Actions;
