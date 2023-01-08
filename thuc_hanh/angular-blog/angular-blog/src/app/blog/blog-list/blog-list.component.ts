import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../service/BlogService";
import {Subscription} from "rxjs";
import {Blog} from "../../model/Blog";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogList:Blog[]=[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    // @ts-ignore
    this.blogList = this.blogService.getAllBlogList().subscribe(data=>{
      this.blogList=data;
    },error => {
      console.log(error)},()=>{})
  }

}
