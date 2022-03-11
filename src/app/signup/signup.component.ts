import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  user : User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl(''),
      name : new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.user = {
      email : this.signUpForm.value.email,
      password : this.signUpForm.value.password,
      name : this.signUpForm.value.name
    }
    this.userService.addUser(this.user);
    console.log("Submitted");
  }

}
