import * as uuid from "uuid";

export const getDivObject = (className, children) => {
    return {component_id: 0, key: uuid.v4(), props: {className: className, children: children}}
}

export const getTextObject = (text, className, type) => {
    return {component_id: 1, key: uuid.v4(), props: {text: text, className: className, type: type}}
}

export const getAnchorObject = (text, className, type, url) => {
    return {component_id: 2, key: uuid.v4(), props: {text: text, className: className, type: type, url: url}}
}

export const getImgObject = (className, src, alt, type = 0) => {
    return {component_id: 3, key: uuid.v4(), props: {className: className, src: src, alt: alt, type: type}}
}

export const getButtonObject = (className, text, type = 0) => {
    return {component_id: 4, key: uuid.v4(), props: {text: text, className: className, type: type}}
}

export const getListObject = (className, children) => {
    return {component_id: 5, key: uuid.v4(), props: {className: className, children: children}}
}

export const getListItemObject = (className, text, type) => {
    return {component_id: 6, key: uuid.v4(), props: {text: text, className: className, type: type}}
}
