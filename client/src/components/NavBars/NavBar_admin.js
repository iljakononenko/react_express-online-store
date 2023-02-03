import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE, MANAGER_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {FaAngleRight, FaArrowRight, FaCaretRight} from "react-icons/fa";

const NavBarAdmin = ({siteName}) => {

    const history = useHistory()

    return (
        <Navbar bg="dark" variant="dark" style={{minHeight: '54px'}}>
            <Container className={'d-flex align-self-center justify-content-start'}>
                <NavLink style={{color: "white", textDecoration: "none"}} to={MANAGER_ROUTE}>Websites</NavLink>



                {siteName ?
                    <>
                        <FaAngleRight className={'mx-2 text-white'} />
                        <NavLink style={{color: "white", textDecoration: "none"}} to={ADMIN_ROUTE}>{siteName}</NavLink>
                    </>
                    :
                    ""
                }

                    {/*<Nav className="ms-auto" style={{color: "white"}}>*/}
                    {/*    <Button variant={"outline-light"} className="ms-2 d-flex align-items-center"*/}
                    {/*            onClick={() => history.push(EDITOR_ROUTE)}*/}
                    {/*    >*/}
                    {/*        Edit your website*/}
                    {/*        <FaCaretRight style={{ marginLeft: "6px", marginTop: "2px" }} />*/}
                    {/*    </Button>*/}
                    {/*</Nav>*/}
            </Container>
        </Navbar>
    );
};

export default NavBarAdmin;
