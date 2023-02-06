import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../components/NavBars/NavBar";
import itemImg from "../assets/iphone.jpg";
import {Button, Col, Container} from "react-bootstrap";
import {FaCaretLeft, FaCaretRight, FaRegTrashAlt} from "react-icons/fa";
import FooterBlock from "../components/page_blocks/Footer_block";
import "./cart.css"
import CartFirstBlock from "../components/Cart/Cart_first_block";
import CartSecondBlock from "../components/Cart/Cart_second_block";
import CartHeader from "../components/Cart/Cart_header";
import CartLastBlock from "../components/Cart/Cart_last_block";
import {getCartItems} from "../http/cartApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getUserdata} from "../http/userApi";

const Cart = observer(() => {

    const {cart} = useContext(Context);
    const [cartStage, setCartStage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(0);

    function incrementCartStage() {
        setCartStage(cartStage + 1);
    }

    function decrementCartStage() {
        setCartStage(cartStage - 1);
    }

    const reloadCart = () => {
        setReload(prevState => ++prevState)
    }

    useEffect(() => {
        getCartItems().then(data => {
            if (data != null) {
                console.log(data);
                cart.setCart(data);
                console.log(cart)
                setIsLoading(false)
            }
        })
    }, [reload])

    useEffect(() => {
        getUserdata().then(result => {
            if (result.length != null) {
                cart.setBillingAddressData(result.find(userDataInstance => { return userDataInstance.typeId === 1 } ) )
                cart.setDeliveryAddressData(result.find(userDataInstance => { return userDataInstance.typeId === 2 } ) )

                let data_1_values = Object.entries(result[0]);
                let data_2_values = result[1];
                let are_same_flag = true;

                for (let [key, value] of data_1_values) {
                    if (key !== "id" && key != "typeId" && key !== "updatedAt" && key !== "createdAt" && value !== data_2_values[key]) {
                        are_same_flag = false;
                        break;
                    }
                }

                if (!are_same_flag) {
                    cart.switchIsDeliverySameAsBillingAddress();
                }
            }
        })
    }, [])

    return (
        <>
            <NavBar />

            <CartHeader cartStage={cartStage} />

            { !isLoading && cartStage === 1 ? <CartFirstBlock nextStage={incrementCartStage} reloadCart={reloadCart} /> : "" }

            { !isLoading && cartStage === 2 ? <CartSecondBlock previousStage={decrementCartStage} nextStage={incrementCartStage} /> : "" }

            { !isLoading && cartStage === 3 ? <CartLastBlock previousStage={decrementCartStage} /> : "" }

            <FooterBlock />
        </>
    );
});

export default Cart;
