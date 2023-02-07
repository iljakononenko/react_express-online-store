import React from 'react';
import Text from "../../core_components/Text";
import {getDivObject, getTextObject} from "../../../utils/components_map";
import {H1_TAG, H2_TAG, P_TAG} from "../../../utils/consts";

const Product = ({props}) => {
    console.log(props == null)
    let result;

    if (props == null) {
        result =
            <div>
            <div className="position-relative p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Punny headline</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing
                        efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#" data-text-id={2}>Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto block"></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto block"></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto block"></div>
                </div>
                <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto block"></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto block"></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto block"></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto block"></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-body shadow-sm mx-auto block"></div>
                </div>
            </div>
        </div>
    } else {
        let test = {
           component_id: 0, key: 1, props: {className: "", children: [
                    {component_id: 1, key: 1, props: {text: "test", className: "text-center", type: 1}},
                    {component_id: 1, key: 2, props: {text: "test", className: "text-center", type: 1}},
                ]
           }
        }

        result = getDivObject("", [
           getDivObject("position-relative p-3 p-md-5 m-md-3 text-center bg-light", [
               getDivObject("col-md-5 p-lg-5 mx-auto my-5", [
                   getTextObject( "Punny headline", "display-4 fw-normal", H1_TAG),
                   getTextObject( "And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.", "lead fw-normal", P_TAG),
                   getDivObject("product-device shadow-sm d-none d-md-block", []),
                   getDivObject("product-device product-device-2 shadow-sm d-none d-md-block", []),
               ])
           ]),
            getDivObject("d-md-flex flex-md-equal w-100 my-md-3 ps-md-3", [
                getDivObject("text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                    getDivObject("my-3 py-3", [
                        getTextObject( "Another headline", "display-5", H2_TAG),
                        getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                    ]),
                    getDivObject("bg-light shadow-sm mx-auto block", []),
                ]),
                getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                    getDivObject("my-3 py-3", [
                        getTextObject( "Another headline", "display-5", H2_TAG),
                        getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                    ]),
                    getDivObject("bg-light shadow-sm mx-auto block", []),
                ]),
            ]),
        ])

        let test2 = getTextObject(1, "test", "text-center", 1)
    }
    return (
        result
    );
};

export default Product;
