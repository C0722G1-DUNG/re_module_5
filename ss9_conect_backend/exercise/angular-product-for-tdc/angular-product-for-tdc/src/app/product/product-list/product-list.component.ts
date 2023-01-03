import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  product: Product = {};
  categoryList: Category[] = [];
  searchName: string ="";
  searchCategory: string = "";
  page: number = 1;






  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.categoryService.getAllListCategory().subscribe(data => {
      this.categoryList = data
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {


    this.productService.getAllProductList().subscribe(
      data => {
        this.products = data;
      }, error => {
      }, () => {
      }
    );

  }

  deleteProduct() {
    this.productService.deleteById(this.product.id).subscribe(data => {

        console.log(this.product.id);
        // @ts-ignore
        alert("xoa thanh cong");
        this.ngOnInit();
      }
      , error => {

      }
      , () => {

      }
    );

  }

  search() {
    return this.productService.searchByName(this.searchName,this.searchCategory).subscribe(data=>{

      if (data.length !==0){
        // @ts-ignore
        this.products=data;
      }
      else {
        this.products=[]
      }

    },error => {

    },()=>{});
  }

  return() {
    this.searchName="";
    this.searchCategory="";
  }
}
