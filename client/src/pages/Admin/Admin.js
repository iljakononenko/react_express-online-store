import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./admin.css"
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";
import {Button} from "react-bootstrap";
import {fetchContactForms} from "../../http/userApi";
import OrderDetails from "../../components/modals/OrderDetails";
import FormDetails from "../../components/modals/FormDetails";

const Admin = () => {

    const [forms, setForms] = useState([]);
    const [currentForm, setCurrentForm] = useState({});
    const [loading, setLoading] = useState(true)

    const [formVisible, setFormVisible] = useState(false)

    useEffect(() => {
        fetchContactForms().then(data => {
            console.log(data)
            setForms(data)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <>
            <NavBar_admin siteName={"ProdSell"} />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />

                <FormDetails show={formVisible} form={currentForm} onHide={() => {setFormVisible(false)}}/>

                {
                    !loading ?
                        <div className="w-100 p-3 table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Creation date</th>
                                    <th scope="col">Actions</th>
                                </tr>

                                </thead>
                                <tbody>
                                {
                                    forms.length == 0 ?
                                        null
                                        :
                                        forms.map(form =>
                                            <tr key={form.id}>
                                                <td>{form.id}</td>
                                                <td>{form.name}</td>
                                                <td>{form.email}</td>
                                                <td>{form.createdAt.replace('T', " ").slice(0, 19)}</td>
                                                <td>
                                                    <Button variant={'warning'}
                                                            onClick={() => {
                                                                console.log(currentForm);
                                                                console.log(formVisible);
                                                                setCurrentForm(form);
                                                                setFormVisible(true)
                                                            } }
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
                                forms.length === 0 ?
                                    <h3 className={'text-center'}>No forms yet!</h3>
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

export default Admin;
