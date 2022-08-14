import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *******************************************
//  import AppComponent From the Defined Path
// *******************************************
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
