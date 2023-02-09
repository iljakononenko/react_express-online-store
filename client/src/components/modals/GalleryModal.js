import React, {useEffect, useState} from 'react';
import {basicBlocks} from "../../utils/components_map";
import {Button, Form, Modal} from "react-bootstrap";

const GalleryModal = ({show, onHide, images = [], submitImage}) => {

    const [img_name, setImg_name] = useState("");

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Choose image
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className={'d-flex flex-wrap my-3'}>

                    {
                        images.length > 0 && images.map(img =>
                            <div key={img} onClick={() => setImg_name(img)} className={'col-3 p-3'}>
                                <div
                                    style={{borderRadius: "6px", overflow: "hidden"}}
                                    className={
                                    img === img_name ?
                                        'd-flex cursor-pointer gallery-variant p-0 selected'
                                        :
                                        'd-flex cursor-pointer gallery-variant p-0'}>
                                    <img className={''}
                                        style={{borderRadius: "6px", width: "100%"}}
                                         src={process.env.REACT_APP_URL_API + "/gallery/" + img} />
                                </div>
                            </div>
                        )
                    }

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={() => { submitImage(img_name) } }>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GalleryModal;
