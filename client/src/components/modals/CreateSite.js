import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createSite} from "../../http/adminApi";
import {FaCashRegister, FaPaintBrush, FaRegFileCode, FaShoppingBasket, FaToolbox} from "react-icons/fa";
import {shop_starting_elements, single_page_starting_elements} from "../../utils/starting_elements";
import {EDITOR_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const CreateSite = ({show, onHide}) => {

    const [siteName, setSiteName] = useState('');
    const [siteVariant, setSiteVariant] = useState({});
    const history = useHistory();

    const siteVariants = [
        {id: 0, name: "Single page", icon: <FaRegFileCode size={36} />, pages: single_page_starting_elements},
        {id: 1, name: "Shop", icon: <FaShoppingBasket size={36} />, pages: shop_starting_elements}
    ];

    const addSite = () => {
        createSite( siteName, JSON.stringify(siteVariant.pages), siteVariant.id).then(data => {
            setSiteName('')
            onHide()
            history.push(EDITOR_ROUTE + "/" + data.editor_id)
        })
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
                <Form className={'col-6 mx-auto'}>
                    <Form.Control placeholder={"Enter site name"} className={'text-center'} value={siteName} onChange={e => setSiteName(e.target.value)} />
                </Form>
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
};

export default CreateSite;
