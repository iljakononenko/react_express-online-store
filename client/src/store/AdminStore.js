import {makeAutoObservable} from "mobx";

export default class AdminStore {
    constructor() {
        this._isAuth = false;
        this._admin = {};
        this._currentSiteId = 0;
        this._currentSiteName = "";
        this._currentPages = [];
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

    setCurrentPages(pages) {
        this._currentPages = pages;
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

    get currentPages() {
        return this._currentPages;
    }
}
