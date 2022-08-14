import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-third-comp',
  templateUrl: './my-third-comp.component.html',
  styleUrls: ['./my-third-comp.component.scss']
})

export class MyThirdCompComponent implements OnInit {

  // *****************************************
  //  INIT a Var with The value 'MyThirdComp'
  // *****************************************
  myThirdComp: string = "myThirdComp  -> from a Var";

  constructor() {     
  }

  ngOnInit(): void {
  }

  // *********************************************************
  // Event to Start when you click on the VAR {{myThirdComp}}
  // *********************************************************  
  myThirdCompEvent(pEvent: any): void {
    alert("Display the myThirdCompEvent() Details "+ pEvent)
    console.log(pEvent);
  }
}
