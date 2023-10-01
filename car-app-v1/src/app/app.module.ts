import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponentComponent } from './Components/car-list-component/car-list-component.component';
import { CarDetailsComponentComponent } from './Components/car-details-component/car-details-component.component';
import { CarFormComponentComponent } from './Components/car-form-component/car-form-component.component';
import { CarSearchComponentComponent } from './Components/car-search-component/car-search-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CarListComponentComponent,
    CarDetailsComponentComponent,
    CarFormComponentComponent,
    CarSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
