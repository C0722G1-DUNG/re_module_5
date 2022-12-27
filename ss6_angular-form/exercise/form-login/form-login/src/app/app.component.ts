import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-login';
  countryList=[
    {id:1,name:'Việt Nam'},
    {id:2,name:'Canada'},
    {id:3,name:'USA'},
  ]
  contractForm = new FormGroup(
    {
      firstname: new FormControl(),
      lastname: new  FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
    }
  )

  onSubmit() {
    console.log(this.contractForm.value);
  }
}
