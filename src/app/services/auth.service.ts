import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as appSettings from "@nativescript/core/application-settings";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    default_users: Array<User> = [
        {
            email: 'juan_perez@test.com',
            password: '123456',
            name: 'Juan Perez'
        },
        {
            email: 'rodrigo_paez@test.com',
            password: '123456',
            name: 'Rodrigo Paez'
        },
    ];
    users: Array<User>;

    private setCurrentUser = new BehaviorSubject<User | null>(this.getUser());
    user = this.setCurrentUser.asObservable();

    constructor() {
        this.users = this.getUsers();
        this.setUsers(this.users);
    }

    login(user: User): Promise<User>{
        return new Promise((resolve, reject) => {
            let i = this.users.findIndex(us => us.email === user.email && us.password === user.password);
            if (i > -1) {
                this.setUser(this.users[i]);
                resolve(this.users[i]);
            } else {
                reject(new Error('Credenciales incorrectas.')); 
            }
        });
    }

    register(user: User): Promise<User>{
        return new Promise((resolve, reject) => {
            let i = this.users.findIndex(us => us.email === user.email);
            if (i > -1) {
                reject(new Error('Ya existe un usuario con el email ingresado.')); 
            } else {
                this.users.push(user);
                this.setUser(user);
                resolve(user);
            }
        });
    }

    logout(){
        this.removeUser();
    }

    private setUser(user: User) {
        this.onSetCurrentUser(user);
        appSettings.setString("user", JSON.stringify(user));
    }

    private removeUser() {
        this.onSetCurrentUser(null);
        appSettings.remove("user");
    }

    private setUsers(users: User[]) {
        appSettings.setString("users", JSON.stringify(users));
    }

    private onSetCurrentUser(user: User | null) {
        this.setCurrentUser.next(user);
    }
    
    getUsers(): User[] {
        const users = appSettings.getString('users');
        return users ? JSON.parse(users) : this.default_users;
    }

    getUser(): User | null {
        const user = appSettings.getString('user');
        return user ? JSON.parse(user) : null;
    }
}
