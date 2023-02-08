import React from 'react';
import {renderCoreComponent} from "../../../utils/components_map";

const Hero = ({props}) => {

    console.log(props)

    let result = renderCoreComponent(props[0].id, props[0].component_id, props[0].props)

    return result;

    switch (props.variant) {
        // Centered Hero
        case 1:
            return (
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="" alt="" width="72"
                         height="57" />
                    <h1 className="display-5 fw-bold">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>
            )
        // Centered screenshot
        case 2:
            return (
                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold">Centered screenshot</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                            and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                            plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button
                            </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                    <div className="overflow-hidden" style="max-height: 30vh;">
                        <div className="container px-5">
                            <img src="../../../assets/Hero/bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4"
                                 alt="Example image" width="700" height="500" loading="lazy" />
                        </div>
                    </div>
                </div>
            )
        // Responsive left-aligned hero with image
        case 3:
            return (
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="../../../assets/Hero/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid"
                                 alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with
                                Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass
                                variables and mixins, responsive grid system, extensive prebuilt components, and
                                powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // Border hero with cropped image and shadows
        case 4:
            return (
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with
                                Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass
                                variables and mixins, responsive grid system, extensive prebuilt components, and
                                powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary
                                </button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="" alt="" width="72"
                         height="57" />
                    <h1 className="display-5 fw-bold">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>
            )
    }
};

export default Hero;
