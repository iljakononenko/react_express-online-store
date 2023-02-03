import React, {useContext} from 'react';
import {Context} from "../../index";
import ItemCard from "./ItemCard";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const ItemList = ({items}) => {

    let isDev = false;

    if (items.length == 0) {
        items =  [ {id: 1, name: "Item 1", rating: 5}, {id: 2, name: "Item 2", rating: 5} ]
        isDev = true;
    }

    return (
        <Container className="d-flex flex-wrap mt-3">
            {items.map(item =>
                <ItemCard key={item.id} item={item} isDev={isDev} />
            )}
        </Container>
    );
};

export default ItemList;
