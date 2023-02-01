import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createSite = async (pages) => {
    const {data} = await $host.post('api/admin/create', {pages})
    return data;
}

export const editSite = async (id, pages) => {
    const {data} = await $host.post('api/admin/', {id, pages})
    return data;
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
