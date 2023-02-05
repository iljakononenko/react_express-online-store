import {makeAutoObservable} from "mobx";

export default class AdminStore {
    constructor() {
        this._isAuth = false;
        this._admin = {};
        this._currentSiteId = 0;
        this._currentSiteName = "";
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setAdmin(user) {
        this._admin = user;
    }

    setCurrentSiteId(id) {
        this._currentSiteId = id;
    }

    setCurrentSiteName(name) {
        this._currentSiteName = name;
    }

    get isAuth() {
        return this._isAuth;
    }

    get admin() {
        return this._admin;
    }

    get currentSiteId() {
        return this._currentSiteId;
    }

    get currentSiteName() {
        return this._currentSiteName;
    }
}
