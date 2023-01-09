import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createItem, fetchBrands, fetchItems, fetchTypes} from "../../http/itemApi";

const CreateItem = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [typeSelected, setSelectedType] = useState(null)
    const [brandSelected, setSelectedBrand] = useState(null)
    const [file, setFile] = useState(null)
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const submitItem = () => {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', brandSelected.id)
        formData.append('typeId', typeSelected.id)
        formData.append('info', "info")
        createItem(formData).then(data => onHide());
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
                    Add Item
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{typeSelected ? typeSelected.name : "Choose Type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map(type =>
                                <Dropdown.Item onClick={() => setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{brandSelected ? brandSelected.name : "Choose Brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.brands.map(brand =>
                                <Dropdown.Item onClick={() => setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className="mt-3" placeholder={"Enter item name"} value={name} onChange={e => setName(e.target.value)} />
                    <Form.Control className="mt-3" placeholder={"Enter item price"} type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
                    <Form.Control className="mt-3" type="file" onChange={selectFile}/>
                    <hr/>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={submitItem}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateItem;
