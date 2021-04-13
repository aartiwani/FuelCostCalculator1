import { Component } from '@angular/core';
import { ClFuelRate } from './cl-fuel-rate';
import { ClFuelCity } from './cl-fuel-city';
import { Clfuelinfo } from './clfuelinfo';
import { ClFinalPrice } from './cl-final-price';
import { SerFuelCalcService } from './ser-fuel-calc.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Fuel Price Calculator';
   fuellid:any;
   city:any;
   interval:number;
   seconds:number;
   objFuelRate:ClFuelRate;
   objFuelCity:ClFuelCity;
   objFuelInfo:Clfuelinfo;
   fueltime:any;
   fuelcost:any;
   rate:any;

   constructor(private fc:SerFuelCalcService) { 
    this.objFuelRate=new ClFuelRate();
    this.objFuelCity=new ClFuelCity();
    this.objFuelInfo=new Clfuelinfo();
  }

Start()
{
  this.seconds=0;
  this.interval = setInterval(() => {
    this.seconds++;
  },100);
  this.objFuelCity.city=this.city;
  this.fc.ajaxGetFuelRate(this.objFuelCity).subscribe(
    (data:ClFuelRate)=>
    {   
      this.rate=data.rate;
    },
    (error)=>
    {
    this.title="Error in contacting server"+JSON.stringify(error);
    },
    ()=>{
     console.log('completed');   
    });           
}
stop()
{
   this.pauseTimer();
   this.objFuelInfo.seconds=this.seconds;
   this.objFuelInfo.fuellid="false";
   this.objFuelInfo.city=this.city;
   this.objFuelInfo.rate=this.rate;
  
   this.objFuelInfo.seconds=this.seconds;
   this.fc.ajaxFuelPrice(this.objFuelInfo).subscribe(
    (data:ClFinalPrice)=>
    {      
      //this.title=data.price;   
      this.fuelcost=String(data.totalprice);
    },
    (error)=>
    {
    this.title="Error in contacting server"+JSON.stringify(error);
    },
    ()=>{
     console.log('completed');   
    });    
}
pauseTimer() {
  clearInterval(this.interval);
  } 
}
