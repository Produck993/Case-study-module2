"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMenu = void 0;
const product_management_1 = require("../managemnet/product/product-management");
const rl = __importStar(require("readline-sync"));
const product_1 = require("../model/product");
const category_management_1 = require("../managemnet/category-management/category-management");
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOW_ALL_PRODUCT"] = 1] = "SHOW_ALL_PRODUCT";
    ProductChoice[ProductChoice["CREAT_PRODYCT"] = 2] = "CREAT_PRODYCT";
    ProductChoice[ProductChoice["EDIT_PRODUCT"] = 3] = "EDIT_PRODUCT";
    ProductChoice[ProductChoice["DELETE_PRODUCT"] = 4] = "DELETE_PRODUCT";
    ProductChoice[ProductChoice["SEACH_PRODUCT"] = 5] = "SEACH_PRODUCT";
    ProductChoice[ProductChoice["SORT_PRODUCT"] = 6] = "SORT_PRODUCT";
    ProductChoice[ProductChoice["ADD_PRODUCT_TO_CATEGORY"] = 7] = "ADD_PRODUCT_TO_CATEGORY";
    ProductChoice[ProductChoice["CHECKOUT"] = 0] = "CHECKOUT";
})(ProductChoice || (ProductChoice = {}));
class ProductMenu {
    constructor() {
        this.productmenagement = new product_management_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log(`=========Qu???n l?? s???n ph???m=========`);
            console.log(`1. Hi???n th??? danh s??ch s???n ph???m`);
            console.log(`2. Th??m danh s??ch s???n ph???m`);
            console.log(`3. S???a danh s??ch s???n ph???m`);
            console.log(`4. X??a danh s??ch s???n ph???m`);
            console.log(`5. T??m ki???m s???n ph???m`);
            console.log(`6. S???p x???p s???n ph???m theo gi?? gi???m d???n`);
            console.log(`7. Th??m s???n ph???m v??o trong danh m???c`);
            console.log(`0. Tho??t`);
            choice = +rl.question(`Nh???p l???a ch???n c???a b???n : `);
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    let product = this.showAllProduct();
                    break;
                }
                case ProductChoice.CREAT_PRODYCT: {
                    this.addProduct();
                    break;
                }
                case ProductChoice.EDIT_PRODUCT: {
                    let name = rl.question(`Nh???p t??n s???n ph???m mu???n s???a:  `);
                    let name1 = rl.question(`Nh???p t??n m???i : `);
                    let price = +rl.question(`Nh???p gi?? m???i : `);
                    let description = rl.question(`Nh???p m?? t??? m???i: `);
                    let input = new product_1.Product(name1, price, description);
                    this.editProduct(name, input);
                    break;
                }
                case ProductChoice.DELETE_PRODUCT: {
                    let name = rl.question(`Nh???p t??n s???n ph???m mu???n x??a :  `);
                    this.deleteProduct(name);
                    break;
                }
                case ProductChoice.SEACH_PRODUCT: {
                    let name = rl.question(`Nh???p t??n s???n ph???m mu???n t??m :  `);
                    this.seachProduct(name);
                    break;
                }
                case ProductChoice.ADD_PRODUCT_TO_CATEGORY: {
                    console.log(`========Th??m s???n ph???m v??o trong danh m???c========`);
                    let categories = ProductMenu.categoryManagement.getAll();
                    let products = this.productmenagement.getAll();
                    if (categories.length == 0) {
                        console.log(`Hi???n t???i ch??a c?? danh m???c s???n ph???m n??o......`);
                        break;
                    }
                    else {
                        for (let i = 0; i < categories.length; i++) {
                            console.log(`id : ${i + 1},T??n danh m???c :${categories[i]._name}, `);
                        }
                    }
                    let id = +rl.question(`Nh???p m?? s???n ph???m c???n th??m v??o danh m???c : `);
                    let productindex = this.productmenagement.findById(id);
                    // console.log(productindex);
                    if (productindex == -1) {
                        console.log(`M?? s???n ph???m kh??ng t???n t???i `);
                        break;
                    }
                    else {
                        let categoryName = rl.question(`Nh???p t??n danh m???c c???n th??m :`);
                        let category = ProductMenu.categoryManagement.findbyName(categoryName);
                        if (category) {
                            products[productindex].category = category;
                            category.products.push(products[productindex]);
                        }
                        else {
                            console.log(`T??n danh m???c s???n ph???m kh??ng t???n t???i....`);
                        }
                        break;
                    }
                }
            }
        } while (choice != 0);
    }
    showAllProduct() {
        var _a;
        console.log(`==========danh s??ch s???n ph???m==========`);
        let product = this.productmenagement.getAll();
        // console.table(product)
        for (let i = 0; i < product.length; i++) {
            console.log(`id:${product[i].id}, T??n s???n ph???m : ${product[i].name}, Gi?? : ${product[i].price}, M?? t??? : ${product[i].description}, danh m???c s???n ph???m:${(_a = product[i].category) === null || _a === void 0 ? void 0 : _a.name}`);
        }
    }
    addProduct() {
        console.log(`==========th??m m???i s???n ph???m==========`);
        let product = this.inputProduct();
        this.productmenagement.creatNew(product);
    }
    inputProduct() {
        let name = rl.question(`nh???p t??n s???n ph???m m???i : `);
        let price = +rl.question(`nh???p gi?? s???n ph???m m???i : `);
        let description = rl.question(`nh???p m?? t??? s???n ph???m m???i : `);
        return new product_1.Product(name, price, description);
    }
    editProduct(value, newProduct) {
        let choice = -1;
        let product = this.productmenagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == value) {
                choice = i;
                break;
            }
        }
        if (choice != -1) {
            product[choice] = newProduct;
            return true;
        }
        return false;
    }
    deleteProduct(name) {
        let choice = -1;
        let product = this.productmenagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == name) {
                choice = i;
            }
        }
        if (choice != -1) {
            product.splice(choice, 1);
        }
    }
    seachProduct(name) {
        let product = this.productmenagement.getAll();
        let index = -1;
        for (let i = 0; i < product.length; i++) {
            if (index = -1) {
                index = i;
                // return index
                if (name == product[index].name) {
                    console.log(`T??n s???n ph???m ${product[index].name}, Gi?? : ${product[index].price}, ID s???n ph???m : ${product[index].id}`);
                }
            }
            return index;
        }
    }
}
exports.ProductMenu = ProductMenu;
ProductMenu.categoryManagement = new category_management_1.CategoryManagement();
