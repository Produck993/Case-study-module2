"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    getAll() {
        return ProductManagement.products;
    }
    creatNew(value) {
        // ProductManagement.id++
        value.id = ProductManagement.id++;
        ProductManagement.products.push(value);
    }
    updateById(id, value) {
        throw new Error("Method not implemented.");
    }
    removeById(id) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].id == id) {
                index = i;
            }
        }
        return index;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.id = 1;
ProductManagement.products = [];
