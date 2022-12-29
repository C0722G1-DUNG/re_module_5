import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {Iword} from "../model/iword";

@Component({
  selector: 'app-dictionay-age-component',
  templateUrl: './dictionay-age-component.component.html',
  styleUrls: ['./dictionay-age-component.component.css']
})
export class DictionayAgeComponentComponent implements OnInit {
  dictionaryList:Iword[]=[];
  constructor(private dictionaryServiceService:DictionaryServiceService) {
    this.dictionaryList=this.dictionaryServiceService.findAll()

  }

  ngOnInit(): void {
  }

}
