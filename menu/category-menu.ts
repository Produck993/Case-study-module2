import { CategoryManagement } from "../managemnet/category-management/category-management";
import *as rl from 'readline-sync'
import { Category } from "../model/category";
import { ProductManagement } from "../managemnet/product/product-management";

export class CategoryMenu{
    private CategoryManagement = new CategoryManagement()
    private ProductManagement = new ProductManagement()
    run() {
        let choice = -1;
        do {
        console.log(`==============Quản lý danh mục sản phẩm==============`)
        console.log(`1. Hiển thị danh mục`)
        console.log(`2. Thêm danh mục`)
        console.log(`3. Sửa danh mục`)
        console.log(`4. Hiển thị theo tên danh mục`)
        console.log(`5. Xóa danh mục`)
        console.log(`6. Sắp xếp từ bé đến lớn`)
        console.log(`0. Đăng xuất`)
        let choice = +rl.question(`Nhập lựa chọn của bạn : `)
        switch (choice) {
            case 1 : {
                console.log(`========Hiển thị danh sách danh mục========`)
                let category = this.CategoryManagement.getAll();
                for ( let i of category ) {
                    console.log(`id : ${i.id},Tên danh mục :${i._name}, `);
                }
                break;
            }

            case 2 : {
                console.log(`========Thêm danh sách danh mục========`)
                let name = rl.question(`Nhập tên danh mục mới :`)
                let category = new Category(name)
                this.CategoryManagement.creatNew(category)
                break;
            }
            case 3 : {
                let id = +rl.question(`Nhập id cần sửa :`)
                let name = rl.question(`Nhập tên danh mục cần sửa :`)
                let category = new Category(name)
                this.CategoryManagement.updateById(id,category)
            break;
            }
            
            case 4 : {
                console.log(`Danh sách danh mục sản phẩm`)
                let name = rl.question(`Nhập tên danh mục sản phẩm cần tìm : `)
                let categoryManagement = this.CategoryManagement.findbyName(name)
                
                if(categoryManagement) {
                        for (let i = 0; i < categoryManagement._products.length ; i++ ) {
                            console.log(`STT : ${i + 1}, Tên sản phẩm : ${categoryManagement._products[i].name}, Giá : ${categoryManagement._products[i].price}, Mô tả : ${categoryManagement._products[i].description}, danh mục : ${categoryManagement._products[i].category?.id}`)
                        }
                } else {
                    console.log(`Tên danh mục sản phẩm không tồn tại .....`)
                    break;
                }
                break;
            }
            case 5 : {
                let id = +rl.question(`Nhập id muốn xóa :`)
                let categoryManagement = this.CategoryManagement.removeById(id)
                console.log(categoryManagement)
            }
            case 6 : {
                let category = this.ProductManagement.getAll()
                let index = -1
                console.log(`Sắp xếp sản phẩm từ bé đến lớn theo giá tiền : `)
                for ( let i = 0; i < category.length; i ++) {
                    if ( index != -1) {
                        index = i
                category[i].price

                    }
                }
                
            }
        }
        } while ( choice == 0)
    }
    
}
