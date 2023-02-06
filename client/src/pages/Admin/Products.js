import React, {useContext, useEffect, useState} from 'react';
import NavBar_admin from "../../components/NavBars/NavBar_admin";
import Sidebar_admin from "../../components/Admin/Sidebar_admin";
import {observer} from "mobx-react-lite";
import {Button, Container, Nav} from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateType from "../../components/modals/CreateType";
import CreateItem from "../../components/modals/CreateItem";
import "./admin.css"
import {Context} from "../../index";
import {fetchUsers, removeUserById} from "../../http/adminApi";
import {
    fetchAllItems,
    fetchBrands,
    fetchItems,
    fetchTypes,
    removeBrandById,
    removeItemById,
    removeTypeById
} from "../../http/itemApi";

const Products = observer(() => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)
    const [selectedTab, setSelectedTab] = useState(1)
    const {item} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const [reload, setReload] = useState(0)

    const [allItems, setAllItems] = useState([])

    const [currentType, setCurrentType] = useState({});
    const [currentBrand, setCurrentBrand] = useState({});
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        fetchAllItems().then(data => {
            console.log(data)
            data.sort(function(a, b) {
                return a.id - b.id;
            })
            setAllItems(data)
        }).finally(() => setLoading(false))
    }, [reload])

    const removeType = (type) => {
        removeTypeById(type.id).then(data => {
            setLoading(true)
            fetchTypes().then(data => {
                console.log(data)
                data.sort(function(a, b) {
                    return a.id - b.id;
                })
                item.setTypes(data)
            }).finally(() => setLoading(false))
        })
    }

    const removeBrand = (brand) => {
        removeBrandById(brand.id).then(data => {
            setLoading(true)
            fetchBrands().then(data => {
                console.log(data)
                data.sort(function(a, b) {
                    return a.id - b.id;
                })
                item.setBrands(data)
            }).finally(() => setLoading(false))
        })
    }

    const removeItem = (item) => {
        removeItemById(item.id).then(data => {
            setLoading(true)
            fetchAllItems().then(data => {
                console.log(data)
                setAllItems(data)
            }).finally(() => setLoading(false))
        })
    }

    return (
        <>
            <NavBar_admin />

            {
                !loading ?
                    <div className={'d-flex h-100'}>
                        <Sidebar_admin />

                        <div className={'w-100 p-3'}>

                            <Nav variant="tabs">
                                <Nav.Item>
                                    <div
                                        className={selectedTab === 1 ? 'nav-link active cursor-pointer' : 'nav-link cursor-pointer'}
                                        onClick={() => setSelectedTab(1)}
                                    >
                                        Types
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div
                                        className={selectedTab === 2 ? 'nav-link active cursor-pointer' : 'nav-link cursor-pointer'}
                                        onClick={() => setSelectedTab(2)}
                                    >
                                        Brands
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div
                                        className={selectedTab === 3 ? 'nav-link active cursor-pointer' : 'nav-link cursor-pointer'}
                                        onClick={() => setSelectedTab(3)}
                                    >
                                        Items
                                    </div>
                                </Nav.Item>
                            </Nav>

                            {
                                selectedTab === 1 ?

                                    <div className={'p-3'}>
                                        <Button variant={"outline-dark"} className="mt-3" onClick={() => { setCurrentType({}); setTypeVisible(true) }}>Add type</Button>
                                        <table className="table table-striped table-sm mt-3">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">name</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                item.types.map(type =>
                                                    <tr>
                                                        <td>{type.id}</td>
                                                        <td>{type.name}</td>
                                                        <td>
                                                            <Button variant={'warning'} className={'px-3'}
                                                                    onClick={() => { setCurrentType(type); setTypeVisible(true) } }
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button variant={'danger'} className={'ms-3'}
                                                                    onClick={() => { removeType(type); } }
                                                            >
                                                                Remove
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            </tbody>
                                        </table>
                                    </div>

                                    :
                                    ""
                            }

                            {
                                selectedTab === 2 ?
                                    <div className={'p-3'}>
                                        <Button variant={"outline-dark"} className="mt-3" onClick={() => { setCurrentBrand({}); setBrandVisible(true)} }>Add brand</Button>
                                        <table className="table table-striped table-sm mt-3">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">name</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                item.brands.map(brand =>
                                                    <tr>
                                                        <td>{brand.id}</td>
                                                        <td>{brand.name}</td>
                                                        <td>
                                                            <Button variant={'warning'} className={'px-3'}
                                                                    onClick={() => { setCurrentBrand(brand); setBrandVisible(true) } }
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button variant={'danger'} className={'ms-3'}
                                                                    onClick={() => { removeBrand(brand); } }
                                                            >
                                                                Remove
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    ""
                            }

                            {
                                selectedTab === 3?
                                    <div className={'p-3'}>
                                        <Button variant={"outline-dark"} className="mt-3" onClick={() => {setCurrentItem({}) ;setItemVisible(true)}}>Add item</Button>
                                        <table className="table table-striped table-sm mt-3">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">name</th>
                                                <th scope="col">type</th>
                                                <th scope="col">brand</th>
                                                <th scope="col">price</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                allItems.map(itemInstance =>
                                                    <tr>
                                                        <td>{itemInstance.id}</td>
                                                        <td>{itemInstance.name}</td>
                                                        <td>{item.types.find(type => {return type.id === itemInstance.typeId}).name}</td>
                                                        <td>{item.brands.find(brand => {return brand.id === itemInstance.brandId}).name}</td>
                                                        <td>{itemInstance.price}</td>
                                                        <td>
                                                            <Button variant={'warning'} className={'px-3'}
                                                                    onClick={() => { setCurrentItem(itemInstance); setItemVisible(true) } }
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button variant={'danger'} className={'ms-3'}
                                                                    onClick={() => { removeItem(itemInstance); } }
                                                            >
                                                                Remove
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    ""
                            }

                            {brandVisible ? <CreateBrand show={brandVisible} currentBrand={currentBrand} onHide={() => {setBrandVisible(false)}}/> : ""}
                            {typeVisible ? <CreateType show={typeVisible} currentType={currentType} onHide={() => {setTypeVisible(false)}} />: ""}
                            {itemVisible ? <CreateItem show={itemVisible} setReload={setReload} currentItem={currentItem} onHide={() => {setItemVisible(false)}} /> : ""}

                        </div>

                    </div>
                    :
                    ""
            }
        </>
    );
});

export default Products;
