import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";
import AddressData from "../AddressData";
import {Context} from "../../index";

const CartSecondBlock = ({previousStage, nextStage}) => {

    const [isChecked, setIsChecked] = useState(true);
    const [isSaveChecked, setIsSaveChecked] = useState(true);
    const {cart} = useContext(Context)

    const updateBillingAddressData = (addressDataObject) => {
        cart.setBillingAddressData(addressDataObject);
        if (isChecked) {
            cart.setDeliveryAddressData(addressDataObject);
        }
    }

    const updateDeliveryAddressData = (addressDataObject) => {
        cart.setDeliveryAddressData(addressDataObject);
    }

    const handleCheck = () => {
        if (!isChecked) {
            cart.setDeliveryAddressData(cart.billingAddressData);
        } else {
            cart.resetDeliveryAddressData();
        }
        setIsChecked(prevState => !prevState);
        cart.switchIsDeliverySameAsBillingAddress();
    }

    const handleSaveCheck = () => {
        setIsSaveChecked(prevState => !prevState);
        cart.switchSaveDataAfterOrderFlag()
    }

    return (
        <div>
            <Container className={"my-5 pe-4"} style={{ margin: "48px auto" }} >

                <div className={"d-flex"}>
                    <div className="col-md-7 mb-5" style={{ paddingLeft: "12px" }}>
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">

                                <AddressData updateParentAddressData={updateBillingAddressData} givenAddressData={cart.billingAddressData} />

                                <div className={"pe-3"}>
                                    <hr className="my-4" />
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input cursor-pointer" id="same-address"
                                           defaultChecked={isChecked}
                                            onChange={handleCheck}
                                    />
                                    <label className="form-check-label cursor-pointer" htmlFor="same-address">
                                        Shipping address is the same as my billing address
                                    </label>
                                </div>

                                {
                                    isChecked ?
                                        ""
                                        :
                                        <AddressData updateParentAddressData={updateDeliveryAddressData} givenAddressData={cart.deliveryAddressData} />
                                }

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input cursor-pointer" id="save-address"
                                           defaultChecked={isSaveChecked}
                                           onChange={handleSaveCheck}
                                    />
                                    <label className="form-check-label cursor-pointer" htmlFor="save-address">
                                        Save delivery and billing data after order
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className={"col-md-5"}>
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{cart.cart.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {
                                cart.cart.map(cartElement =>
                                    <li key={cartElement.id} className="list-group-item d-flex justify-content-between lh-sm py-3">
                                        <div>
                                            <h6 className="my-0">{cartElement.shop_item.name}</h6>
                                        </div>
                                        <span className="text-muted">${cartElement.shop_item.price * cartElement.quantity}</span>
                                    </li>
                                )
                            }
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${cart.cartSum()}</strong>
                            </li>
                        </ul>

                        {/*<form className="card p-2">*/}
                        {/*    <div className="input-group">*/}
                        {/*        <input type="text" className="form-control" placeholder="Promo code" />*/}
                        {/*        <button type="submit" className="btn btn-secondary">Redeem</button>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                    </div>
                </div>

                <div className={'d-flex justify-content-between'}>
                    <div
                        className={'d-flex align-items-center text-danger cursor-pointer'}
                        onClick={previousStage}
                    >
                        <FaCaretLeft />
                        <span>Back</span>
                    </div>
                    <Button variant={"success"} className={"d-flex align-items-center px-4 ms-auto"}
                            style={{ borderRadius: "6px" }}
                            onClick={nextStage}
                    >
                        Next <FaCaretRight className={"ms-2"} />
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default CartSecondBlock;
