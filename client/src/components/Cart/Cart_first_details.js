import React from 'react';
import {Col} from "react-bootstrap";

const CartFirstDetails = () => {

    const list_group_item_check_style = {
        position: "absolute",
        clip: "rect(0, 0, 0, 0)"
    }

    return (
        <div>
            <h3 style={{ margin: "24px 0" }}>1. Delivery</h3>

            <div className="list-group list-group-checkable d-flex flex-row border-0 w-auto">
                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio" name="delivery_radio"
                           style={list_group_item_check_style} id="delivery_radio_1" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="delivery_radio_1">
                        First radio
                        <span
                            className="d-block small opacity-50">With support text</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio" name="delivery_radio"
                           style={list_group_item_check_style} id="delivery_radio_2" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="delivery_radio_2">
                        Second radio
                        <span className="d-block small opacity-50">Some other text goes here</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio"
                           style={list_group_item_check_style} name="delivery_radio" id="delivery_radio_3" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="delivery_radio_3">
                        Third radio
                        <span
                            className="d-block small opacity-50">And we end with another snippet of text</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio"
                           style={list_group_item_check_style} name="delivery_radio" id="delivery_radio_4" value=""
                    />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer"
                           htmlFor="delivery_radio_4">
                        Fourth radio
                        <span className="d-block small opacity-50">This option is disabled</span>
                    </label>
                </Col>

            </div>

            <h3 style={{ margin: "24px 0" }}>2. Payment</h3>

            <div className="list-group list-group-checkable d-flex flex-row border-0 w-auto">
                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio" name="payment_radio"
                           style={list_group_item_check_style} id="payment_radio_1" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="payment_radio_1">
                        First radio
                        <span
                            className="d-block small opacity-50">With support text</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio" name="payment_radio"
                           style={list_group_item_check_style} id="payment_radio_2" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="payment_radio_2">
                        Second radio
                        <span className="d-block small opacity-50">Some other text goes here</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio"
                           style={list_group_item_check_style} name="payment_radio" id="payment_radio_3" value="" />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer me-3" htmlFor="payment_radio_3">
                        Third radio
                        <span
                            className="d-block small opacity-50">And we end with another snippet of text</span>
                    </label>
                </Col>

                <Col md={3}>
                    <input className="list-group-item-check pe-none" type="radio"
                           style={list_group_item_check_style} name="payment_radio" id="payment_radio_4" value=""
                    />
                    <label className="list-group-item rounded-3 py-3 cursor-pointer"
                           htmlFor="payment_radio_4">
                        Fourth radio
                        <span className="d-block small opacity-50">This option is disabled</span>
                    </label>
                </Col>

            </div>
        </div>
    );
};

export default CartFirstDetails;
