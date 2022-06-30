"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    // private _amount : number = 0
    constructor(name, price, description) {
        this._id = 0;
        this._category = null;
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get description() {
        return this._description;
    }
    get category() {
        return this._category;
    }
    // get amout() : number{
    //     return this._amount
    // }
    // set amout(value : number){
    //     this._amount = value}
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set price(item) {
        this._price = item;
    }
    set description(value) {
        this.description = value;
    }
    set category(value) {
        this._category = value;
    }
}
exports.Product = Product;
