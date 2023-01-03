import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../../model/customer/customer-type";
import {CustomerTypeServiceService} from "../../service/customer-type-service.service";
import {CustomerServiceService} from "../../service/customer-service.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  formCustomerCreate: FormGroup;
  customerTypeList:CustomerType[] = []
  constructor(private customerTypeServiceService:CustomerTypeServiceService,private customerServiceService:CustomerServiceService) {
    this.formCustomerCreate = new FormGroup({
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
    this.customerTypeServiceService.getAllCustomerType().subscribe(data=>{this.customerTypeList=data},error => {},()=>{});
  }

  saveCustomer() {
 if (this.formCustomerCreate.valid){
   const  customer = this.formCustomerCreate.value;
   this.customerServiceService.save(customer).subscribe(data=>{
     this.formCustomerCreate.reset();
     alert("thêm mới thành công");
   },error => {},()=>{});
 }
  }
}
