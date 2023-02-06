import {$adminHost, $authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createSite = async (siteName, pages, layout_type_id) => {
    const {data} = await $adminHost.post('api/admin/create', {siteName: siteName, pages: pages, layout_type_id: layout_type_id})
    return data;
}

export const editSite = async (id, pages) => {
    const {data} = await $adminHost.post('api/admin/', {id, pages})
    return data;
}

export const fetchWebSites = async () => {
    try {
        const {data} = await $adminHost.get('api/admin/')
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const fetchOneSite = async (id) => {
    try {
        const {data} = await $adminHost.get('api/admin/' + id )
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const fetchOrders = async () => {
    try {
        const {data} = await $adminHost.get('api/order/')
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const fetchOneOrder = async (id) => {
    try {
        const {data} = await $adminHost.get('api/order/' + id )
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const fetchUsers = async () => {
    try {
        const {data} = await $adminHost.get('api/admin/users/')
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const fetchOneUser = async (id) => {
    try {
        const {data} = await $adminHost.get('api/admin/users/' + id )
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const adminChangeUserData = async (userData) => {
    const {data} = await $adminHost.post('/api/admin/changeUserData', {userData})
    return data;
}

export const removeUserById = async (userId) => {
    const {data} = await $adminHost.post('/api/admin/removeUser', {userId})
    return data;
}
