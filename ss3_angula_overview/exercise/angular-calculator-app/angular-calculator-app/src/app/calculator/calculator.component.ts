import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1:number = 0;
  number2:number = 0;
  result:(number|string) =0;



  constructor() { }

  ngOnInit(): void {
  }
  total(){
    this.result = parseInt(String(this.number1))+parseInt(String(this.number2))
  }

  subtraction(){
    this.result = parseInt(String(this.number1))-parseInt(String(this.number2))
  }

  multiplication(){
    this.result = parseInt(String(this.number1))*parseInt(String(this.number2))

  }

  division(){
    this.result = parseInt(String(this.number1))/parseInt(String(this.number2))

  }
}
