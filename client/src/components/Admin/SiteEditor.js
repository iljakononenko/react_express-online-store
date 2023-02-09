import React, {useEffect, useState} from 'react';
import "../../editor.css"
import {
    getBasicBlock,
    getDefaultNodesForBasicBlocks,
    renderCoreComponent,
    sortComponents
} from "../../utils/components_map";
import {getDivObject, getTextObject} from "../../utils/elements_utils";
import {FaAlignCenter, FaAlignLeft, FaAlignRight, FaAngleLeft, FaPlus, FaRegTrashAlt} from 'react-icons/fa';
import NavBar_adminEditor from "../NavBars/NavBar_adminEditor";
import {createSite, editSite, fetchOneSite, getGalleryFiles, submitNewFile} from "../../http/adminApi";
import {AiOutlinePlus} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {shop_starting_elements, single_page_starting_elements} from "../../utils/starting_elements";
import AddBlock from "../modals/AddBlock";
import {DropdownButton, Dropdown, Toast, Badge} from "react-bootstrap";
import GalleryModal from "../modals/GalleryModal";
const uuid = require('uuid')

const SiteEditor = () => {

    const [header, setHeader] = useState({})
    const [footer, setFooter] = useState({})
    let test = single_page_starting_elements;
    const {id} = useParams()
    const [file, setFile] = useState(null)

    let list_of_text_alignment_classes = [
        "text-start",
        "text-center",
        "text-end"
    ]

    let list_of_colors = [
        'default',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]

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

    const textarea_style = { background: "#374143", border: "1px solid #374143", color: "#fff", width: "100%" }

    const chooseImgFromGallery = (img_name) => {
        if (img_name != null && img_name !== "") {

            if (editingImgSelected) {
                let components_stringified = JSON.stringify(editingPage)

                // console.log(components_stringified)

                let regex = new RegExp(`"${editingElement.id}","props":{("\\w+":"(?:[^"\\\\]|\\\\.)*",)*"src":"(?:[^"\\\\]|\\\\.)*"`, "g")
                // console.log(regex)
                let new_src = process.env.REACT_APP_URL_API + "/gallery/" + img_name

                components_stringified = components_stringified.replaceAll(regex, `"${editingElement.id}","props":{$1"src":"${new_src}"`)

                // console.log(components_stringified)

                let page_updated = JSON.parse(components_stringified)

                setEditingPage(page_updated)
                setPages( pages.map( page => {
                    if ( page.id === editingPage.id ) {
                        return page_updated
                    } else {
                        return page
                    }
                }) )
            }

        }
        closeGalleryModal()
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const submitFile = () => {
        const formData = new FormData();
        formData.append('img', file)
        submitNewFile(formData).then(data => {
            setFile(null)
            setGalleryFiles(data.files)
            setOperationSuccessToast(true)
        })
        // send file and get response
    }

    const [reload, setReload] = useState(0);

    const [newBlockModalOpen, setNewBlockModalOpen] = useState(false);
    const [operationSuccessToast, setOperationSuccessToast] = useState(false);
    const [previousEditingElement, setPreviousEditingElement] = useState({});
    const [editingElement, setEditingElement] = useState({});
    const [editingTextSelected, setEditingTextSelected] = useState(false)
    const [editingImgSelected, setEditingImgSelected] = useState(false)
    const [editingBlockSelected, setEditingBlockSelected] = useState(false)
    const [galleryModalOpen, setGalleryModalOpen] = useState(false)
    const [galleryFiles, setGalleryFiles] = useState([])

    const editingElementGetTextColor = () => {
        for (let color of list_of_colors) {
            if (editingElementHasClassName("text-" + color)) {
                return color
            }
        }
        return "default"
    }

    const editingElementGetBackgrounColor = () => {
        for (let color of list_of_colors) {
            if (editingElementHasClassName("bg-" + color)) {
                return color
            }
        }
        return "default"
    }

    const editingElementHasClassName = (className) => {
        return editingElement.className.includes(className);
    }

    const editTextColorToEditingElement = (color) => {
        let array = [];
        for (let color of list_of_colors) {
            array.push("text-" + color)
        }
        let className = color === "default" ? "" : "text-" + color;
        editElementClassNames(array, className)
    }

    const editBackgroundColorToEditingElement = (color) => {
        let array = [];
        for (let color of list_of_colors) {
            array.push("bg-" + color)
        }
        let className = color === "default" ? "" : "bg-" + color;
        editElementClassNames(array, className)
    }

    const openNewBlockModal = () => {
        setNewBlockModalOpen(true)
    }

    const closeNewBlockModal = () => {
        setNewBlockModalOpen(false)
    }

    const openGalleryModal = () => {
        setGalleryModalOpen(true)
    }

    const closeGalleryModal = () => {
        setGalleryModalOpen(false)
    }

    const submitBlock = (block_id) => {
        addBlock(block_id)
        closeNewBlockModal()
    }

    const [pages, setPages] = useState([]);

    const [isNewSite, setIsNewSite] = useState(false);

    useEffect(() => {

        // console.log('Loading data')

        getGalleryFiles().then(data => {
            setGalleryFiles(data.files)
        })

        fetchOneSite(id).then(data => {
            if ( data != null && data.webpages != null ) {

                let obtained_pages = data.webpages

                // extracting header and footer from website obtained
                let page_template = obtained_pages.find(page => page.url === "0");
                let header1 = page_template.webpage_components.find(component => component.component_id === 0);
                let footer1 = page_template.webpage_components.find(component => component.component_id === 11);
                header1.nodes = JSON.parse(header1.nodes)
                footer1.nodes = JSON.parse(footer1.nodes)

                setHeader(header1)
                setFooter(footer1)

                for (let page of obtained_pages) {

                    if (page.url !== "0") {
                        for (let component of page.webpage_components) {
                            component.nodes = JSON.parse(component.nodes)
                        }
                        page.webpage_components = sortComponents(page.webpage_components)

                        page.webpage_components.unshift(header1)
                        page.webpage_components.push(footer1)
                    }

                }

                obtained_pages = obtained_pages.sort(function(a, b) {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                })

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
        setEditingTextSelected(false)
        setEditingImgSelected(false)
        setEditingBlockSelected(false)
        setEditingElement({})
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
                return {...page, webpage_components: page.webpage_components.map( component => {
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
            return {...prevState, webpage_components: prevState.webpage_components.map( component => {
                if (component.key === componentKey) {
                    return {...component, component_name: name};
                } else {
                    return component;
                }
            }) };
        } )
    }

    function addBlock(component_id) {
        let new_block = {key: uuid.v4(), component_id: component_id, component_name: "New Block", order: editingPage.webpage_components.length + 1, nodes: getDefaultNodesForBasicBlocks(component_id), tag: "new"};
        setPages( pages.map( page => {
            if ( page.id === editingPage.id ) {
                let new_components = [...page.webpage_components, new_block];
                new_components = sortComponents(new_components);
                return {...page,  webpage_components: new_components}
            } else {
                return page
            }
        }) )
        setEditingPage( prevState => {
            let new_components = [...prevState.webpage_components, new_block];
            new_components = sortComponents(new_components);
            return {...prevState, webpage_components: new_components };
        } )
    }

    function addPage() {
        let new_page = {id: uuid.v4(), name: "New page", url: "/new", webpage_components: [], tag: "new", serviceWebSiteId: id};
        new_page.webpage_components.push(header)
        new_page.webpage_components.push(footer)
        new_page.webpage_components = sortComponents(new_page.webpage_components)
        setPages( prevState => [...prevState, new_page] )
    }

    function getBlock(component_id, key, nodes) {
        return getBasicBlock(component_id, key, nodes);
    }

    function removePage(id) {
        setPages( prevState => {

            let page_to_remove = prevState.find( page => page.id === id )
            let newState = prevState.filter(page => page.id !== id )

            if (page_to_remove.tag === "new") {
                return newState
            } else {
                page_to_remove.tag = "delete";
                return [...newState, page_to_remove]
            }
        })
    }

    function removeBlock(blockId) {
        setPages( pages.map( page => {
            if ( page.id === editingPage.id ) {

                let component_to_remove = page.webpage_components.find( component => component.key === blockId );
                let page_components = page.webpage_components.filter( component => component.key !== blockId );

                if (component_to_remove.tag === "new") {
                    return {...page, webpage_components: page_components }
                } else {
                    component_to_remove.tag = "delete"
                    return {...page, webpage_components: [...page_components, component_to_remove] }
                }
            } else {
                return page
            }
        }) )
        setEditingPage( prevState => {

            let component_to_remove = prevState.webpage_components.find( component => component.key === blockId );
            let page_components = prevState.webpage_components.filter( component => component.key !== blockId );

            if (component_to_remove.tag === "new") {
                return {...prevState, webpage_components: page_components};
            } else {
                component_to_remove.tag = "delete"
                return {...prevState, webpage_components: [...page_components, component_to_remove] };
            }
        } )
    }

    function saveChanges() {
        if (isNewSite) {
            let page_to_send = JSON.stringify(test);
            createSite(page_to_send).then((data) => {
                console.log(data)
                setOperationSuccessToast(true)
            });
        } else {
            let pages_to_submit =  JSON.parse(JSON.stringify(pages));
            pages_to_submit = pages_to_submit.map(page => {
                if (page.url === "0") {
                    return page;
                } else {
                    page.webpage_components = page.webpage_components.filter(component => component.component_id !== 0 && component.component_id !== 11);
                    return page
                }
            })

            // console.log(pages_to_submit)

            editSite(id, pages_to_submit).then((data) => {
                console.log(data)
                setOperationSuccessToast(true)
            });
        }

    }

    function resetChanges() {
        backToPages()
        setReload(prevState => ++prevState)
    }

    const editElementText = (e) => {

        setEditingElement(prevState => {

            let components_stringified = JSON.stringify(editingPage)

            let regex = new RegExp(`"${prevState.id}","props":{"text":"(?:[^"\\\\]|\\\\.)*"`, "g")
            let text = e.target.value
            text = text.replaceAll('\\','\\\\')
            text = text.replaceAll('"','\\"')

            components_stringified = components_stringified.replaceAll(regex, `"${prevState.id}","props":{"text":"${text}"`)

            let page_updated = JSON.parse(components_stringified)

            setEditingPage(page_updated)
            setPages( pages.map( page => {
                if (page.url === "0") {
                    return {...page, webpage_components: [
                        page_updated.webpage_components.find(component => component.component_id === 0),
                        page_updated.webpage_components.find(component => component.component_id === 11)
                    ]}
                }
                if ( page.id === editingPage.id ) {
                    return page_updated
                } else {
                    return page
                }
            }) )

            // let final_object = JSON.parse(components_stringified);
            // setCoreComponent(renderCoreComponent(final_object.key, final_object.component_id, final_object.props))

            return {...prevState, text: e.target.value}
        })
    }

    const editElementClassNames = (list_of_classes, classNameAdded) => {

        let components_stringified = JSON.stringify(editingPage)

        console.log(components_stringified)

        let regex = new RegExp(`"${editingElement.id}","props":{("\\w+":"(?:[^"\\\\]|\\\\.)*",)*"className":"([a-zA-Z0-9- ]*)"`, "g")
        // let text = e.target.value
        console.log(regex)
        let regex_result = regex.exec(components_stringified);
        console.log(regex_result)
        let previousClasses = regex_result["2"]
        let newClassNames;

        console.log(previousClasses)
        for (let className of list_of_classes) {
            previousClasses = previousClasses.replaceAll(className, "");
        }

        newClassNames = previousClasses + " " + classNameAdded

        components_stringified = components_stringified.replaceAll(regex, `"${editingElement.id}","props":{$1"className":"${newClassNames}"`)

        console.log(components_stringified)

        let page_updated = JSON.parse(components_stringified)

        setEditingPage(page_updated)
        setPages( pages.map( page => {
            if ( page.id === editingPage.id ) {
                return page_updated
            } else {
                return page
            }
        }) )

    }

    const editTextColor = (text_color) => {



    }

    return (
        <>
            <AddBlock show={newBlockModalOpen} onHide={closeNewBlockModal} submitBlock={submitBlock} />
            <GalleryModal show={galleryModalOpen} onHide={closeGalleryModal} images={galleryFiles} submitImage={chooseImgFromGallery} />
            <NavBar_adminEditor saveChanges={saveChanges} resetChanges={resetChanges} />
            <div style={{display: "flex", justifyContent: "end", flex: "1"}} >
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
                                { pages.map(({id, name, tag, url}) =>
                                    (tag != null && tag === "delete") || url === "0" ?
                                        ""
                                        :
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
                                    {editingPage.url !== "0" && <>
                                    <span className={'text-white me-2'}>Page url:</span>
                                     <input style={{ background: "#374143", border: "3px solid rgb(20, 26, 27)", color: "#fff", padding: '2px', paddingLeft: "12px", width: "180px" }}
                                           type="text" value={editingPage.url}
                                           onChange={ e => changePageUrl(e.target.value) }
                                           onClick={ e => {e.stopPropagation()} }
                                    />
                                    </>}
                                </div>
                                { editingPage.webpage_components.map(({key, component_id, component_name, tag}) =>
                                    (tag != null && tag === "delete") || (editingPage.url !== "0" && (component_id === 0 || component_id === 11)) ?
                                        ""
                                        :
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
                                    editingTextSelected &&
                                        <>
                                            <p className={'text-white'}>Text:</p>
                                            <div style={menu_item} >
                                                <textarea className={'form-control'}
                                                          style={ editingElement.text.length > 40 ? {...textarea_style, height: "250px"} :textarea_style }
                                                        value={editingElement.text}
                                                       onChange={ e => editElementText(e)  }
                                                       onClick={ e => {e.stopPropagation()} }
                                                />
                                            </div>
                                        </>
                                }
                                {
                                    (editingTextSelected ||  editingBlockSelected) &&
                                    <>
                                        <div className={'mb-3'}>
                                            <p className={'text-white'}>Align content:</p>
                                            <div className={'d-flex justify-content-around'}>
                                                <FaAlignLeft
                                                    className={'cursor-pointer'}
                                                    style={{ width: "40px", height: "40px", color: "white" }}
                                                    onClick={() => editElementClassNames(list_of_text_alignment_classes,"text-start")}
                                                />
                                                <FaAlignCenter
                                                    className={'cursor-pointer'}
                                                    style={{ width: "40px", height: "40px", color: "white" }}
                                                    onClick={() => editElementClassNames(list_of_text_alignment_classes, "text-center")}
                                                />
                                                <FaAlignRight
                                                    className={'cursor-pointer'}
                                                    style={{ width: "40px", height: "40px", color: "white" }}
                                                    onClick={() => editElementClassNames(list_of_text_alignment_classes, "text-end")}
                                                />
                                            </div>
                                        </div>
                                        <div className={'mb-3'}>
                                            <p className={'text-white'}>Color:</p>
                                            <DropdownButton
                                                variant={"info"}
                                                drop={"end"}
                                                title={editingElementGetTextColor()}
                                            >
                                                {list_of_colors.map(color =>
                                                    <Dropdown.Item
                                                        onClick={() => {editTextColorToEditingElement(color)}}
                                                    >
                                                        {
                                                            color === "default" ?
                                                                <p className={'mb-0'}>default</p>
                                                                :
                                                                <Badge bg={color} style={{width: "10px", height: "18px", border: "1px solid lightgray"}} > </Badge>
                                                        }
                                                    </Dropdown.Item>
                                                )}
                                            </DropdownButton>
                                        </div>
                                        <div className={'mb-3'}>
                                            <p className={'text-white'}>Background color:</p>
                                            <Dropdown
                                                drop={"end"}
                                            >
                                                <Dropdown.Toggle
                                                    variant={"info"}
                                                >
                                                    {editingElementGetBackgrounColor()}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {list_of_colors.map(color =>
                                                        <Dropdown.Item
                                                            onClick={() => {editBackgroundColorToEditingElement(color)}}
                                                        >
                                                            {color === "default" ?
                                                                <p className={'mb-0'}>default</p>
                                                                :
                                                                <Badge bg={color} style={{width: "10px", height: "18px", border: "1px solid lightgray"}} > </Badge>
                                                            }
                                                        </Dropdown.Item>
                                                    )}
                                                </Dropdown.Menu>

                                            </Dropdown>
                                        </div>
                                    </>
                                }
                                {
                                    editingImgSelected &&
                                    <>
                                        <p className={'text-white'}>Gallery:</p>
                                        <div onClick={openGalleryModal} className={'position-relative'}>
                                            <div className={'d-flex flex-wrap mb-3 cursor-pointer'}
                                                 style={{maxWidth: "289px", background: "white", borderRadius: "6px", filter: "blur(1px)"}}
                                            >
                                                {
                                                    [
                                                        {name: "slider_1.jpg"},
                                                        {name: "slider_2.jpg"},
                                                        {name: "slider_3.jpg"},
                                                        {name: "slider_4.jpg"},
                                                    ].map(img=>
                                                        <div key={img.name} className={'col-6 text-center p-1'}>
                                                            <img style={{borderRadius: "4px"}} width={120} height={80} src={process.env.REACT_APP_URL_API + "/gallery/" + img.name} />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className={'position-absolute'} style={{top: "42%", left: "27%"}}>
                                                <button type="button" className="btn btn-success no-radius d-inline-flex align-items-center">
                                                    <span>Select image</span>
                                                </button>
                                            </div>
                                        </div>
                                        <p className={'text-white'}>Add image:</p>
                                        <div style={menu_item} >
                                                <input className={'form-control'}
                                                       style={{maxWidth: "237px"}}
                                                       type={"file"}
                                                       accept="image/png, image/gif, image/jpeg"
                                                      onChange={ e => selectFile(e)  }
                                                      onClick={ e => {e.stopPropagation()} }
                                                />
                                        </div>
                                        <div className={'d-flex justify-content-center'}>
                                            <button type="button" className="btn btn-success no-radius d-inline-flex align-items-center" onClick={
                                                () => { submitFile() }
                                            }>
                                                <span>Submit</span><span style={{ paddingLeft: "6px" }}><AiOutlinePlus style={{ display: "block" }} /></span>
                                            </button>
                                        </div>
                                    </>
                                }
                            </div>
                    }
                </div>
                <div style={true ? {width: "100%", padding: "16px 30px"} : {}}>
                    <div style={true ? {overflowX: "hidden", overflowY: "auto", maxHeight: "90vh" } : {}}>

                        <div className={'editing-window'} onClick={(e) => {
                                if (e.target.dataset.id != null) {

                                    if (Object.keys(previousEditingElement).length !== 0) {
                                        previousEditingElement.target.className = previousEditingElement.target.className.replace('admin-editing', "")
                                    }

                                    if (e.target.dataset.id == previousEditingElement.id) {
                                        e.target.className.replace('admin-editing', '')
                                        setEditingTextSelected(false)
                                        setEditingBlockSelected(false)
                                        setEditingImgSelected(false)
                                        setEditingElement({})
                                        setPreviousEditingElement({})
                                    } else {

                                        let object_to_edit = {}

                                        // console.log(e.target.dataset)

                                        if (e.target.dataset.customType === "text") {
                                            object_to_edit = {id: e.target.dataset.id, text: e.target.innerText, className: e.target.className}
                                            setEditingImgSelected(false)
                                            setEditingBlockSelected(false)
                                            setEditingTextSelected(true)
                                        } else if (e.target.dataset.customType === "img") {
                                            object_to_edit = {id: e.target.dataset.id, className: e.target.className}
                                            setEditingTextSelected(false)
                                            setEditingBlockSelected(false)
                                            setEditingImgSelected(true)
                                        } else if (e.target.dataset.customType === "block") {
                                            object_to_edit = {id: e.target.dataset.id, className: e.target.className}
                                            setEditingImgSelected(false)
                                            setEditingTextSelected(false)
                                            setEditingBlockSelected(true)
                                        }

                                        console.log(object_to_edit)

                                        if (Object.keys(object_to_edit).length === 0) {
                                            setEditingImgSelected(false)
                                            setEditingTextSelected(false)
                                            setEditingBlockSelected(false)
                                        }

                                        setEditingElement(object_to_edit)

                                        setPreviousEditingElement({id: e.target.dataset.id, target: e.target})
                                        e.target.className += " admin-editing";
                                    }
                                }
                            }}
                        >

{/* ------------------------------------------------------------- RENDERING BLOCKS ------------------------------------------------------------- */}

                            {
                                isEditingPage ?
                                    <h1>Select page to edit</h1>
                                    :

                                    editingPage.webpage_components.map(({component_id, key, nodes, tag}) =>
                                        tag != null && tag === "delete" ?
                                            ""
                                        :
                                            getBlock(component_id, key, nodes)

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
