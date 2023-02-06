import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand, createType, editBrand, fetchBrands} from "../../http/itemApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateBrand = observer(({show, onHide, currentBrand = null}) => {

    const {item} = useContext(Context)


    const [value, setValue] = useState(Object.keys(currentBrand).length === 0 ? '' : currentBrand.name);
    const submitBrand = () => {

        if (Object.keys(currentBrand).length === 0) {
            createBrand( {name: value}).then(data => {
                setValue('')
                fetchBrands().then(data => {
                    data.sort(function(a, b) {
                        return a.id - b.id;
                    })
                    item.setBrands(data)
                })
                onHide()
            })
        } else {
            editBrand( currentBrand.id, value).then(data => {
                setValue('')
                fetchBrands().then(data => {
                    data.sort(function(a, b) {
                        return a.id - b.id;
                    })
                    item.setBrands(data)
                })
                onHide()
            })
        }

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    {Object.keys(currentBrand).length === 0 ? "Add Brand" : "Edit Brand"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter brand name"} value={value} onChange={e => setValue(e.target.value)} />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={submitBrand}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBrand;
