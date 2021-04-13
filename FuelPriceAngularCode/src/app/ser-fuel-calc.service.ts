
import { Injectable } from '@angular/core';
import { ClFuelRate } from './cl-fuel-rate';
import { ClFuelCity } from './cl-fuel-city';
import { Clfuelinfo } from './clfuelinfo';
import { ClFinalPrice } from './cl-final-price';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerFuelCalcService {

  constructor(private ao : HttpClient) { }

 


  ajaxGetFuelRate(objfuelcity:ClFuelCity):Observable<ClFuelRate>{
    let url:string ="http://localhost:8081/sselect?city="+objfuelcity.city;
    return this.ao.get<ClFuelRate>(url);
   }


   ajaxFuelPrice(objfuelinfo:Clfuelinfo):Observable<ClFinalPrice>
  {
    let url:string ="http://localhost:8888/Calprice";
    return this.ao.post<ClFinalPrice>(url,objfuelinfo);
  }
}
