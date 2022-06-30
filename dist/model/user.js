"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const addtocard_1 = require("./addtocard");
class User {
    constructor(username, passworld, email, name) {
        this._role = 0;
        this._id = 0;
        this._cart = new addtocard_1.AddCart();
        this._username = username;
        this._passworld = passworld;
        this._email = email;
        this._name = name;
    }
    get userName() {
        return this._username;
    }
    set userName(value) {
        this._username = value;
    }
    get passworld() {
        return this._passworld;
    }
    set passworld(value) {
        this._passworld = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    addToCart(t) {
        this._cart.add(t);
    }
    getCart() {
        return this._cart.productInCart;
    }
    getTotalMoney() {
        return this._cart.getTotalMoney();
    }
    remove(index) {
        this._cart.remove(index);
    }
}
exports.User = User;
