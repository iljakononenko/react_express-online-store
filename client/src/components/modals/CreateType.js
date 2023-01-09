import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/itemApi";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('');
    const addType = () => {
        createType( {name: value}).then(data => {
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
                    Add Type
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter type name"} value={value} onChange={e => setValue(e.target.value)} />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={addType}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
