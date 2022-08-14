import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-comp',
  templateUrl: './my-second-comp.component.html',
  styleUrls: ['./my-second-comp.component.scss']
})

export class MySecondCompComponent implements OnInit {

  // ******************************************
  //  INIT a Var with The value 'mySecondComp'
  // ******************************************
  mySecondComp: string = "mySecondComp  -> from a Var";

  constructor() {     
  }

  ngOnInit(): void {
  }

  // **********************************************************
  // Event to Start when you click on the VAR {{mySecondComp}}
  // **********************************************************  
  mySecondCompEvent(pEvent: any): void {
    alert("Display the mySecondCompEvent() Details "+ pEvent)
    console.log(pEvent);
    this.mySecondComp = "The (click) Event was managed !! - mySecondComp  -> from a Var"
  }

}
