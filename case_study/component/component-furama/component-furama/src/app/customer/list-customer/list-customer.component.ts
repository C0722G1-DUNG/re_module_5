import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 customerTypeList:CustomerType[] = [
   {id:1,nameCustomerType:"Diamond"},
   {id:2,nameCustomerType:"Platinium"},
   {id:3,nameCustomerType:"Gold"},
   {id:4,nameCustomerType:"Slive"},
   {id:5,nameCustomerType:"Member"},
 ]
  customerList:Customer[] = [
    {id:1,nameCustomer:"Nguyễn Thị Hào",birthday:"1970-11-07",gender:false,id_card:"13456",phone:"091234",email:"thihao@",address:"Đà Nẵng",customerType:this.customerTypeList[1]},
    {id:2,nameCustomer:"Phạm Xuân Diệu",birthday:"1971-11-07",gender:false,id_card:"13456",phone:"091544",email:"thihao@",address:"Đà Nẵng",customerType:this.customerTypeList[4]},
    {id:3,nameCustomer:"Trương Đình Nghệ",birthday:"1972-11-07",gender:true,id_card:"13456",phone:"09113",email:"thihao@",address:"Đà Nẵng",customerType:this.customerTypeList[3]},
    {id:4,nameCustomer:"Dương Văn Quan",birthday:"1973-11-07",gender:true,id_card:"13456",phone:"099874",email:"thihao@",address:"Đà Nẵng",customerType:this.customerTypeList[2]},
    {id:5,nameCustomer:"Hoàng Trần Nhi Nhi",birthday:"1974-11-07",gender:false,id_card:"13456",phone:"093465",email:"thihao@",address:"Đà Nẵng",customerType:this.customerTypeList[1]},
  ]
}
