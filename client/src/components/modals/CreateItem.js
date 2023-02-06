import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createItem, editItem, fetchBrands, fetchItems, fetchTypes} from "../../http/itemApi";
import {observer} from "mobx-react-lite";

const CreateItem = observer(({show, onHide, currentItem = {}, setReload}) => {

    const [name, setName] = useState(Object.keys(currentItem).length === 0 ? '' : currentItem.name)
    const [price, setPrice] = useState(Object.keys(currentItem).length === 0 ? 0 : currentItem.price)
    const [typeSelected, setSelectedType] = useState(null)
    const [brandSelected, setSelectedBrand] = useState(null)
    const [file, setFile] = useState(null)
    const {item} = useContext(Context)

    useEffect(() => {
        if (Object.keys(currentItem).length !== 0) {
            let type = item.types.find(type => {return type.id === currentItem.typeId})
            let brand = item.brands.find(brand => {return brand.id === currentItem.brandId})

            setSelectedType(type)
            setSelectedBrand(brand)
        }
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

        if (Object.keys(currentItem).length !== 0) {
            formData.append('id', currentItem.id)
            editItem(formData).then(data => {
                setReload(prevState => ++prevState)
                onHide()
            });
        } else {
            createItem(formData).then(data => {
                setReload(prevState => ++prevState)
                onHide()
            });
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
                    {Object.keys(currentItem).length !== 0 ? "Edit item" : "Add Item"}
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
});

export default CreateItem;
