import React, {useContext} from 'react';
import {Context} from "../../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Button, Container, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {FaAngleLeft, FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import {HiRefresh} from "react-icons/hi";

const NavBar_adminEditor = observer(({saveChanges, resetChanges}) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{ maxWidth: "100%", marginRight: "60px", marginLeft: "10px" }}>
                <NavLink style={{color: "white", textDecoration: "none"}} to={ADMIN_ROUTE}>
                    <FaAngleLeft />Back to panel
                </NavLink>
                <Nav className="ms-auto" style={{color: "white"}}>
                    <Button
                        variant={"danger"}
                        style={{ padding: "6px 22px", borderRadius: "24px", marginRight: "8px" }}
                        onClick={ resetChanges }
                    >
                        Reset Changes <HiRefresh style={{ marginBottom: "4px", marginLeft: "4px" }} />
                    </Button>
                    <Button
                        variant={"success"}
                        style={{ padding: "6px 26px", borderRadius: "24px" }}
                        onClick={ saveChanges }
                    >
                        Publish <FaCheckCircle style={{ marginBottom: "4px", marginLeft: "4px" }} />
                    </Button>
                </Nav>
            </Container>
        </Navbar>

    );
});

export default NavBar_adminEditor;
