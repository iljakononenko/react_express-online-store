import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Container, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {

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
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Admin Panel</Button>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => logOut()}>Log out</Button>
                    </Nav>
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
