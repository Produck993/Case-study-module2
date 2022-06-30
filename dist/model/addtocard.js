"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCart = void 0;
class AddCart {
    constructor() {
        this._totalMoney = 0;
        this._productInCard = [];
    }
    get totalMoney() {
        return this._totalMoney;
    }
    set totalMoney(value) {
        this._totalMoney = value;
    }
    get productInCart() {
        return this._productInCard;
    }
    set productInCart(value) {
        this._productInCard = value;
    }
    add(t) {
        this._productInCard.push(t);
    }
    findByName(name) {
        let current = true;
        let index = -1;
        for (let i = 0; i < this._productInCard.length; i++) {
            if (name == this._productInCard[i].name) {
                index = i;
                current = true;
                break;
            }
        }
        if (current) {
            return index;
        }
        else {
            return null;
        }
    }
    remove(i) {
        this._productInCard.splice(i, 1);
    }
    getTotalMoney() {
        let totalMoney = 0;
        for (let service of this._productInCard) {
            totalMoney += (service.price);
        }
        return totalMoney;
    }
}
exports.AddCart = AddCart;
