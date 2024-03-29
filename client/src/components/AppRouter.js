import React, {useContext, useEffect, useState} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {adminRoutes, authRoutes, coreRoutes, publicRoutes} from "../routes";
import {ADMIN_LOGIN_ROUTE, ADMIN_ROUTE, MANAGER_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import NavBar from "./NavBars/NavBar";
import {check} from "../http/userApi";
import {fetchPages} from "../http/storeApi";
import {Spinner} from "react-bootstrap";
import {getBasicBlock} from "../utils/components_map";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {

    const [header, setHeader] = useState({});
    const [footer, setFooter] = useState({});
    const {user} = useContext(Context);
    const {admin} = useContext(Context);
    const location = useLocation();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (admin.isBaseInitFinished && loading) {
            fetchPages().then(data => {
                console.log(data)
                if (data !== "" && data.webpages !== null) {
                    // console.log('setting current pages')
                    let obtained_pages = data.webpages

                    console.log("obtained_pages")
                    console.log(obtained_pages)

                    // extracting header and footer from website obtained
                    let page_template = obtained_pages.find(page => page.url === "0")
                    // console.log("page_template")
                    // console.log(page_template)
                    let header1 = page_template.webpage_components.find(component => component.component_id === 0)
                    header1.nodes = JSON.parse(header1.nodes)
                    setHeader(header1);

                    let footer1 = page_template.webpage_components.find(component => component.component_id === 11)
                    footer1.nodes = JSON.parse(footer1.nodes)
                    setFooter(footer1);

                    for (let page of obtained_pages) {

                        if (page.url !== "0") {
                            for (let component of page.webpage_components) {
                                component.nodes = JSON.parse(component.nodes)
                            }
                            page.webpage_components = page.webpage_components.sort(function(a, b) {
                                return a.order - b.order;
                            })

                            page.webpage_components.unshift(header1)
                            page.webpage_components.push(footer1)
                        }

                    }

                    // console.log(header)

                    // console.log(obtained_pages)
                    admin.setCurrentPages(obtained_pages)
                    admin.setLayoutTypeId(data.layout_type_id)
                } else {
                    console.log('empty')
                }
            }).finally(() => setLoading(false))
        }
    },[admin.isBaseInitFinished])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    function getBlock(component_id, key, nodes) {
        return getBasicBlock(component_id, key, nodes);
    }

    // console.log(header)

    return (
        <Switch>
            {admin.isAuth && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {coreRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {user.isAuth && authRoutes.map(({path, component_id}) =>
                <Route key={path} path={path} exact >
                    {getBlock(header.component_id, header.key, header.nodes)}
                    {getBasicBlock(component_id, "", "")}
                    {getBlock(footer.component_id, footer.key, footer.nodes)}
                </Route>
            )}

            {
                admin.currentPages.length !== 0 ?

                    admin.currentPages.map( page =>

                        page.url !== "0" ?
                            <Route key={page.id} path={page.url} exact >

                                {
                                    page.webpage_components.map( ( { component_id, key, nodes } ) =>
                                        getBlock(component_id, key, nodes)
                                    )
                                }

                            </Route>

                            :

                            null

                    )

                    :

                    null
            }

            {
                location.pathname.includes("/admin") ?
                    admin.isAuth ?
                        localStorage.getItem('current_website_id') == null ?
                            <Redirect to={MANAGER_ROUTE}/>
                            :
                            <Redirect to={ADMIN_ROUTE}/>
                        :
                        <Redirect to={ADMIN_LOGIN_ROUTE}/>
                    :
                <>
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <div className="text-center">
                            <h1 className="display-1 fw-bold">404</h1>
                            <p className="fs-3"><span className="text-danger">Opps!</span> Page not found.</p>
                            <p className="lead">
                                The page you’re looking for doesn’t exist.
                            </p>
                        </div>
                    </div>
                </>
            }
        </Switch>
    );
});

export default AppRouter;
