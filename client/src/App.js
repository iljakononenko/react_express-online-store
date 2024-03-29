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
import {initBase, isBaseInit} from "./http/adminApi";

const App = observer(() => {

    const {item, user, admin} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("")
        isBaseInit().then(({data}) => {
            if (!data.isInit) {
                initBase().then(data => {
                    console.log(data)
                    admin.setIsBaseInitFinished(true)
                })
            } else {
                admin.setIsBaseInitFinished(true)
            }
        })
    }, [])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems(null, null, 1, 5).then(data => {
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
        if (localStorage.getItem('admin_token') != null) {
            checkAdmin().then(data => {
                if (data != null) {
                    admin.setAdmin(data)
                    admin.setIsAuth(true)
                }
            }).finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    },[])

    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            check().then(data => {
                if (data != null) {
                    user.setUser(data)
                    user.setIsAuth(true)
                }
            }).finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
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
