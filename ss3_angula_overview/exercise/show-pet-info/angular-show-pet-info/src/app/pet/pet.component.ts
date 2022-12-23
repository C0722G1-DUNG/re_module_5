import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://dogily.vn/wp-content/uploads/2022/12/cho-shiba-inu-vang-trang-2-thang-tuoi-19.png'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
