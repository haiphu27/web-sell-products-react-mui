import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

const AppBar = () => {
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down('md'))

    return (
        <div>
            {matches ? <AppbarMobile matches={matches}/>:<AppbarDesktop matches={matches}/>}

        </div>
    );
};

export default AppBar;
