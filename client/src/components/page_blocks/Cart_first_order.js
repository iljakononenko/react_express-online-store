import React, {useState} from 'react';
import itemImg from "../../assets/iphone.jpg";
import {FaCaretLeft, FaCaretRight, FaRegTrashAlt} from "react-icons/fa";

const CartFirstOrder = ({cartElement_shop_item, quantity, changeQuantity, id, removeCartElement}) => {

    return (
        <div className={"d-flex justify-content-between p-2 mb-3"} style={{ border: "1px solid #DFDFDF", borderRadius: "6px" }}>
            <div className={"d-flex align-items-center"}>
                <img src={process.env.REACT_APP_URL_API + cartElement_shop_item.img} style={{ padding: "6px 12px" }} width={120} height={80} alt="product"/>
                <span>{cartElement_shop_item.name}</span>
            </div>
            <div className={'d-flex'}>
                <div className={"d-flex align-items-center me-5"}>{cartElement_shop_item.price} $</div>
                <div className={'d-flex align-items-center mx-5'}>
                    <FaCaretLeft
                        style={{ marginRight: "4px", fontSize: "1.5em", cursor: "pointer"}}
                        onClick={() => changeQuantity(id, quantity - 1) }
                    />
                    <input type="number" className={"form-control text-center"} style={{ width: "50px" }} value={quantity}
                           onChange={e => changeQuantity(id, e.target.value) }
                    />
                    <FaCaretRight
                        style={{ marginLeft: "4px", fontSize: "1.5em", cursor: "pointer" }}
                        onClick={() => changeQuantity(id, quantity + 1) }
                    />
                </div>
                <div className={"d-flex align-items-center ms-5 pe-3"}>
                    <div className={"d-flex align-items-center pe-3 me-5 user-select-none"}>{quantity * cartElement_shop_item.price} $</div>
                    <div className={"d-flex align-items-center p-2 cursor-pointer"}
                        onClick={() => removeCartElement(id)}
                    >
                        <FaRegTrashAlt />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartFirstOrder;
