import {$adminHost, $authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $adminHost.post('api/type', type)
    return data;
}

export const editType = async (id, name) => {
    const {data} = await $adminHost.post('api/type/edit', {id, name})
    return data;
}

export const removeTypeById = async (typeId) => {
    const {data} = await $adminHost.post('/api/type/remove', {id: typeId})
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data;
}

export const createBrand = async (brand) => {
    const {data} = await $adminHost.post('api/brand', brand)
    return data;
}

export const editBrand = async (id, name) => {
    const {data} = await $adminHost.post('api/brand/edit', {id, name})
    return data;
}

export const removeBrandById = async (brandId) => {
    const {data} = await $adminHost.post('/api/brand/remove', {id: brandId})
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data;
}

export const createItem = async (item) => {
    const {data} = await $adminHost.post('api/item', item)
    return data;
}

export const fetchItems = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/item', {params: {
            typeId,
            brandId,
            page,
            limit
        }})
    return data;
}

export const fetchAllItems = async () => {
    const {data} = await $host.get('api/item/getAll')
    return data;
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id )
    return data;
}

export const editItem = async (itemObject) => {
    const {data} = await $adminHost.post('/api/item/edit', itemObject)
    return data;
}

export const removeItemById = async (itemId) => {
    const {data} = await $adminHost.post('/api/item/remove', {id: itemId})
    return data;
}
