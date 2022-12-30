import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private API_URL ="";
  constructor(private _httpClient:HttpClient) { }
  getAll(): Observable<Todo[]> {
    return this._httpClient.get<Todo[]>(this.API_URL);
  }

  saveTodo(todo: any) {
    return this._httpClient.post(this.API_URL, todo);
  }

  deleteId(id: number) {
    return this._httpClient.delete(this.API_URL + "/" + id);
  }
}
