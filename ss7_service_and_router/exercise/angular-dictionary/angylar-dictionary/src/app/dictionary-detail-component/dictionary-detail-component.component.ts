import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {Iword} from "../model/iword";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  dictionary:Iword| null ={};

  constructor(private dictionaryServiceService:DictionaryServiceService,
              private activatedRoute:ActivatedRoute) {
 this.activatedRoute.paramMap.subscribe(data=>{
   const word = data.get("word");
   if (word!=null){
     this.dictionary = this.dictionaryServiceService.findById(word)
     console.log(this.dictionary)

   }
 },error => {},()=>{})
  }

  ngOnInit(): void {
  }

}
