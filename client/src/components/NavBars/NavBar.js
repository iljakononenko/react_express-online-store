import React, {useContext} from 'react';
import {Context} from "../../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, USER_PANEL_ROUTE} from "../../utils/consts";
import {Button, Container, Dropdown, DropdownButton, Nav, NavDropdown} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {FaDoorOpen, FaShoppingCart, FaUserAlt} from "react-icons/fa";

const NavBar = observer(( {props} ) => {

    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration: "none"}} to={SHOP_ROUTE}>ProdSell</NavLink>
                {user.isAuth ?
                    <div className={'d-flex align-items-center'}>
                        <p className={'mb-0 text-white me-2'}>Hello, Illia Kononenko!</p>
                        <Navbar.Toggle className={"ms-auto"} style={{color: "white"}} aria-controls="navbar-dark-example"/>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="My account "
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item
                                        className={'d-flex align-items-center justify-content-between'}
                                        onClick={() => history.push(USER_PANEL_ROUTE)}>
                                        User panel
                                        <FaUserAlt />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        className={'d-flex align-items-center justify-content-between'}
                                        onClick={() => history.push(CART_ROUTE)}>
                                        Cart
                                        <FaShoppingCart />
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        className={'d-flex align-items-center justify-content-between'}
                                        onClick={() => logOut()}>
                                        Log out
                                        <FaDoorOpen />
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
