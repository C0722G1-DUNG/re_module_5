import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/Blog";
@Injectable({
  providedIn: "root"
})
export class BlogService {
    private readonly API_URL="http://localhost:8080/api-blog";
    constructor(private _httpClient:HttpClient) {
    }
    getAllBlogList():Observable<Blog[]>{
      return  this._httpClient.get<Blog[]>(this.API_URL);
    }
  }
