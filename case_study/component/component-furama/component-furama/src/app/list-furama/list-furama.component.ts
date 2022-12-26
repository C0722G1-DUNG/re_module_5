import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";

@Component({
  selector: 'app-list-furama',
  templateUrl: './list-furama.component.html',
  styleUrls: ['./list-furama.component.css']
})
export class ListFuramaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  facilityTypeList: FacilityType[] = [
    {id: 1, name: 'villa'},
    {id: 2, name: 'house'},
    {id: 3, name: 'rooom'}
  ];
  rentTypeList: RentType[] = [
    {id:1,name:"year"},
    {id:2,name:"month"},
    {id:3,name:"day"},
    {id:4,name:"hour"},
  ]
  facilityList :Facility[] = [
    {id:1,name:"villa Beach front",area:2400,cost:1000,maxPeople:10,standardRoom:"vip",descriptionOtherCovenience:"co ho boi",pollArea:500,numberOfFloors:4,rentType: this.rentTypeList[3],facilityType: this.facilityTypeList[1]},
    {id:2,name:"House Princess front",area:2400,cost:1000,maxPeople:10,standardRoom:"vip",descriptionOtherCovenience:"co ho boi",pollArea:500,numberOfFloors:4,rentType: this.rentTypeList[2],facilityType: this.facilityTypeList[2]},
    {id:3,name:"Room twin01",area:2400,cost:1000,maxPeople:10,standardRoom:"vip",descriptionOtherCovenience:"co ho boi",pollArea:500,numberOfFloors:4,rentType: this.rentTypeList[4],facilityType: this.facilityTypeList[3]},
    {id:4,name:"villa ",area:2400,cost:1000,maxPeople:10,standardRoom:"vip",descriptionOtherCovenience:"co ho boi",pollArea:500,numberOfFloors:4,rentType: this.rentTypeList[4],facilityType: this.facilityTypeList[3]},
    {id:5,name:"Rooom twin02",area:2400,cost:1000,maxPeople:10,standardRoom:"vip",descriptionOtherCovenience:"co ho boi",pollArea:500,numberOfFloors:4,rentType: this.rentTypeList[3],facilityType: this.facilityTypeList[2]},
  ]
  // cost?: number;
  // maxPeople?: number;
  // standardRoom?: string;
  // descriptionOtherCovenience?: string;
  // pollArea?: number;
  // numberOfFloors?: number;
  // facilityFree?: string;
  // facilityType?: FacilityType;
}
