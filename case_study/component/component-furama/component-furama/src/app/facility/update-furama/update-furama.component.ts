import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../../../../model/facility/facility-type";
import {RentType} from "../../../../model/facility/rent-type";

@Component({
  selector: 'app-update-furama',
  templateUrl: './update-furama.component.html',
  styleUrls: ['./update-furama.component.css']
})
export class UpdateFuramaComponent implements OnInit {

  formFacilityUpdate: FormGroup = new FormGroup({});
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
  constructor() {
    this.formFacilityUpdate= new FormGroup(
      {
        id: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        area: new FormControl('',Validators.required),
        cost: new FormControl('',Validators.required),
        maxPeople: new FormControl('',Validators.required),
        standardRoom: new FormControl('',Validators.required),
        descriptionOtherCovenience: new FormControl('',Validators.required),
        pollArea: new FormControl('',Validators.required),
        numberOfFloors: new FormControl('',Validators.required),
        facilityFree: new FormControl('',Validators.required),
        facilityType: new FormControl('',Validators.required),
        rentType: new FormControl('',Validators.required),
      },

    );
  }

  ngOnInit(): void {
  }

}
