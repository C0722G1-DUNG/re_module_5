import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, this.validateEmail]),
        password: new FormControl("", [Validators.required]),
      }
    );
  }

  ngOnInit(): void {
  }
  saveLogIn() {
    if (this.loginForm.valid){
      console.log(this.loginForm);
    }
  }
  //custom theo từng ô input
  validateEmail(email: AbstractControl) {
    if (!email.value.match("[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})")) {
      return {"invalidEmail": true}
    }
    return null;
  }

}
