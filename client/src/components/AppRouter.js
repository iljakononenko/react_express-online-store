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

const AppRouter = () => {

    const {user} = useContext(Context);
    const {admin} = useContext(Context);
    const location = useLocation();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPages().then(data => {
            if (data !== "" && data.pages !== null) {
                console.log('setting current pages')
                let obtained_pages = JSON.parse(data.pages)
                console.log(obtained_pages)
                admin.setCurrentPages(obtained_pages)
            } else {
                console.log('empty')
            }
        }).finally(() => setLoading(false))
    },[])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    function getBlock(component_id, key) {
        return getBasicBlock(component_id, key, {test: "First test"});
    }

    return (
        <Switch>
            {admin.isAuth && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {coreRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {
                admin.currentPages.length !== 0 ?

                    admin.currentPages.length === 1 ?
                        <Route key={admin.currentPages[0].pageId} path={"/"} exact >

                            {
                                admin.currentPages[0].components.map( ( { component_id, key } ) =>
                                    getBlock(component_id, key)
                                )
                            }

                        </Route>
                        :
                        admin.currentPages.map( page =>

                            <Route key={page.pageId} path={page.pageUrl} exact >

                                {
                                    page.components.map( ( { component_id, key } ) =>
                                        getBlock(component_id, key)
                                    )
                                }

                            </Route>
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
};

export default AppRouter;
