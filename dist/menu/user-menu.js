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
exports.UserMenu = void 0;
const rl = __importStar(require("readline-sync"));
const category_management_1 = require("../managemnet/category-management/category-management");
const product_management_1 = require("../managemnet/product/product-management");
class UserMenu {
    constructor() {
        this.categoryManagement = new category_management_1.CategoryManagement();
        this.productManagement = new product_management_1.ProductManagement();
        this.productInCard = [];
    }
    run(currentUser) {
        let choice = -1;
        do {
            console.log(`============CoopMart============`);
            console.log(`1. Tìm kiếm mặt hàng`);
            console.log(`2. Tìm kiếm theo danh mục `);
            console.log(`3. Giỏ hàng `);
            console.log(`4. Tiến hành thanh toán `);
            console.log(`0. Đăng xuất`);
            choice = +rl.question(`Nhập lựa chọn của bạn`);
            switch (choice) {
                case 1: {
                    console.log(`==========danh sách sản phẩm==========`);
                    this.showAllProduct();
                    let name = rl.question(`Nhập tên sản phẩm cần tìm : `);
                    let display = this.seachProduct(name);
                    console.log(display === null || display === void 0 ? void 0 : display.name, display === null || display === void 0 ? void 0 : display.price);
                    break;
                }
                case 2: {
                    console.log(`Danh sách danh mục sản phẩm`);
                    let name = rl.question(`Nhập tên danh mục sản phẩm cần tìm : `);
                    let categories = this.categoryManagement.findbyName(name);
                    if (categories) {
                        for (let i = 0; i < categories._products.length; i++) {
                            console.log(`STT : ${i + 1}, Tên sản phẩm : ${categories._products[i].name}, Giá : ${categories._products[i].price}, Mô tả : ${categories._products[i].description}, danh mục : ${categories._products[i].id}`);
                        }
                    }
                    else {
                        console.log(`Tên danh mục sản phẩm không tồn tại .....`);
                        break;
                    }
                    break;
                }
                case 3: {
                    let index = -1;
                    let id = +rl.question(`Nhập id của bạn :`);
                    let getAll = this.productManagement.getAll();
                    for (let i = 0; i < getAll.length; i++) {
                        if (getAll[i].id == id) {
                            index = i;
                        }
                    }
                    currentUser.addToCart(getAll[index]);
                    break;
                }
                case 4: {
                    console.log(`========== Thanh toán ==========`);
                    let getAll = currentUser.getCart();
                    let tinhTien = currentUser.getTotalMoney();
                    for (let item of getAll) {
                        console.log(`tên : ${item.name}, giá ${item.price}`);
                    }
                    console.log(`Tổng thành tiền : ${tinhTien}`);
                }
            }
        } while (choice != 0);
    }
    seachProduct(name) {
        let choice = -1;
        let product = this.productManagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == name) {
                choice = i;
            }
        }
        if (choice != -1) {
            return product[choice];
        }
    }
    showAllProduct() {
        var _a;
        console.log(`==========danh sách sản phẩm==========`);
        let product = this.productManagement.getAll();
        // console.table(product)
        for (let i = 0; i < product.length; i++) {
            console.log(`id:${product[i].id}, Tên sản phẩm : ${product[i].name}, Giá : ${product[i].price}, Mô tả : ${product[i].description}, danh mục sản phẩm:${(_a = product[i].category) === null || _a === void 0 ? void 0 : _a.name}`);
        }
    }
    getAll() {
    }
}
exports.UserMenu = UserMenu;
