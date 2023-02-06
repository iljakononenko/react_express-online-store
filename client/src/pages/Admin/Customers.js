import React, {useEffect, useState} from 'react';
import "./admin.css"
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";
import {fetchUsers, removeUserById} from "../../http/adminApi";
import {Button} from "react-bootstrap";
import OrderDetails from "../../components/modals/OrderDetails";
import UserDetails from "../../components/modals/UserDetails";

const Customers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        fetchUsers().then(data => {
            console.log(data)
            setUsers(data)
        }).finally(() => setLoading(false))
    }, [])

    const getBillingAddress = (user) => {
        return user.user_data.find(userDataInstance => {return userDataInstance.typeId === 1})
    }

    const getDeliveryAddress = (user) => {
        return user.user_data.find(userDataInstance => {return userDataInstance.typeId === 2})
    }

    const removeUser = (user) => {
        removeUserById(user.id).then(data => {
            console.log(data)
            setLoading(true)
            fetchUsers().then(data => {
                console.log(data)
                setUsers(data)
            }).finally(() => setLoading(false))
        })
    }

    const [userVisible, setUserVisible] = useState(false)

    return (
        <>
            <NavBar_admin />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />

                { userVisible ? <UserDetails show={userVisible} user={currentUser} onHide={() => {setUserVisible(false)}}/> : "" }

                {
                    !loading ?
                        <div className="w-100 p-3 table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">e-mail</th>
                                    <th scope="col">Address data</th>
                                    <th scope="col">Billing data</th>
                                    <th scope="col">Actions</th>
                                </tr>

                                </thead>
                                <tbody>
                                {
                                    users.length === 0 ?
                                        null
                                        :
                                        users.map(user =>
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <p className={'mb-0'}>{getDeliveryAddress(user).firstName} {getDeliveryAddress(user).lastName} {getDeliveryAddress(user).address} {getDeliveryAddress(user).phone}</p>
                                                    <p className={'mb-0'}>{getDeliveryAddress(user).postal}, {getDeliveryAddress(user).city} {getDeliveryAddress(user).country}</p>
                                                </td>
                                                <td>
                                                    <p className={'mb-0'}>{getBillingAddress(user).firstName} {getBillingAddress(user).lastName} {getBillingAddress(user).address} {getBillingAddress(user).phone}</p>
                                                    <p className={'mb-0'}>{getBillingAddress(user).postal}, {getBillingAddress(user).city} {getBillingAddress(user).country}</p>
                                                </td>
                                                <td>
                                                    <Button variant={'warning'} className={'px-3'}
                                                            onClick={() => { setCurrentUser(user); setUserVisible(true) } }
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button variant={'danger'} className={'ms-3'}
                                                            onClick={() => { removeUser(user); } }
                                                    >
                                                        Remove
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                }
                                </tbody>
                            </table>

                            {
                                users.length === 0 ?
                                    <h3 className={'text-center'}>No users yet!</h3>
                                    :
                                    ""
                            }
                        </div>
                        :
                        ""
                }

            </div>

        </>
    );
};

export default Customers;
