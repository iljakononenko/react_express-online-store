import {makeAutoObservable} from "mobx";

export default class CartStore {
    constructor() {
        this._cart = {}
        this._deliveryAddressData = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            city: "",
            postal: "",
        }
        this._billingAddressData = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            city: "",
            postal: "",
        }
        this._isDeliverySameAsBillingAddress = true;
        this._saveDataAfterOrderFlag = true;
        makeAutoObservable(this);
    }

    setCart(cart) {
        this._cart = cart;
    }

    get cart() {
        return this._cart;
    }

    cartSum() {
        let sum = 0;
        for (let cartElement of this._cart) {
            sum += cartElement.quantity * cartElement.shop_item.price
        }
        return sum;
    }

    setDeliveryAddressData(addressData) {
        this._deliveryAddressData = addressData;
    }

    resetDeliveryAddressData() {
        this._deliveryAddressData = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            city: "",
            postal: "",
        };
    }

    get deliveryAddressData() {
        return this._deliveryAddressData;
    }

    setBillingAddressData(addressData) {
        this._billingAddressData = addressData;
    }

    get billingAddressData() {
        return this._billingAddressData;
    }

    switchIsDeliverySameAsBillingAddress() {
        this._isDeliverySameAsBillingAddress = !this._isDeliverySameAsBillingAddress;
    }

    get isDeliverySameAsBillingAddress() {
        return this._isDeliverySameAsBillingAddress;
    }

    switchSaveDataAfterOrderFlag() {
        this._saveDataAfterOrderFlag = !this._saveDataAfterOrderFlag;
    }

    get saveDataAfterOrderFlag() {
        return this._saveDataAfterOrderFlag;
    }
}
