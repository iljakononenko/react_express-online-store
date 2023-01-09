import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchItems, fetchTypes} from "../http/itemApi";
import Pages from "../components/Pages";

const Shop = observer(() => {

    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems(null, null, 1, 3).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, item.limit).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType, item.selectedBrand])

    return (
        <Container>
            <div className="d-flex mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col className="ms-3" md={9}>
                    <BrandBar />
                    <ItemList />
                    <Pages />
                </Col>
            </div>
        </Container>
    );
});

export default Shop;
