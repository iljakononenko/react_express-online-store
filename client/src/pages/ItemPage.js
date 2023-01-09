import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';
import {useParams} from "react-router-dom";
import {fetchOneItem} from "../http/itemApi";

const ItemPage = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
    }, [])

    return (
        <Container className="d-flex mt-3">
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_URL_API + item.img} />
            </Col>
            <Col md={4}>
                <div className="d-flex flex-column align-items-center">
                    <h2>{item.name}</h2>
                    <div className="d-flex justify-content-center align-items-center"
                        style={{
                            background: `url(${bigStar}) no-repeat center center`,
                            width: 240,
                            height: 240,
                            backgroundSize: "cover",
                            fontSize: 64
                    }}
                    >
                        {item.rating}
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around ms-auto"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                >
                    <h3>{item.price} zł</h3>
                    <Button
                        variant={"outline-dark"}>
                        Purchase
                    </Button>
                </Card>
            </Col>
        </Container>
    );
};

export default ItemPage;
