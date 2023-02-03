import React from 'react';
import {Container} from "react-bootstrap";
import {FaCheck, FaCheckCircle} from "react-icons/fa";

const CartHeader = ({cartStage}) => {

    const number_circle_styles = {
        display: "flex",
        background: "#212529",
        border: "1px solid #212529",
        color: "#fff",
        borderRadius: "50px",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "6px",
        fontSize: "18px",
        fontWeight: "bold"
    }

    return (
    <>
        <h1 className={'text-center mt-4 mb-2'}>Cart</h1>

         <Container className={'d-flex justify-content-center my-3'}>
            <div className={'d-flex align-items-center'}>
                {
                    cartStage > 1 ?
                        <FaCheckCircle className={'d-block check-icon'} />
                        :
                        <span className={cartStage === 1 ? "number-circle current" : "number-circle"}>1</span>
                }
                Delivery and Payment
            </div>
            <div className={'divider'}></div>
            <div className={'d-flex align-items-center'}>
                {
                    cartStage > 2 ?
                        <FaCheckCircle className={'d-block check-icon'} />
                        :
                        <span className={cartStage === 2 ? "number-circle current" : "number-circle"}>2</span>
                }
                My data
            </div>
            <div className={'divider'}></div>
            <div className={'d-flex align-items-center'}>
                <span className={cartStage === 3 ? "number-circle current" : "number-circle"}>3</span>
                Summary
            </div>
        </Container>
    </>
    );
};

export default CartHeader;
