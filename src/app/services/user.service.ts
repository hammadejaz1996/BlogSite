import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

const USERS_URL = environment.baseUrl + "/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  @Output() userEmitter : EventEmitter<User[]> = new EventEmitter<User[]>();

  constructor(private http : HttpClient) { }

  getAllUsers() : User[] {
    this.http.get(USERS_URL).subscribe(result => {
      console.log(result);
      this.users = result as User[];
      this.userEmitter.emit(this.users);
    });
    return this.users;
  }

  getUserById(id : number) : User {
    let url = USERS_URL + "/" + id;
    let user : any = {};
    this.http.get(url).subscribe(result => {
      user = result;
    })
    return user;
  }

  addUser(user : User) {
    this.http.post(USERS_URL,user).subscribe(result => {
      console.log(user);
      this.userEmitter.emit(this.users);
    });
  }

  editUser(id : number, user : User) {
    let url = USERS_URL + "/" + id;
    this.http.put(url,user).subscribe(result => {
      console.log(result);
      this.userEmitter.emit(this.users);
    })
  }

  deleteUser(id : number) {
    let url = USERS_URL + "/" + id;
    this.http.delete(url).subscribe(result => {
      console.log(result);
      console.log("Item deleted successfully");
    })
  }
}
