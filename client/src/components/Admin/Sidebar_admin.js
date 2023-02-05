import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {
    ADMIN_CUSTOMERS_ROUTE,
    ADMIN_ORDERS_ROUTE,
    ADMIN_PRODUCTS_ROUTE,
    ADMIN_ROUTE,
    ADMIN_SETTINGS_ROUTE,
    EDITOR_ROUTE, MANAGER_ROUTE
} from "../../utils/consts";
import {FaColumns, FaDoorOpen, FaFile, FaHome, FaListUl, FaTools, FaUsers} from "react-icons/fa";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const SidebarAdmin = observer(() => {

    const {admin} = useContext(Context)
    const history = useHistory()

    if (admin.currentSiteId === 0) {
        const currentSiteId = Number(localStorage.getItem("current_website_id"));
        if (currentSiteId === null || currentSiteId === 0) {
            history.push(MANAGER_ROUTE)
        } else {
            admin.setCurrentSiteId(currentSiteId)
        }
    }

    if (admin.currentSiteName === "") {
        const currentSiteName = localStorage.getItem("current_website_name");
        if (currentSiteName === null || currentSiteName === "") {
            history.push(MANAGER_ROUTE)
        } else {
            admin.setCurrentSiteName(currentSiteName)
        }
    }

    const logOut = () => {
        admin.setIsAuth(false)
        admin.setAdmin({})
        localStorage.setItem('admin_token', "")
        history.push(ADMIN_ROUTE)
    }

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
                        <NavLink className="nav-link" to={ADMIN_ORDERS_ROUTE}>
                            <FaFile />
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_PRODUCTS_ROUTE}>
                            <FaListUl />
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_CUSTOMERS_ROUTE}>
                            <FaUsers />
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={EDITOR_ROUTE + "/" + admin.currentSiteId}>
                            <FaColumns />
                            Layout Editor
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={ADMIN_SETTINGS_ROUTE}>
                            <FaTools />
                            Settings
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link cursor-pointer"
                             onClick={() => logOut()}
                        >
                            <FaDoorOpen />
                            Log out
                        </div>
                    </li>
                </ul>

            </div>
        </nav>

    );
});

export default SidebarAdmin;
