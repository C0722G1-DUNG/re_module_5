import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  formContractCreate: FormGroup= new FormGroup({});

  constructor() {
    this.formContractCreate =new FormGroup(
      {
        id:new FormControl(),
        startDate:new FormControl('',Validators.required),
        endDate:new FormControl('',Validators.required),
        deposit:new FormControl('',Validators.required),
        customer:new FormControl('',Validators.required),
        facility:new FormControl('',Validators.required),
        employee:new FormControl('',Validators.required),
      }
    );
  }

  ngOnInit(): void {
  }

  saveContract() {

  }
}
