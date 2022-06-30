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
exports.CategoryMenu = void 0;
const category_management_1 = require("../managemnet/category-management/category-management");
const rl = __importStar(require("readline-sync"));
const category_1 = require("../model/category");
const product_management_1 = require("../managemnet/product/product-management");
class CategoryMenu {
    constructor() {
        this.CategoryManagement = new category_management_1.CategoryManagement();
        this.ProductManagement = new product_management_1.ProductManagement();
    }
    run() {
        var _a;
        let choice = -1;
        do {
            console.log(`==============Quản lý danh mục sản phẩm==============`);
            console.log(`1. Hiển thị danh mục`);
            console.log(`2. Thêm danh mục`);
            console.log(`3. Sửa danh mục`);
            console.log(`4. Hiển thị theo tên danh mục`);
            console.log(`5. Xóa danh mục`);
            console.log(`6. Sắp xếp từ bé đến lớn`);
            console.log(`0. Đăng xuất`);
            let choice = +rl.question(`Nhập lựa chọn của bạn : `);
            switch (choice) {
                case 1: {
                    console.log(`========Hiển thị danh sách danh mục========`);
                    let category = this.CategoryManagement.getAll();
                    for (let i of category) {
                        console.log(`id : ${i.id},Tên danh mục :${i._name}, `);
                    }
                    break;
                }
                case 2: {
                    console.log(`========Thêm danh sách danh mục========`);
                    let name = rl.question(`Nhập tên danh mục mới :`);
                    let category = new category_1.Category(name);
                    this.CategoryManagement.creatNew(category);
                    break;
                }
                case 3: {
                    let id = +rl.question(`Nhập id cần sửa :`);
                    let name = rl.question(`Nhập tên danh mục cần sửa :`);
                    let category = new category_1.Category(name);
                    this.CategoryManagement.updateById(id, category);
                    break;
                }
                case 4: {
                    console.log(`Danh sách danh mục sản phẩm`);
                    let name = rl.question(`Nhập tên danh mục sản phẩm cần tìm : `);
                    let categoryManagement = this.CategoryManagement.findbyName(name);
                    if (categoryManagement) {
                        for (let i = 0; i < categoryManagement._products.length; i++) {
                            console.log(`STT : ${i + 1}, Tên sản phẩm : ${categoryManagement._products[i].name}, Giá : ${categoryManagement._products[i].price}, Mô tả : ${categoryManagement._products[i].description}, danh mục : ${(_a = categoryManagement._products[i].category) === null || _a === void 0 ? void 0 : _a.id}`);
                        }
                    }
                    else {
                        console.log(`Tên danh mục sản phẩm không tồn tại .....`);
                        break;
                    }
                    break;
                }
                case 5: {
                    let id = +rl.question(`Nhập id muốn xóa :`);
                    let categoryManagement = this.CategoryManagement.removeById(id);
                    console.log(categoryManagement);
                }
                case 6: {
                    let category = this.ProductManagement.getAll();
                    let index = -1;
                    console.log(`Sắp xếp sản phẩm từ bé đến lớn theo giá tiền : `);
                    for (let i = 0; i < category.length; i++) {
                        if (index != -1) {
                            index = i;
                            category[i].price;
                        }
                    }
                }
            }
        } while (choice == 0);
    }
}
exports.CategoryMenu = CategoryMenu;
