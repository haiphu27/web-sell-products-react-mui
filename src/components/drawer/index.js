import React from 'react';
import {Divider, Drawer, List, ListItemButton, ListItemText} from "@mui/material";
import {useUIContext} from "../../context/ui";
import {DrawerCLoseButton} from "../../styles/appbar";
import {Close} from "@mui/icons-material";
import {lighten} from "polished";
import {Colors} from "../../styles/theme";

const AppDrawer = () => {
   const {drawerOpen,setDrawerOpen}=useUIContext()

    return (
        <>
            {
                drawerOpen && (
                    <DrawerCLoseButton onClick={()=>setDrawerOpen(false)}>
                        <Close
                            sx={{
                                fontSize:'2.5rem',
                                color:lighten(0.09,Colors.secondary)
                            }}
                        />
                    </DrawerCLoseButton>
                )
            }
            <Drawer open={drawerOpen}>

                <List>
                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center'}}>
                            Home
                        </ListItemText>
                    </ListItemButton>
                    <Divider variant={'middle'}/>

                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center'}}>
                            Categories
                        </ListItemText>
                    </ListItemButton>
                    <Divider variant={'middle'}/>

                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center'}}>
                            Products
                        </ListItemText>
                    </ListItemButton>
                    <Divider variant={'middle'}/>

                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center'}}>
                            About Us
                        </ListItemText>
                    </ListItemButton>
                    <Divider variant={'middle'}/>

                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center'}}>
                            Contact Us
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
};

export default AppDrawer;
