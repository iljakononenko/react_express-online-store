import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./admin.css"
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";

const Admin = () => {

    return (
        <>
            <NavBar_admin siteName={"ProdSell"} />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />
            </div>

        </>
    );
};

export default Admin;
