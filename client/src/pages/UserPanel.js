import React, {useContext, useState} from 'react';
import NavBar from "../components/NavBars/NavBar";
import {Badge, Button, Card, Col, Container, Image, ListGroup, Table} from "react-bootstrap";
import itemImg from "../assets/iphone.jpg";
import bigStar from "../assets/bigStar.png";
import {Context} from "../index";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";
import UserOrders from "../components/UserPanel/UserOrders";
import UserData from "../components/UserPanel/UserData";
import FooterBlock from "../components/page_blocks/Footer_block";

const UserPanel = () => {

    const {user} = useContext(Context);

    const panels = [
        {id: 1, name: "Orders"},
        {id: 2, name: "User data"}
    ]

    const [selectedPanel, setSelectedPanel] = useState(panels[0]);

    return (
        <>
            <NavBar />
            <Container className="d-flex mt-3">
                <Col md={2}>
                    <ListGroup>
                        {panels.map(panel =>
                            <ListGroup.Item
                                style={{cursor: "pointer"}}
                                active={panel.id === selectedPanel.id}
                                onClick={() => setSelectedPanel(panel)}
                                key={panel.id}
                            >
                                {panel.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
                <Col md={10} style={{ padding: "0 10px" }}>
                    {
                        selectedPanel.id === 1 ?
                            <UserOrders />
                            :
                            <UserData />
                    }
                </Col>
            </Container>
            <FooterBlock />
        </>
    );
};

export default UserPanel;
