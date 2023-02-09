import React from 'react';
import {FaBootstrap, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const FooterBlock = ({props}) => {
    return (
        <div className="container mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <FaBootstrap />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#">
                        <svg className="bi" width="24" height="24">
                            <FaTwitter />
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="#">
                        <svg className="bi" width="24" height="24">
                            <FaInstagram />
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="#">
                        <svg className="bi" width="24" height="24">
                            <FaFacebook />
                        </svg>
                    </a></li>
                </ul>
            </footer>
        </div>
    );
};

export default FooterBlock;
