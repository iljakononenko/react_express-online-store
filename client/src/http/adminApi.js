import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createSite = async (siteName, pages, layout_type_id) => {
    const {data} = await $host.post('api/admin/create', {siteName: siteName, pages: pages, layout_type_id: layout_type_id})
    return data;
}

export const editSite = async (id, pages) => {
    const {data} = await $host.post('api/admin/', {id, pages})
    return data;
}

export const fetchWebSites = async () => {
    try {
        const {data} = await $host.get('api/admin/')
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export const fetchOneSite = async (id) => {
    try {
        const {data} = await $host.get('api/admin/' + id )
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
