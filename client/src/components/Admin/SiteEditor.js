import React, {useEffect, useState} from 'react';
import "../../editor.css"
import {getBasicBlock, renderCoreComponent, getDivObject, getTextObject} from "../../utils/components_map";
import {FaAngleLeft, FaPlus, FaRegTrashAlt} from 'react-icons/fa';
import NavBar_adminEditor from "../NavBars/NavBar_adminEditor";
import {createSite, editSite, fetchOneSite} from "../../http/adminApi";
import {AiOutlinePlus} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {shop_starting_elements} from "../../utils/starting_elements";
import AddBlock from "../modals/AddBlock";
import {Toast} from "react-bootstrap";
import {H1_TAG, H2_TAG, P_TAG} from "../../utils/consts";
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
    const [operationSuccessToast, setOperationSuccessToast] = useState(false);
    const [editingElement, setEditingElement] = useState({});
    const [editingElementText, setEditingElementText] = useState("");
    const [editingTextSelected, setEditingTextSelected] = useState(false)

    const [test2, setTest2] = useState({})
    const [coreComponent, setCoreComponent] = useState(<></>)

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
            if ( data != null && data.webpages != null ) {
                console.log(data.webpages.length)
                console.log(data.webpages)
                let obtained_pages = data.webpages
                for (let page of obtained_pages) {
                    page.components = JSON.parse(page.components)
                }
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
        setEditingPage( pages.find( page =>  page.id === page_id ) );
    }

    function backToPages() {
        setIsEditingPage(true);
        setEditingPage(null);
    }

    function changePageName(name, id) {
        setPages( pages.map( page => {
            if (page.id === id) {
                return {...page, name: name}
            } else {
                return page
            }
        }))
    }

    function changePageUrl(name) {
        setPages( pages.map(page => {
            if (page.id === editingPage.id) {
                return {...page, url: name}
            } else {
                return page
            }
        }) )

        setEditingPage(prevState => {return {...prevState, url: name}})
    }

    function changeComponentName(name, componentKey) {
        setPages( pages.map( page => {
            if ( page.id === editingPage.id ) {
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
            if ( page.id === editingPage.id ) {
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
        let new_page = {id: uuid.v4(), name: "New page", url: "/new",components: [{key: uuid.v4(), component_id: 0, component_name: "Header"}], tag: "new", serviceWebSiteId: id};
        setPages( prevState => [...prevState, new_page] )
    }

    function getBlock(component_id, key) {
        return getBasicBlock(component_id, key);
    }

    function removePage(id) {
        setPages( prevState => prevState.filter(page => page.id !== id ))
    }

    function removeBlock(blockId) {
        setPages( pages.map( page => {
            if ( page.id === editingPage.id ) {
                return {...page, components: page.components.filter( component => component.key !== blockId ) }
            } else {
                return page
            }
        }) )
        setEditingPage( prevState => {
            return {...prevState, components: prevState.components.filter( component => component.key !== blockId ) };
        } )
    }

    function check() {
        console.log(pages)
    }

    function saveChanges() {
        console.log(isNewSite)
        if (isNewSite) {
            let page_to_send = JSON.stringify(test);
            createSite(page_to_send).then((data) => {
                console.log(data)
                setOperationSuccessToast(true)
            });
        } else {
            editSite(id, pages).then((data) => {
                console.log(data)
                setOperationSuccessToast(true)
            });
        }

    }

    function resetChanges() {
        setReload(prevState => ++prevState)
    }

    useEffect(() => {
        let test123 = getDivObject("", [
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
        let test333 = renderCoreComponent(test123.key, test123.component_id, test123.props );
        setTest2(test123)
        setCoreComponent(test333)
    }, [])

    // let test3 = JSON.stringify(test2)
    // console.log(test3)
    // test3 = test3.replaceAll('Apple', "Samsung")
    // test2 = JSON.parse(test3)

    const editElementText = (e) => {
        setEditingElement(prevState => {
            // console.log(prevState.id)
            // console.log(test2)
            let test4 = JSON.stringify(test2)
            // console.log(test4)
            let regex = new RegExp(`"${prevState.id}","props":{"text":"(?:[^"\\\\]|\\\\.)*"`, "g")
            // console.log(regex)
            // console.log(regex.test(test4))
            let text = e.target.value
            // console.log(text)
            text = text.replaceAll('\\','\\\\')
            text = text.replaceAll('"','\\"')

            test4 = test4.replaceAll(regex, `"${prevState.id}","props":{"text":"${text}"`)
            setTest2(JSON.parse(test4))
            let final_object = JSON.parse(test4);
            setCoreComponent(renderCoreComponent(final_object.key, final_object.component_id, final_object.props))
            return {...prevState, text: e.target.value}
        })
    }

    return (
        <>
            <AddBlock show={newBlockModalOpen} onHide={closeNewBlockModal} submitBlock={submitBlock} />
            <NavBar_adminEditor saveChanges={saveChanges} resetChanges={resetChanges} />
            <div style={true ? {display: "flex", justifyContent: "end", flex: "1"} : {}} >
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
                                { pages.map(({id, name, component}) =>
                                    <div key={id} style={menu_item} onClick={() => editPage(id) } >
                                        <input style={{ background: "#374143", border: "1px solid #374143", color: "#fff" }}
                                               type="text" value={name}
                                               onChange={ e => changePageName(e.target.value, id) }
                                               onClick={ e => {e.stopPropagation()} }
                                        />
                                        <span style={{ padding: "4px" }}
                                            onClick={e => {e.stopPropagation(); removePage(id) } }
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
                                <div className={'my-3'}>
                                    <span className={'text-white me-2'}>Page url:</span>
                                    <input style={{ background: "#374143", border: "3px solid rgb(20, 26, 27)", color: "#fff", padding: '2px', paddingLeft: "12px", width: "180px" }}
                                           type="text" value={editingPage.url}
                                           onChange={ e => changePageUrl(e.target.value) }
                                           onClick={ e => {e.stopPropagation()} }
                                    />
                                </div>
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
                                {
                                    editingTextSelected ?
                                        <div style={menu_item} >
                                            <input style={{ background: "#374143", border: "1px solid #374143", color: "#fff" }}
                                                   type="text" value={editingElement.text}
                                                   onChange={ e => editElementText(e)  }
                                                   onClick={ e => {e.stopPropagation()} }
                                            />
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                    }
                </div>
                <div style={true ? {width: "100%", padding: "16px 30px"} : {}}>
                    <div style={true ? {overflowX: "hidden", overflowY: "auto", maxHeight: "90vh" } : {}}>
                        <div className={'editing-window'} onClick={(e) => {
                                if (e.target.dataset.id != null) {
                                    setEditingTextSelected(true)
                                    setEditingElement({id: e.target.dataset.id, text: e.target.innerText})
                                }
                            }}
                        >
                            {/*{ Object.keys(coreComponent).length !== 0 ? coreComponent : "test" }*/}
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

            </div>
            <Toast onClose={() => setOperationSuccessToast(false)} show={operationSuccessToast}
                   delay={2500} autohide
                style={{ position: 'absolute', bottom: "0", right: "3%" }}
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">System</strong>
                    {/*<small>11 mins ago</small>*/}
                </Toast.Header>
                <Toast.Body>Changes are saved</Toast.Body>
            </Toast>
        </>
    );
};

export default SiteEditor;
