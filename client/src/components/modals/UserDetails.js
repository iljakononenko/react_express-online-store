import React, {useState} from 'react';
import {Badge, Button, Col, Modal} from "react-bootstrap";
import AddressData from "../AddressData";
import {adminChangeUserData} from "../../http/adminApi";

const UserDetails = ({show, onHide, user}) => {

    // console.log(user)

    const [userData, setUserData] = useState(user.user_data);
    const [isSame, setIsSame] = useState(true);

    const switchIsSame = () => {
        setIsSame(prevState => {
            if (!prevState) {

                console.log(userData)

                const billingAddress = userData.find(userDataInstance => {console.log(userDataInstance);return userDataInstance.typeId === 1})

                console.log(billingAddress)

                setUserData(userDataPrevState => {
                    let newState = userDataPrevState.map(userDataInstance => {
                        return {...billingAddress, typeId: userDataInstance.typeId, id: userDataInstance.id}
                    });
                    console.log(newState)
                    return newState
                });

            }
            return !prevState;
        })
    }

    const updateBillingAddressData = (addressDataObject) => {
        setUserData(prevState => {
            return prevState.map(userDataInstance => {
                if (userDataInstance.typeId === 1 || isSame) {
                    return {...addressDataObject, typeId: userDataInstance.typeId, id: userDataInstance.id}
                } else {
                    return userDataInstance
                }
            });
        });

    }

    const updateDeliveryAddressData = (addressDataObject) => {
        setUserData(prevState => {
            let newState = prevState.map(userDataInstance => {
                if (userDataInstance.typeId === 2 || isSame) {
                    return {...addressDataObject, typeId: userDataInstance.typeId, id: userDataInstance.id}
                } else {
                    return userDataInstance
                }
            });

            return newState
        });
    }

    const getBillingUserData = () => {
        if (userData != null && Object.keys(userData).length !== 0) {
            return userData.find(userDataInstance => {return userDataInstance.typeId === 1})
        }
    }

    const getDeliveryUserData = () => {
        if (userData != null && Object.keys(userData).length !== 0) {
            return userData.find(userDataInstance => {
                return userDataInstance.typeId === 2
            })
        }
    }

    const updateUserData = () => {
        let userDataToSubmit = userData

        delete userDataToSubmit[0].createdAt
        delete userDataToSubmit[1].createdAt

        delete userDataToSubmit[0].updatedAt
        delete userDataToSubmit[1].updatedAt

        console.log(userData)
        adminChangeUserData(userData).then(result => {
            console.log(result)
        })
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
                <div >

                    {

                            <>
                                <AddressData updateParentAddressData={updateBillingAddressData} givenAddressData={getBillingUserData()} />

                                <hr className="my-4" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input cursor-pointer" id="same-address"
                                           defaultChecked={isSame}
                                           onChange={switchIsSame}
                                    />
                                    <label className="form-check-label cursor-pointer" htmlFor="same-address">
                                        Shipping address is the same as my billing address</label>
                                </div>

                                {
                                    isSame ?
                                        ""
                                        :
                                        <AddressData updateParentAddressData={updateDeliveryAddressData} givenAddressData={getDeliveryUserData()} />
                                }
                            </>
                    }

                    <div className={"text-center"}>
                        <button
                            className="btn btn-primary btn-lg d-inline-block " type="button"
                            onClick={updateUserData}
                        >Save changes</button>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserDetails;
