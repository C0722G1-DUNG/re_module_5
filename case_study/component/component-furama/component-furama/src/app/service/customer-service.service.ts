import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../../model/customer/customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 private API_URL  ="http://localhost:3000/customer";
  constructor(private _httpClient:HttpClient) { }

  getAllCustomer():Observable<Customer[]> {
    return this._httpClient.get<Customer[]>(this.API_URL) ;
  }

  deleteById(id: number | undefined):Observable<Customer> {
    return this._httpClient.delete<Customer>(this.API_URL+"/"+id)
  }

  save(customer: any) {
    return this._httpClient.post(this.API_URL,customer);
  }
}
