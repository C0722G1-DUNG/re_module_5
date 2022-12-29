import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionnary:Iword[]=[
    {word:"vàng",mean:'yellow'},
    {word:'đỏ',mean:'red'},
    {word:'đen',mean:'black'},
  ]
  translate(){
    return
  }
  constructor() { }

  findAll() {
    return this.dictionnary;
  }

  findById(value: string):Iword|null {
 let teamp = this.dictionnary.filter(element=>element.word===value)
    if (teamp.length===0){
      return null
    }
    return teamp[0];
  }
}
