"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const e_role_1 = require("../../model/e-role");
const user_1 = require("../../model/user");
class UserManagement {
    constructor() {
        let admin = new user_1.User('admin', '123456', 'longnguyen23993@gmail.com', 'Nguyen Duc Long');
        admin.id = UserManagement.id;
        admin.role = e_role_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    login(username, passworld) {
        for (let item of UserManagement.users) {
            if (username == item.userName && passworld == item.passworld) {
                return item;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return 0;
    }
    findUserName(userName) {
        for (let item of UserManagement.users) {
            if (userName == item.userName) {
                return item;
            }
        }
        return null;
    }
    getAll() {
        return UserManagement.users;
    }
    creatNew(value) {
        UserManagement.id++;
        value.id = UserManagement.id;
        value.role = e_role_1.Role.USER;
        UserManagement.users.push(value);
    }
    updateById(id, value) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = value;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        UserManagement.users.splice(index, 1);
    }
    findByEmail(email) {
        for (let item of UserManagement.users) {
            if (email == item.email) {
                return item;
            }
        }
        return null;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 1;
