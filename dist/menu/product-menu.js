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
            console.log(`=========Quản lý sản phẩm=========`);
            console.log(`1. Hiển thị danh sách sản phẩm`);
            console.log(`2. Thêm danh sách sản phẩm`);
            console.log(`3. Sửa danh sách sản phẩm`);
            console.log(`4. Xóa danh sách sản phẩm`);
            console.log(`5. Tìm kiếm sản phẩm`);
            console.log(`6. Sắp xếp sản phẩm theo giá giảm dần`);
            console.log(`7. Thêm sản phẩm vào trong danh mục`);
            console.log(`0. Thoát`);
            choice = +rl.question(`Nhập lựa chọn của bạn : `);
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
                    let name = rl.question(`Nhập tên sản phẩm muốn sửa:  `);
                    let name1 = rl.question(`Nhập tên mới : `);
                    let price = +rl.question(`Nhập giá mới : `);
                    let description = rl.question(`Nhập mô tả mới: `);
                    let input = new product_1.Product(name1, price, description);
                    this.editProduct(name, input);
                    break;
                }
                case ProductChoice.DELETE_PRODUCT: {
                    let name = rl.question(`Nhập tên sản phẩm muốn xóa :  `);
                    this.deleteProduct(name);
                    break;
                }
                case ProductChoice.SEACH_PRODUCT: {
                    let name = rl.question(`Nhập tên sản phẩm muốn tìm :  `);
                    this.seachProduct(name);
                    break;
                }
                case ProductChoice.ADD_PRODUCT_TO_CATEGORY: {
                    console.log(`========Thêm sản phẩm vào trong danh mục========`);
                    let categories = ProductMenu.categoryManagement.getAll();
                    let products = this.productmenagement.getAll();
                    if (categories.length == 0) {
                        console.log(`Hiện tại chưa có danh mục sản phẩm nào......`);
                        break;
                    }
                    else {
                        for (let i = 0; i < categories.length; i++) {
                            console.log(`id : ${i + 1},Tên danh mục :${categories[i]._name}, `);
                        }
                    }
                    let id = +rl.question(`Nhập mã sản phẩm cần thêm vào danh mục : `);
                    let productindex = this.productmenagement.findById(id);
                    // console.log(productindex);
                    if (productindex == -1) {
                        console.log(`Mã sản phẩm không tồn tại `);
                        break;
                    }
                    else {
                        let categoryName = rl.question(`Nhập tên danh mục cần thêm :`);
                        let category = ProductMenu.categoryManagement.findbyName(categoryName);
                        if (category) {
                            products[productindex].category = category;
                            category.products.push(products[productindex]);
                        }
                        else {
                            console.log(`Tên danh mục sản phẩm không tồn tại....`);
                        }
                        break;
                    }
                }
            }
        } while (choice != 0);
    }
    showAllProduct() {
        var _a;
        console.log(`==========danh sách sản phẩm==========`);
        let product = this.productmenagement.getAll();
        // console.table(product)
        for (let i = 0; i < product.length; i++) {
            console.log(`id:${product[i].id}, Tên sản phẩm : ${product[i].name}, Giá : ${product[i].price}, Mô tả : ${product[i].description}, danh mục sản phẩm:${(_a = product[i].category) === null || _a === void 0 ? void 0 : _a.name}`);
        }
    }
    addProduct() {
        console.log(`==========thêm mới sản phẩm==========`);
        let product = this.inputProduct();
        this.productmenagement.creatNew(product);
    }
    inputProduct() {
        let name = rl.question(`nhập tên sản phẩm mới : `);
        let price = +rl.question(`nhập giá sản phẩm mới : `);
        let description = rl.question(`nhập mô tả sản phẩm mới : `);
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
                    console.log(`Tên sản phẩm ${product[index].name}, Giá : ${product[index].price}, ID sản phẩm : ${product[index].id}`);
                }
            }
            return index;
        }
    }
}
exports.ProductMenu = ProductMenu;
ProductMenu.categoryManagement = new category_management_1.CategoryManagement();
