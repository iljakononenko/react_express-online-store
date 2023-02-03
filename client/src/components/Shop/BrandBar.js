import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Container} from "react-bootstrap";

const BrandBar = ({brands, selectedBrand, setSelectedBrand}) => {

    return (
        <Container className="d-flex flex-wrap">
            {brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => setSelectedBrand(brand)}
                    border={brand.id === selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Container>
    );
};

export default BrandBar;
