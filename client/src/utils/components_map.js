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
import Features from "../components/page_blocks/Features/Features";
import Jumbotron from "../components/page_blocks/Jumbotron/Jumbotron";
import Pricing from "../components/page_blocks/Pricing/Pricing";
import Product from "../components/page_blocks/Product/Product";
import FooterBlock from "../components/page_blocks/Footer_block";
import DivBlock from "../components/core_components/DivBlock";
import Text from "../components/core_components/Text";
import * as uuid from "uuid";
import {default_nodes} from "./default_nodes";
import Anchor from "../components/core_components/Anchor";
import Img from "../components/core_components/Img";
import Button from "../components/core_components/Button";
import ListBlock from "../components/core_components/ListBlock";
import ListElement from "../components/core_components/ListElement";

export const basicBlocks = [
    {block_id: 0, block_name: "Header", icon: <FaBars size={36} />},
    {block_id: 1, block_name: "Carousel", icon: <FaTv size={36} />},
    {block_id: 2, block_name: "Products list", icon: <FaList size={36} />},
    {block_id: 3, block_name: "Login", icon: <FaRegAddressCard size={36} />},
    {block_id: 4, block_name: "Registration", icon: <FaRegAddressCard size={36} />},
    {block_id: 5, block_name: "Item info", icon: <FaRegAddressCard size={36} />},
    {block_id: 6, block_name: "Hero", icon: <VscVersions size={36} />},
    {block_id: 7, block_name: "Features", icon: <VscVersions size={36} />},
    {block_id: 8, block_name: "Jumbotron", icon: <VscVersions size={36} />},
    {block_id: 9, block_name: "Pricing", icon: <VscVersions size={36} />},
    {block_id: 10, block_name: "Product", icon: <VscVersions size={36} />},
    {block_id: 11, block_name: "Footer", icon: <VscVersions size={36} />},
]

export const getBasicBlock = (component_id, key, props) => {
    switch (component_id) {
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
        case 7:
            return <Features key={key} props={props}></Features>
        case 8:
            return <Jumbotron key={key} props={props}></Jumbotron>
        case 9:
            return <Pricing key={key} props={props}></Pricing>
        case 10:
            return <Product key={key} props={props}></Product>
        case 11:
            return <FooterBlock key={key} props={props}></FooterBlock>

    }
}

export const renderCoreComponent = (key, component_id, props) => {
    switch (component_id){
        case 0:
            return <DivBlock key={key} className={props.className} children={props.children} />
        case 1:
            return <Text key={key} keyProp={key} text={props.text} className={props.className} type={props.type} />
        case 2:
            return <Anchor key={key} keyProp={key} text={props.text} className={props.className} type={props.type} url={props.url} />
        case 3:
            return <Img key={key} keyProp={key} className={props.className} src={props.src} alt={props.alt} type={props.type} />
        case 4:
            return <Button key={key} keyProp={key} className={props.className} text={props.text} type={props.type} />
        case 5:
            return <ListBlock key={key} className={props.className} children={props.children} />
        case 6:
            return <ListElement key={key} keyProp={key} text={props.text} className={props.className} type={props.type} />

    }
}

export const getDefaultNodesForBasicBlocks = (component_id) => {
    return default_nodes[component_id]
}
