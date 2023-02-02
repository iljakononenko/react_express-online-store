import React from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE} from "../utils/consts";
import {FaColumns, FaFile, FaHome, FaListUl, FaTools, FaUsers} from "react-icons/fa";

const SidebarAdmin = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_ROUTE}>
                            <FaHome />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_ROUTE}>
                            <FaFile />
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_ROUTE}>
                            <FaListUl />
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_ROUTE}>
                            <FaUsers />
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={EDITOR_ROUTE + "/1"}>
                            <FaColumns />
                            Layout Editor
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_ROUTE}>
                            <FaTools />
                            Settings
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>

    );
};

export default SidebarAdmin;
