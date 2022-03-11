import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  profileForm : FormGroup ;
  count : number;
  result : string = '';
  @Output() output:EventEmitter<string>= new EventEmitter();
  users : User[];

  constructor(private userService : UserService) {
    this.getAllUsers()
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('')
    });
    this.count = 0;
  }

  getAllUsers() {
    this.userService.getAllUsers();
    this.userService.userEmitter.subscribe(x => {
      this.users = x;
    })
  }

  onSubmit() {
    if (this.count < 5) {
      this.users.forEach(x => {
        if(this.profileForm.value.email === x.email && this.profileForm.value.password === x.password) {
          debugger
          console.log(x.name);
          this.result = x.name;
          this.output.emit(this.result);
        }
        else {
          this.count ++;
        }
      })
    }
    else {
      alert("You can't login");
    }
  }
}
