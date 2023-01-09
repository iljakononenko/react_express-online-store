import React, {useContext} from 'react';
import {Context} from "../index";
import ItemCard from "./ItemCard";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const ItemList = observer(() => {

    const {item} = useContext(Context)

    return (
        <Container className="d-flex flex-wrap mt-3">
            {item.items.map(item =>
                <ItemCard key={item.id} item={item} />
            )}
        </Container>
    );
});

export default ItemList;
