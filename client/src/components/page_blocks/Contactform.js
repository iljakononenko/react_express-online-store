import React, {useState} from 'react';
import {Button, Container, Form, Toast} from "react-bootstrap";
import {renderCoreComponent} from "../../utils/components_map";
import {NavLink, useLocation} from "react-router-dom";
import {EDITOR_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, sendContactForm} from "../../http/userApi";
import {FaTelegramPlane} from "react-icons/fa";

const Contactform = ({props}) => {

    const [operationSuccessToast, setOperationSuccessToast] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const location = useLocation();
    const isRealPage = !location.pathname.includes(EDITOR_ROUTE);

    const click = async () => {
        if (isRealPage) {
            try {
                sendContactForm({name, email, message}).then(data => {

                }).finally(() => {
                    setEmail("")
                    setName("")
                    setMessage("")
                    setOperationSuccessToast(true)
                })
                let data;
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    }

    return (
        <Container className={'my-3 p-5'} style={{border: "1px solid #dfdfdf", borderRadius: "6px"}}>
            <h1 className={'text-center mb-5'}>Contact form</h1>
            <Form className="d-flex justify-content-center">
                <div className={'me-3'}>
                    <div className={'d-flex align-items-center mb-3'}>
                        <p className={'me-3 mb-0'}>Your name:</p>
                        <div>
                            <Form.Control className="" placeholder="Input Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <p className={'me-3 mb-0'}>Your email:</p>
                        <div>
                            <Form.Control className="" placeholder="Input email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-7 d-flex flex-column align-items-end">
                     <textarea value={message} onChange={e => setMessage(e.target.value)} className={"form-control mb-3 w-100"} style={{height: "200px", resize: "none"}}>
                        Test
                    </textarea>
                    <Button
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Send
                        <FaTelegramPlane className={'ms-1 mb-1'} />
                    </Button>
                </div>

            </Form>
            <Toast onClose={() => setOperationSuccessToast(false)} show={operationSuccessToast}
                   delay={2500} autohide
                   style={{ position: 'absolute', bottom: "0", right: "3%" }}
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">System</strong>
                    {/*<small>11 mins ago</small>*/}
                </Toast.Header>
                <Toast.Body>Form has been sent!</Toast.Body>
            </Toast>
        </Container>
    );
};

export default Contactform;
