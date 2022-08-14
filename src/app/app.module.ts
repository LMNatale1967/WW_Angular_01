import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *******************************************
//  import AppComponent From the Defined Path
// *******************************************
import { AppComponent } from './app.component';

// *********************************************
//  import MyCmpComponent From the Defined Path
// *********************************************
import { MyCmpComponent } from './my-cmp/my-cmp.component';

// ***************************************************
//  import MyFirstCompComponent From the Defined Path
// ***************************************************
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';

// ****************************************************
//  import MySecondCompComponent From the Defined Path
// ****************************************************
import { MySecondCompComponent } from './my-second-comp/my-second-comp.component';

// ****************************************************
//  import MyThirdCompComponent From the Defined Path
// ****************************************************
import { MyThirdCompComponent } from './my-third-comp/my-third-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCmpComponent,         // Added Component
    MyFirstCompComponent,   // Added Component
    MySecondCompComponent,  // Added Component
    MyThirdCompComponent    // Added Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  // ********************************************************************
  //  AppComponent is the bootstrap - The Entry Point in the Application
  // ********************************************************************
  bootstrap: [AppComponent]
})

export class AppModule { }
