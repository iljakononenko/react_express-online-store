import React from 'react';
import {Badge, Button, Col, Form, Modal} from "react-bootstrap";

const OrderDetails = ({show, onHide, order}) => {

    const orderSum = (order_products) => {
        let sum = 0;
        for (let cartElement of order_products) {
            sum += cartElement.quantity * cartElement.shop_item.price
        }
        return sum;
    }

    const orderRowStyles = { padding: "20px", border: "1px solid #DFDFDF", borderRadius: "6px", marginBottom: "20px" }

    if (Object.keys(order).length == 0) {
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
                    <div key={order.id} style={ { ...orderRowStyles, maxHeight: "720px" }  } >
                        <div className="d-flex justify-content-between w-100 mb-3" >
                            <div>
                                <span style={{ paddingRight: "12px", borderRight: "1px solid #DFDFDF" }}>Order number: {order.id}</span>
                                <span style={{ paddingLeft: "12px" }}>Date order: {order.createdAt.replace('T', ' ').slice(0,19)}</span>
                            </div>
                            <div>
                                {order.status === 3 ?
                                    <Badge bg="success">Order received</Badge>
                                    :
                                    ""
                                }
                            </div>
                        </div>

                        {
                            order.order_products.map(order_product =>
                                <div key={order_product.id} className={"d-flex justify-content-between p-2 mb-2"} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>
                                    <div className={"d-flex align-items-center"}>
                                        <img src={process.env.REACT_APP_URL_API + order_product.shop_item.img} style={{ padding: "6px 12px" }} width={70} height={40} alt="product"/>
                                        <span>{order_product.shop_item.name}</span>
                                    </div>
                                    <div className={'d-flex'}>
                                        <div className={"d-flex align-items-center me-3 fw-bold"}>{order_product.shop_item.price} $</div>
                                        <div className={'d-flex align-items-center ms-2 me-5'}>
                                            <p className={'mb-0'}>x{order_product.quantity}</p>
                                        </div>
                                        <div
                                            className={"d-flex align-items-center pe-3 me-2 user-select-none fw-bold"}
                                            style={{ minWidth: "90px" }}
                                        >
                                            {order_product.shop_item.price * order_product.quantity} $
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className={"mt-3 mb-0 text-end"} >
                            <p className={"mb-0"}>Together: <span className={"fw-bold"}>{orderSum(order.order_products)} $</span></p>
                            <p>Delivery: <span className={"fw-bold"}>20 $</span></p>
                            <p className={"fs-5"}>Total cost: <span className={"fw-bold"}>{orderSum(order.order_products) + 20} $</span></p>
                        </div>
                        <div style={ { visibility: "visible", display: "flex" } }>
                            <Col md={3}>
                                <p className={"fw-bold"}>Payment</p>
                                <p>Credit card</p>
                            </Col>
                            <Col md={3}>
                                <p className={"fw-bold"}>Delivery</p>
                                <p>Courier</p>
                            </Col>
                            <Col md={3}>
                                <p className={"fw-bold"}>Billing address</p>
                                <p className={'mb-0'}>{order.firstName} {order.lastName}</p>
                                <p className={'mb-0'}>{order.address}</p>
                                <p className={'mb-0'}>{order.postal}, {order.city} {order.country}</p>
                                <p className={'mb-0'}>{order.phone}</p>
                            </Col>
                            <Col md={6}>
                                <p className={"fw-bold"}>Delivery address</p>
                                <p className={'mb-0'}>{order.deliveryFirstName} {order.deliveryLastName}</p>
                                <p className={'mb-0'}>{order.deliveryAddress}</p>
                                <p className={'mb-0'}>{order.deliveryPostal}, {order.deliveryCity} {order.deliveryCountry}</p>
                                <p className={'mb-0'}>{order.deliveryPhone}</p>
                            </Col>
                        </div>
                    </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderDetails;
