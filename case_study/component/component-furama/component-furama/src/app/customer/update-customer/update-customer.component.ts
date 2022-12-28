import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../../model/customer/customer-type";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  formCustomerUpdate: FormGroup;
  customerTypeList:CustomerType[] = [
    {id:1,nameCustomerType:"Diamond"},
    {id:2,nameCustomerType:"Platinium"},
    {id:3,nameCustomerType:"Gold"},
    {id:4,nameCustomerType:"Slive"},
    {id:5,nameCustomerType:"Member"},
  ]

  constructor() {
    this.formCustomerUpdate = new FormGroup({
        id : new FormControl('',[Validators.required,Validators.pattern("[C][0-9]{4}")]),
        nameCustomer : new FormControl('',[Validators.required,Validators.pattern("\\p{Lu}\\p{Ll}+(\\s\\p{Lu}\\p{Ll}+)*")]) ,
        birthday : new FormControl('',[Validators.required]),
        gender : new FormControl('',Validators.required),
        idCard : new FormControl('',[Validators.required,Validators.pattern("[0-9]{3}")]),
        phone : new FormControl('',[Validators.required,Validators.pattern('[0][9][0-9]{7}')]),
        email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        address : new FormControl('',Validators.required),
        customerType : new FormControl('',Validators.required)

      }
    );
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    console.log(this.formCustomerUpdate);
  }
}
