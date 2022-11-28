import {useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import AppBar from "./components/apppbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";

function App() {

    useEffect(()=>{
        document.title ="React-responsive"
    },[])

  return (
    <Container
        sx={{
            maxWidth:'xl',
            background:"#fff"
        }}
    >
        <AppBar/>
        <Banner />
        <Promotions/>
        <Box display='flex' justifyContent='center' sx={{pt:4,pb:4}}>
           <Typography variant='h4' >Our Products</Typography>
        </Box>
        <Products/>
    </Container>
  );
}

export default App;
