import React, {useContext} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../Shop/TypeBar";
import BrandBar from "../Shop/BrandBar";
import ItemList from "../Shop/ItemList";
import Pages from "../Shop/Pages";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const ProductsBlock = observer(({props}) => {

    const {item} = useContext(Context)

    const pageCount = Math.ceil(item.totalCount / item.limit)
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const selectType = (type) => { item.setSelectedType(type) }

    const selectBrand = (brand) => { item.setSelectedBrand(brand) }

    const selectPage = (page) => { item.setPage(page) }

    return (
        <Container>
            <div className="d-flex mt-4">
                <Col md={3}>
                    <TypeBar types={item.types} selectedType={item.selectedType} setSelectedType={selectType} />
                </Col>
                <Col className="ms-3" md={9}>
                    <BrandBar brands={item.brands} selectedBrand={item.selectedBrand} setSelectedBrand={selectBrand} />
                    <ItemList items={item.items} />
                    <Pages pages={pages} currentPage={item.page} setPage={selectPage}/>
                </Col>
            </div>
        </Container>
    );
});

export default ProductsBlock;
