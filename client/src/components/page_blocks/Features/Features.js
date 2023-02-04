import React from 'react';

const Features = (props) => {

    switch (props.variant) {
        // Columns with icons
        case 1:
            return (
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 border-bottom">Columns with icons</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#collection"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#people-circle"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#toggles2"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )
        // Hanging icons
        case 2:
            return (
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 border-bottom">Hanging icons</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#toggles2"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="fs-2">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                    another sentence and probably just keep going until we run out of words.</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#cpu-fill"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="fs-2">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                    another sentence and probably just keep going until we run out of words.</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#tools"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="fs-2">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                    another sentence and probably just keep going until we run out of words.</p>
                                <a href="#" className="btn btn-primary">
                                    Primary button
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // Custom cards
        case 3:
            return (
                <div className="container px-4 py-5" id="custom-cards">
                    <h2 className="pb-2 border-bottom">Custom cards</h2>

                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                                 style="background-image: url('unsplash-photo-1.jpg');">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32"
                                                 height="32" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#geo-fill"/>
                                            </svg>
                                            <small>Earth</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#calendar3"/>
                                            </svg>
                                            <small>3d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                                 style="background-image: url('unsplash-photo-2.jpg');">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps
                                        to multiple lines</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32"
                                                 height="32" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#geo-fill"/>
                                            </svg>
                                            <small>Pakistan</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#calendar3"/>
                                            </svg>
                                            <small>4d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                                 style="background-image: url('unsplash-photo-3.jpg');">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs
                                        here</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32"
                                                 height="32" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#geo-fill"/>
                                            </svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em">
                                                <use xlink:href="#calendar3"/>
                                            </svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // icon grid
        case 4:
            return (
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="pb-2 border-bottom">Icon grid</h2>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#bootstrap"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#cpu-fill"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#calendar3"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#home"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#speedometer2"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#toggles2"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#geo-fill"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                                <use xlink:href="#tools"/>
                            </svg>
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                                <p>Paragraph of text beneath the heading to explain the heading.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // Features with title
        case 5:
            return (
                <div className="container px-4 py-5">
                    <h2 className="pb-2 border-bottom">Features with title</h2>

                    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                        <div className="d-flex flex-column align-items-start gap-2">
                            <h3 className="fw-bold">Left-aligned title explaining these awesome features</h3>
                            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.
                                We'll add onto it with another sentence and probably just keep going until we run out of
                                words.</p>
                            <a href="#" className="btn btn-primary btn-lg">Primary button</a>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="d-flex flex-column gap-2">
                                <div
                                    className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                        <use xlink:href="#collection"/>
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0">Featured title</h4>
                                <p className="text-muted">Paragraph of text beneath the heading to explain the
                                    heading.</p>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <div
                                    className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                        <use xlink:href="#gear-fill"/>
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0">Featured title</h4>
                                <p className="text-muted">Paragraph of text beneath the heading to explain the
                                    heading.</p>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <div
                                    className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                        <use xlink:href="#speedometer"/>
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0">Featured title</h4>
                                <p className="text-muted">Paragraph of text beneath the heading to explain the
                                    heading.</p>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <div
                                    className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <svg className="bi" width="1em" height="1em">
                                        <use xlink:href="#table"/>
                                    </svg>
                                </div>
                                <h4 className="fw-semibold mb-0">Featured title</h4>
                                <p className="text-muted">Paragraph of text beneath the heading to explain the
                                    heading.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // three cards
        case 6:
            return (
                <div className="d-flex text-center">
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>

                        <h2 className="fw-normal">Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel.
                            This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <!-- /.col-lg-4 -->
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>

                        <h2 className="fw-normal">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the
                            second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <!-- /.col-lg-4 -->
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>

                        <h2 className="fw-normal">Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <!-- /.col-lg-4 -->
                </div><!-- /.row -->
            )
        case 7:
            return (
                <>
                    <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span
                                    className="text-muted">It’ll blow your mind.</span></h2>
                                <p className="lead">Some great placeholder content for the first featurette here.
                                    Imagine some exciting prose here.</p>
                            </div>
                            <div className="col-md-5">
                                <svg
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                                    aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                    focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"/>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>

                            </div>
                        </div>

                        <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span
                                    className="text-muted">See for yourself.</span></h2>
                                <p className="lead">Another featurette? Of course. More placeholder content here to
                                    give you an idea of how this layout would work with some actual real-world
                                    content in place.</p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <svg
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                                    aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                    focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"/>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>

                            </div>
                        </div>

                        <hr className="featurette-divider" />

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span
                                    className="text-muted">Checkmate.</span></h2>
                                <p className="lead">And yes, this is the last block of representative
                                    placeholder content. Again, not really intended to be actually read, simply
                                    here to give you a better view of what this would look like with some actual
                                    content. Your content.</p>
                            </div>
                            <div className="col-md-5">
                                <svg
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                                    aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                    focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"/>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>

                            </div>
                        </div>

                        <hr className="featurette-divider" />
                </>
            )
        default:
            return (
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 border-bottom">Columns with icons</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#collection"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#people-circle"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#toggles2"/>
                                </svg>
                            </div>
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                Call to action
                                <svg className="bi" width="1em" height="1em">
                                    <use xlink:href="#chevron-right"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )
    }
};

export default Features;
