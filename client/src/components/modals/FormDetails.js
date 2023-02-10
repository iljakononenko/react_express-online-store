import React from 'react';
import {Badge, Button, Col, Form, Modal} from "react-bootstrap";

const FormDetails = ({show, onHide, form = {}}) => {

    const orderRowStyles = { padding: "20px", border: "1px solid #DFDFDF", borderRadius: "6px", marginBottom: "20px" }

    if (Object.keys(form).length == 0) {
        return (null)
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
                    Order details
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div key={form.id} >
                    <div className="d-flex justify-content-between w-100 mb-3" >
                        <div>
                            <span style={{ paddingRight: "12px", borderRight: "1px solid #DFDFDF" }}>Form id: {form.id}</span>
                            <span style={{ paddingLeft: "12px" }}>Date created: {form.createdAt.replace('T', ' ').slice(0,19)}</span>
                        </div>

                    </div>
                    <textarea value={form.message} className={"form-control mb-3 w-100"} style={{height: "200px", resize: "none"}} disabled={true}>
                        Test
                    </textarea>

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormDetails;
