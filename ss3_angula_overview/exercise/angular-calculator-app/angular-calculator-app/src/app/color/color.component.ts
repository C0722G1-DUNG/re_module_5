import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  r:any=0;
  g:any=0;
  b:any=0;
  rbg:any

  constructor() { }

  ngOnInit(): void {
  }
 setColor(){
    this.rbg = 'rgb('+this.g+','+this.b+','+this.r+')'
 }
}
