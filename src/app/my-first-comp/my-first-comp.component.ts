import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})

export class MyFirstCompComponent implements OnInit {

  // *****************************************
  //  INIT a Var with The value 'myFirstComp'
  // *****************************************
  myFirstComp: string = "myFirstComp -> from a Var";


  constructor() {     
  }

  ngOnInit(): void {
  }


  // **********************************************************
  //  Event to Start when you click on the VAR {{myFirstComp}}
  // **********************************************************  
  myFirstCompEvent(pEvent: any): void {
    alert("Display the myFirstCompEvent() Details "+ pEvent)
    console.log(pEvent);
  }

}
