import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";
import {CustomerServiceService} from "../../service/customer-service.service";
import {CustomerTypeServiceService} from "../../service/customer-type-service.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerTypeList:CustomerType[] = []
  customerList: Customer[] = [];
  customer: Customer = {};
  constructor(private customerServiceService:CustomerServiceService,private customerTypeServiceService:CustomerTypeServiceService) {
    this.customerTypeServiceService.getAllCustomerType().subscribe(data=>{this.customerTypeList=data},error => {},()=>{});
  }

  ngOnInit(): void {
     this.customerServiceService.getAllCustomer().subscribe(
       data=>{this.customerList=data},
         error => {},
       ()=>{});
  }

  delete() {
this.customerServiceService.deleteById(this.customer.id).subscribe(data=>{
  alert("xoa thanh cong");
  this.ngOnInit();
},error => {},()=>{});
  }
}
