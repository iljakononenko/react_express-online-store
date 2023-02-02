import React, {useState} from 'react';
import NavBar_admin from "../components/NavBar_admin";
import Sidebar_admin from "../components/Sidebar_admin";
import {Button, Container} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import CreateSite from "../components/modals/CreateSite";
import "./editor.css"
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE} from "../utils/consts";

const Editor = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <CreateSite show={isModalOpen} onHide={closeModal} />
            <NavBar_admin />

            <div className={'d-flex h-100'}>

                <Container className={'my-5'}>
                    <div className={'d-flex align-items-center'}>
                        <h1>Websites</h1>
                        <Button
                            className={'d-inline-block ms-4'} variant={"success"}
                            style={{ padding: "6px 32px", height: "48px", borderRadius: "16px" }}
                            onClick={openModal}
                        >
                            Add new website
                            <FaPlus style={{ marginLeft: "8px", marginBottom: "4px" }} />
                        </Button>
                    </div>

                    <div className={'d-flex flex-wrap my-4'}>

                        <div className="col-4">
                            <NavLink className="card shadow-sm" to={ADMIN_ROUTE}>

                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                </svg>

                                <div className="card-body">
                                    <p className="card-text mb-0">System name</p>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                </Container>
            </div>

        </>
    );
};

export default Editor;
