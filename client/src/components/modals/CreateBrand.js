import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand, createType} from "../../http/itemApi";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('');
    const addBrand = () => {
        createBrand( {name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Add Brand
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter brand name"} value={value} onChange={e => setValue(e.target.value)} />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
