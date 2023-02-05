import React, {useState} from 'react';
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";
import {observer} from "mobx-react-lite";
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateType from "../../components/modals/CreateType";
import CreateItem from "../../components/modals/CreateItem";
import "./admin.css"

const Products = observer(() => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <>
            <NavBar_admin />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />

                <Container className="d-flex flex-column">
                    <Button variant={"outline-dark"} className="mt-3" onClick={() => setTypeVisible(true)}>Add type</Button>
                    <Button variant={"outline-dark"} className="mt-3" onClick={() => setBrandVisible(true)}>Add brand</Button>
                    <Button variant={"outline-dark"} className="mt-3" onClick={() => setItemVisible(true)}>Add item</Button>

                    <CreateBrand show={brandVisible} onHide={() => {setBrandVisible(false)}}/>
                    <CreateType show={typeVisible} onHide={() => {setTypeVisible(false)}} />
                    <CreateItem show={itemVisible} onHide={() => {setItemVisible(false)}} />

                </Container>
            </div>
        </>
    );
});

export default Products;
