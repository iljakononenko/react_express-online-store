import React, {useEffect, useState} from 'react';
import NavBar_admin from "../components/NavBars/NavBar_admin";
import Sidebar_admin from "../components/Sidebar_admin";
import {Button, Container} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import CreateSite from "../components/modals/CreateSite";
import "./editor.css"
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE} from "../utils/consts";
import {fetchOneSite, fetchWebSites} from "../http/adminApi";

const SiteManager = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const [websites, setWebsites] = useState([])

    useEffect(() => {
        fetchWebSites().then(data => {
            if ( data != null && data.websites != null ) {

                const time_now = Date.now()

                for (let website of data.websites) {
                    let lastUpdate = Date.parse(website.updatedAt);
                    website.lastUpdate = Math.floor((time_now - lastUpdate) / 60000)
                }

                let sorted_websites = data.websites.sort(function(a, b) {
                    return a.lastUpdate - b.lastUpdate;
                })

                setWebsites(sorted_websites)
            } else {
                console.log("no websites!")
            }
            setIsLoading(false)
        })
    }, [])

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



                            {
                                !isLoading && websites.map(website =>
                                    <div key={website.id} className="col-4 p-2">
                                        <NavLink className="card shadow-sm text-decoration-none" to={ADMIN_ROUTE}>

                                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                                <rect width="100%" height="100%" fill="#55595c"></rect>
                                            </svg>

                                            <div className="card-body">
                                                <p className="card-text mb-0">{website.name}</p>
                                                <div className="d-flex justify-content-end align-items-center">
                                                    <small className="text-muted">{website.lastUpdate === 0 ? "just now" : website.lastUpdate + " minutes ago"} </small>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            }


                    </div>
                </Container>
            </div>

        </>
    );
};

export default SiteManager;
