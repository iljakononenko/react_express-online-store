import React from 'react';
import {FaBootstrap, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {renderCoreComponent} from "../../utils/components_map";
import {getTextObject} from "../../utils/elements_utils";
import {SPAN_TAG} from "../../utils/consts";

const FooterBlock = ({props}) => {

    if (props.length === 0) {
        props = [getTextObject("2022 Company, Inc", "mb-3 mb-md-0 text-muted", SPAN_TAG)]
    }

    return (
        <div className="container mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    {renderCoreComponent(props[0].key, props[0].component_id, props[0].props)}
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <svg className="bi" width="24" height="24">
                                <FaTwitter />
                            </svg>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <svg className="bi" width="24" height="24">
                                <FaInstagram />
                            </svg>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <svg className="bi" width="24" height="24">
                                <FaFacebook />
                            </svg>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default FooterBlock;
