import React, {useState} from 'react';
import {basicBlocks} from "../../utils/components_map";
import {Button, Form, Modal} from "react-bootstrap";

const AddBlock = ({show, onHide, submitBlock}) => {

    const available_blocks = basicBlocks;

    const [blockVariant, setBlockVariant] = useState({});

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Add block
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className={'d-flex flex-wrap my-3'}>

                    {
                        available_blocks.map(block =>
                            <div key={block.block_id} onClick={() => setBlockVariant(block)} className={'col-3 p-3'}>
                                <div className={
                                    block.block_id === blockVariant.block_id ?
                                        'd-flex flex-column justify-content-center align-items-center cursor-pointer site-variant selected'
                                        :
                                        'd-flex flex-column justify-content-center align-items-center cursor-pointer site-variant'}>
                                    {block.icon}
                                    <p className={'mb-0 mt-3'}>{block.block_name}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Cancel</Button>
                <Button variant={"outline-success"} onClick={() => { submitBlock(blockVariant.block_id) } }>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBlock;
