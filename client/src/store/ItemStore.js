import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = []
        this._brands = []
        this._items = []
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 5;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setItems(items) {
        for(let item of items) {
            item.type = this.types.find(type => type.id === item.typeId)
            item.brand = this.brands.find(brand => brand.id === item.brandId)
        }
        this._items = items
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get items() {
        return this._items;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get totalCount() {
        return this._totalCount;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }
}
