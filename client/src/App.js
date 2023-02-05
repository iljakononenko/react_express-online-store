import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBars/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check, checkAdmin} from "./http/userApi";
import {Spinner} from "react-bootstrap";
import "./App.css";
import {fetchBrands, fetchItems, fetchTypes} from "./http/itemApi";

const App = observer(() => {

    const {item, user, admin} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems(null, null, 1, 3).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, item.limit).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType, item.selectedBrand])

    useEffect(() => {
        checkAdmin().then(data => {
            if (data != null) {
                admin.setAdmin(data)
                admin.setIsAuth(true)
            }
        }).finally(() => setLoading(false))
    },[])

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    },[])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
