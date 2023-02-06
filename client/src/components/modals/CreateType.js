import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType, editType, fetchTypes} from "../../http/itemApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const CreateType = observer(({show, onHide, currentType = {}}) => {

    const {item} = useContext(Context)

    const [value, setValue] = useState(Object.keys(currentType).length === 0  ? '' : currentType.name);
    const submitType = () => {
        console.log(currentType)

        if (Object.keys(currentType).length === 0) {
            createType( {name: value}).then(data => {
                setValue('')
                fetchTypes().then(data => {
                    data.sort(function(a, b) {
                        return a.id - b.id;
                    })
                    item.setTypes(data)
                })
                onHide()
            })
        } else {
            editType( currentType.id, value).then(data => {
                setValue('')
                fetchTypes().then(data => {
                    data.sort(function(a, b) {
                        return a.id - b.id;
                    })
                    item.setTypes(data)
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
                    {Object.keys(currentType).length === 0 ? "Add Type" : "Edit Type"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter type name"} value={value} onChange={e => setValue(e.target.value)} />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={submitType}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateType;
