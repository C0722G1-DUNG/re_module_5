import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CustomerType} from "../../../model/customer/customer-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {
private API_URL ="http://localhost:3000/customerType";
  constructor(private _httpClient:HttpClient) { }

  getAllCustomerType():Observable<CustomerType[]> {
    return this._httpClient.get<CustomerType[]>(this.API_URL);
  }
}
