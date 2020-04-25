import { Component, OnInit } from '@angular/core';
import { CalculatingServiceService }from 'src/app/calculating-service.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  data=[[],["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],["M","N","O"],["P","Q","R","S"],["T","U","V"],["W","X","Y","Z"]];
  list='';
  constructor( private calculatingService: CalculatingServiceService) { }

  ngOnInit(): void {
  }
  add(number){
    this.list+=number;
    console.log(this.list);
  }
  goToCalculate(){
    if(this.list.length==10&&!this.list.includes('*')){
      this.calculatingService.goCal(this.list);
    }else{
      alert("Invalid phone number");
    }
  }
}
