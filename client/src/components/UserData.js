import React, {useEffect, useState} from 'react';
import AddressData from "./AddressData";
import {changePassword, changeUserData, getUserdata} from "../http/userApi";

const UserData = () => {

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [userData, setUserData] = useState([]);
    const [isSame, setIsSame] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const submitPasswordChange = () => {
        changePassword(password, newPassword).then(result => {
            console.log(result)
        })
    }

    useEffect(async () => {
        let data = await getUserdata()
        setUserData(data)

        let data_1_values = Object.entries(data[0]);
        let data_2_values = data[1];
        let are_same_flag = true;

        for (let [key, value] of data_1_values) {
            if (key !== "id" && key != "typeId" && key !== "updatedAt" && key !== "createdAt" && value !== data_2_values[key]) {
                are_same_flag = false;
                break;
            }
        }

        if (!are_same_flag) {
            setIsSame(false);
        }

        setIsLoading(false)

    }, [])

    const switchIsSame = () => {
        if (!isLoading) {
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

            console.log('---prevState---')
            console.log(prevState)
            console.log('---newState---')
            console.log(newState)

            return newState
        });
    }

    const getBillingUserData = () => {
        if (userData[0].typeId == 1) {
            return userData[0];
        } else {
            return userData[1];
        }
    }

    const getDeliveryUserData = () => {
        if (userData[0].typeId == 2) {
            return userData[0];
        } else {
            return userData[1];
        }
    }

    const updateUserData = () => {
        let userDataToSubmit = userData

        delete userDataToSubmit[0].createdAt
        delete userDataToSubmit[1].createdAt

        delete userDataToSubmit[0].updatedAt
        delete userDataToSubmit[1].updatedAt

        console.log(userData)
        changeUserData(userData).then(result => {
            console.log(result)
        })
    }

    return (
        <div className={"d-flex"}>
        <div className="col-md-7" style={{ paddingLeft: "12px" }}>
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
                <div className="row g-3">

                    {
                        !isLoading ?
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

                        :

                        ""
                    }

                    <div className={"text-center"}>
                        <button
                            className="btn btn-primary btn-lg d-inline-block " type="button"
                            onClick={updateUserData}
                        >Save changes</button>
                    </div>

                </div>
            </form>
        </div>

        <div className="col-md-5">
            <h4 className={"text-center mb-2"}>Change password</h4>
            <form className="p-4 border rounded-3 bg-light">
                <div className="mb-3">
                    <label htmlFor="floatingCurrentPassword" className={"form-label"}>Your current password</label>
                    <input type="password" className="form-control" id="floatingCurrentPassword" placeholder=""
                           value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingPassword" className={"form-label"}>New Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder=""
                        value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button"
                    onClick={submitPasswordChange}
                >
                    Change password
                </button>
            </form>
        </div>
    </div>
    );
};

export default UserData;
