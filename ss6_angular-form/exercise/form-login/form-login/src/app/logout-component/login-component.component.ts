import {AbstractType, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  countryList = [
    {id: 1, name: 'Đà Nẵng'},
    {id: 2, name: 'QUảng Trị'},
    {id: 1, name: 'Huế'},
    {id: 1, name: 'Quảng Bình'},
  ]
  logoutForm:FormGroup;

  constructor() {
    this.logoutForm = new FormGroup({
        email: new FormControl("", [Validators.required, this.validateEmail]),
        password: new FormControl("", [Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl("", [Validators.required]),
        country: new FormControl("", [Validators.required, Validators.min(18)]),
        gender: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required,Validators.pattern('[+][8][4][ ][0-9]{9,10}')]),
        age: new FormControl("", [Validators.required]),
      },[this.checkPass]
      );
  };
//custom theo forrm
  checkPass(c: AbstractControl){
    if (c.get('password')?.value!=c.get('confirmPassword')?.value){
      return {"invalidPass": true}
    }
    return null
  }


//custom theo từng ô input
  validateEmail(email: AbstractControl) {
    if (!email.value.match("[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})")) {
      return {"invalidEmail": true}
    }
    return null;
  }

  ngOnInit(): void {

  }

  saveLogIn() {
    if (this.logoutForm.valid){
      console.log(this.logoutForm);
    }
  }
}
