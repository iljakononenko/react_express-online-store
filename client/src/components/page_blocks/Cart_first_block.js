import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container} from "react-bootstrap";
import itemImg from "../../assets/iphone.jpg";
import {FaCaretLeft, FaCaretRight, FaRegTrashAlt} from "react-icons/fa";
import CartFirstOrder from "./Cart_first_order";
import {getCartItems} from "../../http/cartApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {removeCartElement} from "../../http/cartApi";
import CartFirstDetails from "./Cart_first_details";

const CartFirstBlock = observer(({nextStage, reloadCart}) => {

    const {cart} = useContext(Context);

    const changeCartItemQuantity = (id, value) => {
        if (value >= 1) {
            let new_cart = cart.cart.map(cartElement => {
                if (cartElement.id === id) {
                    return {...cartElement, quantity: Number(value)}
                } else {
                    return cartElement
                }
            })

            cart.setCart(new_cart)
        }
    }

    const removeCartElementFromCart = async (id) => {
        let data = await removeCartElement(id);
        reloadCart();
    }

    return (
        <>
            <Container>
                <div className={'d-flex flex-column p-3 mt-5'} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>

                    {
                        cart.cart.length !== 0 ?

                        cart.cart.map(cartElement =>
                            <CartFirstOrder
                            key={cartElement.id}
                            id={cartElement.id}
                            quantity={cartElement.quantity}
                            changeQuantity={changeCartItemQuantity}
                            cartElement_shop_item={cartElement.shop_item}
                            removeCartElement={removeCartElementFromCart}
                        />)
                            :
                            <h1 className={'text-center my-3'}>Cart is empty!</h1>
                    }

                </div>

                {
                    cart.cart.length !== 0 ?
                        <CartFirstDetails/>
                        :
                        ""
                }

            </Container>

            {
                cart.cart.length !== 0 ?
                    <>
                        <hr style={{ margin: "48px 160px" }}/>

                        <Container className={"my-3 text-end pe-4"} style={{ margin: "48px auto" }} >
                            <p className={"mb-0"}>Together: <span className={"fw-bold"}>{cart.cartSum()} $</span></p>
                            <p>Delivery: <span className={"fw-bold"}>20 $</span></p>
                            <p className={"fs-5"}>Total cost: <span className={"fw-bold"}>{cart.cartSum() + 20} $</span></p>
                            <div className={'d-flex justify-content-between'}>
                                <Button variant={"success"} className={"d-flex align-items-center px-4 ms-auto"}
                                        style={{ borderRadius: "6px" }}
                                        onClick={nextStage}
                                >
                                    Next <FaCaretRight className={"ms-2"} />
                                </Button>
                            </div>
                        </Container>
                    </>
                :
                ""
            }
        </>
    );
});

export default CartFirstBlock;
