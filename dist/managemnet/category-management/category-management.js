"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryManagement = void 0;
class CategoryManagement {
    findbyName(name) {
        for (let item of CategoryManagement.categories) {
            if (name == item.name) {
                return item;
            }
        }
        // CategoryManagement.categories.forEach((item)=>{
        //     if(item._name.includes(name))
        //     {
        //         console.table(CategoryManagement.categories)
        //     }
        // })
    }
    getAll() {
        return CategoryManagement.categories;
    }
    creatNew(value) {
        value._id = CategoryManagement.id++;
        CategoryManagement.categories.push(value);
    }
    updateById(id, value) {
        value._id = CategoryManagement.id++;
        let index = this.findById(id);
        if (index != -1) {
            CategoryManagement.categories[index] = value;
        }
        ;
    }
    removeById(id) {
        let index = this.findById(id);
        if (id != -1) {
            CategoryManagement.categories.splice(index, 1);
        }
    }
    findById(value) {
        let index = -1;
        for (let i = 0; i < CategoryManagement.categories.length; i++) {
            if (value == CategoryManagement.categories[i]._id)
                index = i;
        }
        return index;
    }
}
exports.CategoryManagement = CategoryManagement;
CategoryManagement.id = 0;
CategoryManagement.categories = [];
