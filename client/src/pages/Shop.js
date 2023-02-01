import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import NavBar from "../components/NavBar";
import Carousel_block from "../components/page_blocks/Carousel_block";
import Products_block from "../components/page_blocks/Products_block";

const Shop = observer(() => {

    return (
        <>
            <NavBar />

            <Carousel_block />

            <Products_block />
        </>
    );
});

export default Shop;
