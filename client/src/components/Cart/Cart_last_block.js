import React, {useContext, useState} from 'react';
import {FaCaretLeft, FaCaretRight, FaCheck, FaRegTrashAlt} from "react-icons/fa";
import {Button, Card, Col, Container} from "react-bootstrap";
import itemImg from "../../assets/iphone.jpg";
import {Context} from "../../index";
import {makeOrder} from "../../http/cartApi";
import {USER_PANEL_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const CartLastBlock = ({previousStage}) => {

    const {cart} = useContext(Context)
    const history = useHistory()

    const submitOrder = async () => {
        let result = await makeOrder({
            items: cart.cart,
            deliveryAddressData: cart.deliveryAddressData,
            billingAddressData: cart.billingAddressData,
            isDeliverySameAsBillingAddress: cart.isDeliverySameAsBillingAddress,
            saveDataAfterOrderFlag: cart.saveDataAfterOrderFlag
        })

        history.push(USER_PANEL_ROUTE)
    }

    return (
        <div>
            <Container>

                <div className={'d-flex'}>

                    <Col md={8}>
                        <div className={'d-flex flex-column p-3 mt-5 mb-5'} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>

                            { cart.cart.map(cartElement =>
                                <div key={cartElement.id} className={"d-flex justify-content-between p-2 mb-3"} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>
                                    <div className={"d-flex align-items-center"}>
                                        <img src={process.env.REACT_APP_URL_API + cartElement.shop_item.img} style={{ padding: "6px 12px" }} width={120} height={80} alt="product"/>
                                        <span>{cartElement.shop_item.name}</span>
                                    </div>
                                    <div className={'d-flex'}>
                                        <div className={"d-flex align-items-center me-3 fw-bold"}>{cartElement.shop_item.price} $</div>
                                        <div className={'d-flex align-items-center ms-2 me-5'}>
                                            <p className={'mb-0'}>x{cartElement.quantity}</p>
                                        </div>
                                        <div className={"d-flex align-items-center pe-3 me-2 user-select-none fw-bold"}>{cartElement.shop_item.price * cartElement.quantity} $</div>
                                    </div>
                                </div>
                                )
                            }

                        </div>

                        <div className={'d-flex mb-5'}>
                            <Card style={{ width: '18rem', marginRight: "12px" }}>
                                <Card.Body>
                                    <Card.Title>Delivery Address</Card.Title>
                                    <p className={'mb-0'}>{cart.deliveryAddressData.firstName} {cart.deliveryAddressData.lastName}</p>
                                    <p className={'mb-0'}>{cart.deliveryAddressData.country}</p>
                                    <p className={'mb-0'}>{cart.deliveryAddressData.address}</p>
                                    <p className={'mb-0'}>{cart.deliveryAddressData.postal}, {cart.deliveryAddressData.city}</p>
                                    <p className={'mb-0'}>{cart.deliveryAddressData.phone}</p>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', marginRight: "12px" }}>
                                <Card.Body>
                                    <Card.Title>Billing Address</Card.Title>
                                    <p className={'mb-0'}>{cart.billingAddressData.firstName} {cart.billingAddressData.lastName}</p>
                                    <p className={'mb-0'}>{cart.billingAddressData.country}</p>
                                    <p className={'mb-0'}>{cart.billingAddressData.address}</p>
                                    <p className={'mb-0'}>{cart.billingAddressData.postal}, {cart.billingAddressData.city}</p>
                                    <p className={'mb-0'}>{cart.billingAddressData.phone}</p>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Delivery and Payment</Card.Title>
                                    <p className={'mb-0'}>Courier</p>
                                    <p>PayPal</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={'ps-3 my-5'}>
                            <div className={'p-3'} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>
                                <div className={"d-flex justify-content-between"}><span>Together:</span> <span className={"fw-bold"}>{cart.cartSum()} $</span></div>
                                <div className={"d-flex justify-content-between"}><span>Delivery:</span> <span className={"fw-bold"}>20 $</span></div>
                                <div className={"d-flex justify-content-between fs-5"}><span>Total cost:</span> <span className={"fw-bold"}>{cart.cartSum() + 20} $</span></div>
                                <Button variant={'success'} className={'mt-4 w-100 fs-5 d-flex align-items-center justify-content-center'}
                                    onClick={submitOrder}>
                                    Order
                                    <FaCheck style={{ marginLeft: "8px" }} />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </div>

                <div className={'d-flex justify-content-between'}>
                    <div
                        className={'d-flex align-items-center text-danger cursor-pointer'}
                        onClick={previousStage}
                    >
                        <FaCaretLeft />
                        <span>Back</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartLastBlock;
