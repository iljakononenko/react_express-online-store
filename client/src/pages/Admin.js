import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateItem from "../components/modals/CreateItem";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBar";
import "./admin.css"
import {FaFile, FaHome, FaListUl, FaUsers} from "react-icons/fa";

const Admin = observer(() => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <>
            <NavBar />

            <div className={'d-flex h-100'}>
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3 sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <FaHome />
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FaFile />
                                    Orders
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FaListUl />
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FaUsers />
                                    Customers
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>



            {/*<Container className="d-flex flex-column">*/}
            {/*    <Button variant={"outline-dark"} className="mt-3" onClick={() => setTypeVisible(true)}>Add type</Button>*/}
            {/*    <Button variant={"outline-dark"} className="mt-3" onClick={() => setBrandVisible(true)}>Add brand</Button>*/}
            {/*    <Button variant={"outline-dark"} className="mt-3" onClick={() => setItemVisible(true)}>Add item</Button>*/}

            {/*    <CreateBrand show={brandVisible} onHide={() => {setBrandVisible(false)}}/>*/}
            {/*    <CreateType show={typeVisible} onHide={() => {setTypeVisible(false)}} />*/}
            {/*    <CreateItem show={itemVisible} onHide={() => {setItemVisible(false)}} />*/}

            {/*</Container>*/}
        </>
    );
});

export default Admin;
