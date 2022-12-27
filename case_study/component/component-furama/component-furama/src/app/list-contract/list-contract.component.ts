import { Component, OnInit } from '@angular/core';
import {Position} from "../../../model/employee/position";
import {Division} from "../../../model/employee/division";
import {Employee} from "../../../model/employee/employee";
import {AttachFacility} from "../../../model/contract/attach-facility";
import {ContractDetail} from "../../../model/contract/contract-detail";
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 positionList: Position[] = [
   {id:1,name:"Trung cấp"},
   {id:2,name:"Cao đẳng"},
   {id:3,name:"Đại học"},
   {id:4,name:"Sau đại học"},
 ]
  divisionList: Division[] = [
    {id:1,name:"Sale-Marketing"},
    {id:2,name:"Hành Chính"},
    {id:3,name:"Phục Vụ"},
    {id:4,name:"Quản Lý"},
  ]
  employyeList: Employee[]=[
    {id:1,nameEmployee:"Nguyễn Văn An",birth:"2002-10-12",idCard:"25423",salary:"111",phone:"06497",email:"annguyen@gmail",address:"Đà Nẵng",division: this.divisionList[1],position: this.positionList[3]},
    {id:2,nameEmployee:"Lê Văn Bình",birth:"2002-10-12",idCard:"25423",salary:"111",phone:"06497",email:"annguyen@gmail",address:"Đà Nẵng",division: this.divisionList[2],position: this.positionList[2]},
    {id:3,nameEmployee:"Hồ Thị Yến",birth:"2002-10-12",idCard:"25423",salary:"111",phone:"06497",email:"annguyen@gmail",address:"Đà Nẵng",division: this.divisionList[4],position: this.positionList[4]},
    {id:4,nameEmployee:"Võ Công Toản",birth:"2002-10-12",idCard:"25423",salary:"111",phone:"06497",email:"annguyen@gmail",address:"Đà Nẵng",division: this.divisionList[3],position: this.positionList[4]},
  ]
  attachFacilityList: AttachFacility[] = [
    {id:1,name:"Karaoke",cost:1000,unit:"giờ",status:"Tiện nghi,hiện tại"},
    {id:2,name:"Thuê xe máy",cost:1000,unit:"giờ",status:"hỏng 1"},
    {id:3,name:"Thuê xe đạp",cost:1000,unit:"giờ",status:"Tốt"},
    {id:4,name:"buffet buổi sáng",cost:1000,unit:"giờ",status:"đầy đủ đồ ăn"},
    {id:5,name:"buffer buổi trưa",cost:1000,unit:"giờ",status:"đầy đủ đồ ăn"},
  ]
  contractDetailList: ContractDetail[] = [
    {},
  ]
  contractList:Contract[]=[
    {id:1,startDate:"2008-12-08",endDate:"2008-12-08",deposit:0,},
    {id:2,startDate:"2008-12-08",endDate:"2008-12-08",deposit:0,},
    {id:3,startDate:"2008-12-08",endDate:"2008-12-08",deposit:0,},
    {id:4,startDate:"2008-12-08",endDate:"2008-12-08",deposit:0,},
  ]
}
