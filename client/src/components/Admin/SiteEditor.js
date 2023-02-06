import React, {useEffect, useState} from 'react';
import "../../editor.css"
import {getBasicBlock} from "../../utils/components_map";
import {FaAngleLeft, FaPlus, FaRegTrashAlt} from 'react-icons/fa';
import NavBar_adminEditor from "../NavBars/NavBar_adminEditor";
import {createSite, editSite, fetchOneSite} from "../../http/adminApi";
import {AiOutlinePlus} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {shop_starting_elements} from "../../utils/starting_elements";
import AddBlock from "../modals/AddBlock";
const uuid = require('uuid')

const SiteEditor = () => {

    let test = shop_starting_elements;
    const {id} = useParams()

    const menu_item = {
        minWidth: "261px",
        padding: "8px 12px",
        marginBottom: "12px",
        textAlign: "start",
        color: "white",
        background: "#141a1b",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const [reload, setReload] = useState(0);

    const [newBlockModalOpen, setNewBlockModalOpen] = useState(false);

    const openNewBlockModal = () => {
        setNewBlockModalOpen(true)
    }

    const closeNewBlockModal = () => {
        setNewBlockModalOpen(false)
    }

    const submitBlock = (block_id) => {
        addBlock(block_id)
        closeNewBlockModal()
    }

    const [pages, setPages] = useState([]);

    const [isNewSite, setIsNewSite] = useState(false);

    useEffect(() => {
        fetchOneSite(id).then(data => {
            if ( data != null && data.pages != null ) {
                let obtained_pages = JSON.parse(data.pages)
                setPages(obtained_pages);
                console.log(obtained_pages);
            } else {
                setPages(test);
                setIsNewSite(true);
            }
        })
    }, [reload])

    const [editingPage, setEditingPage] = useState(null);
    const [isEditingPage, setIsEditingPage] = useState(true);

    function editPage(page_id) {
        setIsEditingPage(false);
        setEditingPage( pages.find( page =>  page.pageId === page_id ) );
    }

    function backToPages() {
        setIsEditingPage(true);
        setEditingPage(null);
    }

    function changePageName(name, pageId) {
        setPages( pages.map( page => {
            if (page.pageId === pageId) {
                return {...page, pageName: name}
            } else {
                return page
            }
        }))
    }

    function changeComponentName(name, componentKey) {
        setPages( pages.map( page => {
            if ( page.pageId === editingPage.pageId ) {
                return {...page, components: page.components.map( component => {
                    if (component.key === componentKey) {
                        return {...component, component_name: name}
                    } else {
                        return component
                    }
                } ) }
            } else {
                return page
            }
        }) )

        setEditingPage( prevState => {
            return {...prevState, components: prevState.components.map( component => {
                if (component.key === componentKey) {
                    return {...component, component_name: name};
                } else {
                    return component;
                }
            }) };
        } )
    }

    function addBlock(component_id) {
        let new_block = {key: uuid.v4(), component_id: component_id, component_name: "New Block"};
        setPages( pages.map( page => {
            if ( page.pageId === editingPage.pageId ) {
                return {...page, components: [...page.components, new_block] }
            } else {
                return page
            }
        }) )
        setEditingPage( prevState => {
            return {...prevState, components: [...prevState.components, new_block]};
        } )
    }

    function addPage() {
        let new_page = {pageId: uuid.v4(), pageName: "New page", components: []};
        setPages( prevState => [...prevState, new_page] )
    }

    function getBlock(component_id, key) {
        return getBasicBlock(component_id, key, {test: "First test"});
    }

    function removePage(pageId) {
        setPages( prevState => prevState.filter(page => page.pageId !== pageId ))
    }

    function removeBlock(blockId) {
        setPages( pages.map( page => {
            if ( page.pageId === editingPage.pageId ) {
                return {...page, components: page.components.filter( component => component.key !== blockId ) }
            } else {
                return page
            }
        }) )
        setEditingPage( prevState => {
            return {...prevState, components: prevState.components.filter( component => component.key !== blockId ) };
        } )
    }

    function saveChanges() {
        console.log(isNewSite)
        if (isNewSite) {
            saveNewSite();
        } else {
            let page_to_send = JSON.stringify(pages);
            editSite(id, page_to_send).then((data) => {
                console.log(data)
            });
        }

    }

    function saveNewSite() {
        let page_to_send = JSON.stringify(test);
        createSite(page_to_send).then((data) => {
            console.log(data)
        });
    }

    function resetChanges() {
        setReload(prevState => ++prevState)
    }

    return (
        <>
            <AddBlock show={newBlockModalOpen} onHide={closeNewBlockModal} submitBlock={submitBlock} />
            <NavBar_adminEditor saveChanges={saveChanges} resetChanges={resetChanges} />
            <div style={true ? {display: "flex", justifyContent: "end", minHeight: "100%"} : {}} >
                <div style={{ background: "#2e383e", padding: "10px 20px", minWidth: "300px" }}>
                    <div className="btn-group" style={{ display: "block", padding: "10px 0", textAlign: "center", marginBottom: "10px" }}>
                        <button type="button" className="btn btn-warning no-radius d-inline-flex align-items-center" onClick={
                            isEditingPage ?() => { addPage() } : () => { openNewBlockModal() }
                        }>
                            <span>Add {isEditingPage ? "Page" : "Block"} </span><span style={{ paddingLeft: "6px" }}><AiOutlinePlus style={{ display: "block" }} /></span>
                        </button>
                    </div>
                    {
                        isEditingPage ?
                            <div>
                                { pages.map(({pageId, pageName, component}) =>
                                    <div key={pageId} style={menu_item} onClick={() => editPage(pageId) } >
                                        <input style={{ background: "#374143", border: "1px solid #374143", color: "#fff" }}
                                               type="text" value={pageName}
                                               onChange={ e => changePageName(e.target.value, pageId) }
                                               onClick={ e => {e.stopPropagation()} }
                                        />
                                        <span style={{ padding: "4px" }}
                                            onClick={e => {e.stopPropagation(); removePage(pageId) } }
                                        >
                                            <FaRegTrashAlt style={{ display: "block" }} />
                                        </span>
                                    </div>
                                )}
                            </div>
                            :
                            <div>
                                <span className="text-white px-2 mb-3 d-inline-block cursor-pointer" onClick={() => backToPages()}>
                                    <FaAngleLeft />Back to pages
                                </span>
                                { editingPage.components.map(({key, component_id, component_name}) =>
                                    <div key={key} style={menu_item} >
                                        <input style={{ background: "#374143", border: "1px solid #374143", color: "#fff" }}
                                               type="text" value={component_name}
                                               onChange={ e => changeComponentName(e.target.value, key) }
                                               onClick={ e => {e.stopPropagation()} }
                                        />
                                        <span style={{ padding: "4px" }}
                                            onClick={e => { e.stopPropagation(); removeBlock(key) } }
                                        >
                                            <FaRegTrashAlt style={{ display: "block" }} />
                                        </span>
                                    </div>
                                )}
                            </div>
                    }
                </div>
                <div style={true ? {width: "100%", padding: "16px 30px"} : {}}>
                    <div style={true ? {overflowX: "hidden", overflowY: "auto", maxHeight: "90vh" } : {}}>
                        {
                            isEditingPage && true ?
                                <h1>Select page to edit</h1>
                                :
                                editingPage.components.map(({component_id, key}) =>
                                    getBlock(component_id, key)
                                )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default SiteEditor;
