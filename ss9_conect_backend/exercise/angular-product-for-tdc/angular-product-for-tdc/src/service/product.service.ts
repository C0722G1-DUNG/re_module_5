import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private API_URL = "http://localhost:3000/product";

  constructor(private _httpClient:HttpClient) {

  }
  getAllProductList():Observable<Product[]> {
  return   this._httpClient.get<Product[]>(this.API_URL);
  }

  deleteById(id: number | undefined ) :Observable<Product> {
    return this._httpClient.delete<Product>(this.API_URL+"/"+id);
  }


  findById(id: number):Observable<Product> {
    return this._httpClient.get<Product>(this.API_URL+"/"+ id);

  }

  updateProduct(id: number, product: any) {
    return this._httpClient.put(this.API_URL+"/"+id,product);
  }
  saveProduct(product: any) {
    return  this._httpClient.post(this.API_URL,product);
  }

  searchByName(searchName:string,searchCategory:string):Observable<Product[]>  {
    return this._httpClient.get<Product[]>(this.API_URL+'?name_like='+searchName+'&category.name_like='+searchCategory);
  }
}
