import React, {useEffect, useState} from 'react';
import "./admin.css"
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";
import {fetchOrders} from "../../http/adminApi";
import {Button} from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand";
import OrderDetails from "../../components/modals/OrderDetails";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchOrders().then(data => {
            console.log(data)
            setOrders(data)
        }).finally(() => setLoading(false))
    }, [])

    const orderSum = (order_products) => {
        let sum = 0;
        for (let cartElement of order_products) {
            sum += cartElement.quantity * cartElement.shop_item.price
        }
        return sum;
    }

    const [orderVisible, setOrderVisible] = useState(false)

    return (
        <>
            <NavBar_admin />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />

                <OrderDetails show={orderVisible} order={currentOrder} onHide={() => {setOrderVisible(false)}}/>

                {
                    !loading ?
                        <div className="w-100 p-3 table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Client</th>
                                    <th scope="col">Creation date</th>
                                    <th scope="col">Summary</th>
                                    <th scope="col">Actions</th>
                                </tr>

                                </thead>
                                <tbody>
                                {
                                    orders.length == 0 ?
                                        null
                                        :
                                        orders.map(order =>
                                            <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.email}</td>
                                                <td>{order.createdAt.replace('T', " ").slice(0, 19)}</td>
                                                <td>{orderSum(order.order_products)} $</td>
                                                <td>
                                                    <Button variant={'warning'}
                                                            onClick={() => { setCurrentOrder(order); setOrderVisible(true) } }
                                                    >
                                                        Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                }
                                </tbody>
                            </table>

                            {
                                orders.length === 0 ?
                                    <h3 className={'text-center'}>No orders yet!</h3>
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

export default Orders;
