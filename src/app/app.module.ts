import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { TravelPlansComponent } from './travel-plans/travel-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    TravelPlansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
