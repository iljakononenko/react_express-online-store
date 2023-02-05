import React from 'react';
import "./admin.css"
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";

const Settings = () => {
    return (
        <>
            <NavBar_admin />

            <div className={'d-flex h-100'}>
                <Sidebar_admin />

            </div>

        </>
    );
};

export default Settings;
