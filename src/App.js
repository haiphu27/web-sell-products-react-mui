import {useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import AppBar from "./components/apppbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import SearchBox from "./components/searchBox";

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
        <main>
            <Banner />
            <Promotions/>
            <Box display='flex' justifyContent='center' sx={{pt:4,pb:4}}>
                <Typography variant='h4' >Our Products</Typography>
            </Box>
            <Products/>
            <Footer/>
            <AppDrawer/>
            <SearchBox/>
        </main>

    </Container>
  );
}

export default App;
