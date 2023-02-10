import React, {useContext} from 'react';
import {Context} from "../../index";
import ItemCard from "./ItemCard";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const ItemList = ({items}) => {

    let isDev = false;

    // console.log(items)

    if (items.length == 0) {
        items =  []
        isDev = true;
    }

    return (
        <Container className="d-flex flex-wrap mt-3">
            { items.length === 0 ?
                <h1>Sorry there are no products yet...<br/>Come again later!</h1>
                :
                items.map(item =>
                <ItemCard key={item.id} item={item} isDev={isDev} />
            )}
        </Container>
    );
};

export default ItemList;
