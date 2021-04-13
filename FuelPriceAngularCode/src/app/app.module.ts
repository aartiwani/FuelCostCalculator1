import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/Forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SerFuelCalcService } from './ser-fuel-calc.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [SerFuelCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
