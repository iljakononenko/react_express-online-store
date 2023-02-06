import NavBar from "../components/NavBars/NavBar";
import CarouselBlock from "../components/page_blocks/Carousel_block";
import ProductsBlock from "../components/page_blocks/Products_block";
import AuthBlock from "../components/page_blocks/Auth_block";
import Hero from "../components/page_blocks/Heroes/Hero";
import {FaBars, FaList, FaRegAddressCard, FaRegFileCode, FaTv} from "react-icons/fa";
import React from "react";
import {VscVersions} from "react-icons/vsc";
import Registration_block from "../components/page_blocks/Registration_block";
import ItemPage_block from "../components/page_blocks/ItemPage_block";

export const basicBlocks = [
    {block_id: 0, block_name: "Navbar", icon: <FaBars size={36} />},
    {block_id: 1, block_name: "Carousel", icon: <FaTv size={36} />},
    {block_id: 2, block_name: "Products list", icon: <FaList size={36} />},
    {block_id: 3, block_name: "Login", icon: <FaRegAddressCard size={36} />},
    {block_id: 4, block_name: "Registration", icon: <FaRegAddressCard size={36} />},
    {block_id: 5, block_name: "Item info", icon: <FaRegAddressCard size={36} />},
    {block_id: 6, block_name: "Hero", icon: <VscVersions size={36} />},
]

export const getBasicBlock = (component_id, key, props) => {
    switch (component_id){
        case 0:
            return <NavBar key={key} props={props} />
        case 1:
            return <CarouselBlock key={key} props={props} />
        case 2:
            return <ProductsBlock key={key} props={props} />
        case 3:
            return <AuthBlock key={key} props={props} />
        case 4:
            return <Registration_block key={key} props={props} />
        case 5:
            return <ItemPage_block key={key} props={props} />
        case 6:
            return <Hero key={key} props={props}></Hero>

    }
}
