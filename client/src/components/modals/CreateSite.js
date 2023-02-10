import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createSite} from "../../http/adminApi";
import {FaCashRegister, FaPaintBrush, FaRegFileCode, FaShoppingBasket, FaToolbox} from "react-icons/fa";
import {shop_starting_elements, single_page_starting_elements} from "../../utils/starting_elements";
import {ADMIN_ROUTE, EDITOR_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchPages} from "../../http/storeApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchItems, fetchTypes} from "../../http/itemApi";

const CreateSite = observer(({show, onHide}) => {

    const [siteName, setSiteName] = useState('');
    const [siteSubDomain, setSiteSubDomain] = useState('');
    const [siteVariant, setSiteVariant] = useState({});
    const history = useHistory();
    const {item, admin} = useContext(Context)

    const siteVariants = [
        {id: 1, name: "Single page", icon: <FaRegFileCode size={36} />, pages: single_page_starting_elements},
        {id: 2, name: "Shop", icon: <FaShoppingBasket size={36} />, pages: shop_starting_elements}
    ];

    const addSite = async () => {
        // add checking by already existing sites and subdomains
        let flag = true;
        if (Object.keys(siteVariant).length === 0 || siteSubDomain.trim() === "" || siteSubDomain.trim() === "") {
            flag = false;
            alert("Please select website type and write a name")
        }
        if (/[^a-zA-Z0-9 ]/.test(siteSubDomain)) {
            flag = false;
            alert("Site subdomain should consist only of numbers and letters!")
        }
        if (siteSubDomain === "localhost") {
            flag = false;
            alert("Please input different domain name!")
        }
        if (flag) {
            try {
                const data = await createSite( siteName, siteVariant.pages, siteVariant.id, siteSubDomain)

                setSiteName('')
                onHide()

                console.log(data)

                admin.setCurrentSiteId(data.website.id)
                admin.setCurrentSiteName(data.website.name)

                localStorage.setItem("current_website_id", data.website.id)
                localStorage.setItem("current_website_name", data.website.name)

                fetchTypes().then(data => item.setTypes(data))
                fetchBrands().then(data => item.setBrands(data))
                fetchItems(null, null, 1, 5).then(data => {
                    item.setItems(data.rows)
                    item.setTotalCount(data.count)
                })

                history.push(ADMIN_ROUTE)
            } catch (err) {
                if (err.response != null) {
                    alert(err.response.data.message)
                } else {
                    console.log(err)
                }

            }


        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Add Site
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className={'d-flex'}>
                    <Form className={'col-5 mx-auto'}>
                        <Form.Control placeholder={"Enter site name"} className={'text-center'} value={siteName} onChange={e => setSiteName(e.target.value)} />
                    </Form>
                    <Form className={'col-5 mx-auto'}>
                        <Form.Control placeholder={"Enter site subdomain"} className={'text-center'} value={siteSubDomain} onChange={e => setSiteSubDomain(e.target.value)} />
                    </Form>
                </div>
                <div className={'d-flex flex-wrap my-3'}>

                    {
                            siteVariants.map(site =>
                                <div key={site.id} onClick={() => setSiteVariant(site)} className={'col-3 p-3'}>
                                    <div className={
                                        site.id === siteVariant.id ?
                                            'd-flex flex-column justify-content-center align-items-center cursor-pointer site-variant selected'
                                        :
                                            'd-flex flex-column justify-content-center align-items-center cursor-pointer site-variant'}>
                                        {site.icon}
                                        <p className={'mb-0 mt-3'}>{site.name}</p>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={addSite}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateSite;
