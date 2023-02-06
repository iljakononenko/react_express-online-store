import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE, MANAGER_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {FaAngleRight, FaArrowRight, FaCaretRight} from "react-icons/fa";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const NavBarAdmin = observer(() => {

    const {admin} = useContext(Context)
    const history = useHistory()
    const location = useLocation()

    return (
        <Navbar bg="dark" variant="dark" style={{minHeight: '54px'}}>
            <Container className={'d-flex align-self-center justify-content-start'}>
                <NavLink style={{color: "white", textDecoration: "none"}} to={MANAGER_ROUTE}>Websites</NavLink>

                {admin.currentSiteName && location.pathname !== "/manager" ?
                    <>
                        <FaAngleRight className={'mx-2 text-white'} />
                        <NavLink style={{color: "white", textDecoration: "none"}} to={ADMIN_ROUTE}>{admin.currentSiteName}</NavLink>
                    </>
                    :
                    ""
                }

                {
                    location.pathname !== "/manager" ?
                        <Nav className="ms-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"} className="ms-2 d-flex align-items-center"
                                    onClick={() => {history.push("/")}}
                            >
                                Go to website
                                <FaCaretRight style={{ marginLeft: "6px", marginTop: "2px" }} />
                            </Button>
                        </Nav>
                        :
                        null
                }
            </Container>
        </Navbar>
    );
});

export default NavBarAdmin;
