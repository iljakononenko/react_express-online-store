import {
    getAnchorObject,
    getButtonObject,
    getDivObject,
    getImgObject, getListItemObject,
    getListObject,
    getTextObject
} from "./elements_utils";
import {A_TAG, H1_TAG, H2_TAG, H3_TAG, H4_TAG, P_TAG, SPAN_TAG} from "./consts";
import * as uuid from "uuid";

const default_slider_img_src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185fa67ca59%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185fa67ca59%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

export const default_nodes = {
    0   : [{id: uuid.v4(), props: {text:"Prodsell"}}],
    1   : [
        getDivObject("", [
            getImgObject( "d-block w-100", default_slider_img_src, "First slide"),
            getDivObject("carousel-caption", [
                getTextObject( "First slide label", "", H3_TAG),
                getTextObject( "Nulla vitae elit libero, a pharetra augue mollis interdum.", "", P_TAG),
            ])
        ]),
        getDivObject("", [
            getImgObject( "d-block w-100", default_slider_img_src, "Second slide"),
            getDivObject("carousel-caption", [
                getTextObject( "Second slide label", "", H3_TAG),
                getTextObject( "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "", P_TAG),
            ])
        ]),
        getDivObject("", [
            getImgObject( "d-block w-100", default_slider_img_src, "Third slide"),
            getDivObject("carousel-caption", [
                getTextObject( "Third slide label", "", H3_TAG),
                getTextObject( "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", "", P_TAG),
            ])
        ]),
    ],
    3   : [
        getTextObject( "Authorization", "m-auto", H2_TAG),
        getTextObject( "No account?", "", SPAN_TAG),
        {id: uuid.v4(), props: {text: "Register!"}},
        {id: uuid.v4(), props: {text: "Log in"}}
    ],
    4   : [
        getTextObject( "Registration", "m-auto", H2_TAG),
        getTextObject( "Already have account?", "", SPAN_TAG),
        {id: uuid.v4(), props: {text: "Log in!"}},
        {id: uuid.v4(), props: {text: "Register"}}
    ],
    6   : [
        getDivObject("px-4 py-5 my-5 text-center", [
            getImgObject( "d-block mx-auto mb-4", "", ""),
            getTextObject( "Centered hero", "display-5 fw-bold", H1_TAG),
            getDivObject("col-lg-6 mx-auto", [
                getTextObject(
                    "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                    "lead mb-4", P_TAG),
                getDivObject("d-grid gap-2 d-sm-flex justify-content-sm-center", [
                    getButtonObject("btn btn-primary btn-lg px-4 gap-3", "Primary button", 0),
                    getButtonObject("btn btn-outline-secondary btn-lg px-4", "Secondary", 0)
                ])
            ])
        ]),
    ],
    7   : [
        getDivObject("container px-4 py-5", [
            getTextObject( "Columns with icons", "pb-2 border-bottom", H2_TAG),
            getDivObject("row g-4 py-5 row-cols-1 row-cols-lg-3", [
                getDivObject("feature col", [
                    getDivObject("feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3", [
                         getTextObject("", "bi", SPAN_TAG)
                    ]),
                    getTextObject("Featured title", "fs-2", H3_TAG),
                    getTextObject("Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
                        , "", P_TAG),
                    getAnchorObject("Call to action", "icon-link d-inline-flex align-items-center", 0, "#"),
                ]),
                getDivObject("feature col", [
                    getDivObject("feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3", [
                        getTextObject("", "bi", SPAN_TAG)
                    ]),
                    getTextObject("Featured title", "fs-2", H3_TAG),
                    getTextObject("Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
                        , "", P_TAG),
                    getAnchorObject("Call to action", "icon-link d-inline-flex align-items-center", 0, "#"),
                ]),
                getDivObject("feature col", [
                    getDivObject("feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3", [
                        getTextObject("", "bi", SPAN_TAG)
                    ]),
                    getTextObject("Featured title", "fs-2", H3_TAG),
                    getTextObject("Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
                        , "", P_TAG),
                    getAnchorObject("Call to action", "icon-link d-inline-flex align-items-center", 0, "#"),
                ]),
            ])
        ]),
    ],
    8   : [
        getDivObject("container py-4", [
            getDivObject("p-5 mb-4 bg-light rounded-3", [
                getDivObject("container-fluid py-5", [
                    getTextObject("Custom jumbotron", "display-5 fw-bold", H1_TAG),
                    getTextObject("Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.",
                        "col-md-8 fs-4", P_TAG),
                    getButtonObject("btn btn-primary btn-lg", "Example button", 0),
                ]),
            ]),
            getDivObject("row align-items-md-stretch", [
                getDivObject("col-md-6", [
                    getDivObject("h-100 p-5 text-bg-dark rounded-3", [
                        getTextObject("Change the background", "", H2_TAG),
                        getTextObject("Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.",
                            "", P_TAG),
                        getButtonObject("btn btn-outline-light", "Example button", 0)
                    ])
                ]),
                getDivObject("col-md-6", [
                    getDivObject("h-100 p-5 bg-light border rounded-3", [
                        getTextObject("Add borders", "", H2_TAG),
                        getTextObject("Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.",
                            "", P_TAG),
                        getButtonObject("btn btn-outline-secondary", "Example button", 0)
                    ])
                ]),
            ]),
        ]),
    ],
    9   : [
        getDivObject("", [
            getDivObject("row row-cols-1 row-cols-md-3 my-3 text-center", [
                getDivObject("col", [
                    getDivObject("card mb-4 rounded-3 shadow-sm", [
                        getDivObject("card-header py-3", [
                            getTextObject("Free", "my-0 fw-normal", H4_TAG)
                        ]),
                        getDivObject("card-body", [
                            getDivObject("d-flex justify-content-center align-items-center", [
                                getTextObject("$0", "card-title pricing-card-title", H1_TAG),
                                getTextObject("/mo", "text-muted fw-light ms-1", SPAN_TAG)
                            ]),
                            getListObject("list-unstyled mt-3 mb-4", [
                                getListItemObject("", "10 users included", 0),
                                getListItemObject("", "2 GB of storage", 0),
                                getListItemObject("", "Email support", 0),
                                getListItemObject("", "Help center access", 0),
                            ]),
                            getButtonObject("w-100 btn btn-lg btn-outline-primary", "Sign up for free", 0)
                        ])
                    ]),
                ]),
                getDivObject("col", [
                    getDivObject("card mb-4 rounded-3 shadow-sm", [
                        getDivObject("card-header py-3", [
                            getTextObject("Pro", "my-0 fw-normal", H4_TAG)
                        ]),
                        getDivObject("card-body", [
                            getDivObject("d-flex justify-content-center align-items-center", [
                                getTextObject("$15", "card-title pricing-card-title", H1_TAG),
                                getTextObject("/mo", "text-muted fw-light ms-1", SPAN_TAG)
                            ]),
                            getListObject("list-unstyled mt-3 mb-4", [
                                getListItemObject("", "20 users included", 0),
                                getListItemObject("", "10 GB of storage", 0),
                                getListItemObject("", "Priority email support", 0),
                                getListItemObject("", "Help center access", 0),
                            ]),
                            getButtonObject("w-100 btn btn-lg btn-primary", "Get started", 0)
                        ])
                    ]),
                ]),
                getDivObject("col", [
                    getDivObject("card mb-4 rounded-3 shadow-sm border-primary", [
                        getDivObject("card-header py-3 text-bg-primary border-primary", [
                            getTextObject("Enterprise", "my-0 fw-normal", H4_TAG)
                        ]),
                        getDivObject("card-body", [
                            getDivObject("d-flex justify-content-center align-items-center", [
                                getTextObject("$29", "card-title pricing-card-title", H1_TAG),
                                getTextObject("/mo", "text-muted fw-light ms-1", SPAN_TAG)
                            ]),
                            getListObject("list-unstyled mt-3 mb-4", [
                                getListItemObject("", "30 users included", 0),
                                getListItemObject("", "15 GB of storage", 0),
                                getListItemObject("", "Phone and email support", 0),
                                getListItemObject("", "Help center access", 0),
                            ]),
                            getButtonObject("w-100 btn btn-lg btn-primary", "Contact us", 0)
                        ])
                    ]),
                ]),
            ]),
        ])
    ],
    10  : getDivObject("", [
        getDivObject("position-relative p-3 p-md-5 m-md-3 text-center bg-light", [
            getDivObject("col-md-5 p-lg-5 mx-auto my-5", [
                getTextObject( "Punny headline", "display-4 fw-normal", H1_TAG),
                getTextObject( "And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.", "lead fw-normal", P_TAG),
                getAnchorObject( "Coming soon", "btn btn-outline-secondary", A_TAG, "#"),
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
                getDivObject("bg-dark shadow-sm mx-auto block", []),
            ]),
        ]),
        getDivObject("d-md-flex flex-md-equal w-100 my-md-3 ps-md-3", [
            getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-dark shadow-sm mx-auto block", []),
            ]),
            getDivObject("text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-light shadow-sm mx-auto block", []),
            ]),
        ]),
        getDivObject("d-md-flex flex-md-equal w-100 my-md-3 ps-md-3", [
            getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-body shadow-sm mx-auto block", []),
            ]),
            getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-body shadow-sm mx-auto block", []),
            ]),
        ]),
        getDivObject("d-md-flex flex-md-equal w-100 my-md-3 ps-md-3", [
            getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-body shadow-sm mx-auto block", []),
            ]),
            getDivObject("bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden flex-md-equal-child", [
                getDivObject("my-3 py-3", [
                    getTextObject( "Another headline", "display-5", H2_TAG),
                    getTextObject( "And an even wittier subheading.", "lead", P_TAG),
                ]),
                getDivObject("bg-body shadow-sm mx-auto block", []),
            ]),
        ]),
    ])

}
