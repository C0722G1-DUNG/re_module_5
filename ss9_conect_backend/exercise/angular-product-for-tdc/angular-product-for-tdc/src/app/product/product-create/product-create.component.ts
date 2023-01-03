import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList:Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new  FormControl("")
  });
  constructor(private productService: ProductService,private categoryService:CategoryService) {
    // @ts-ignore
    this.categoryList = this.categoryService.getAllListCategory().subscribe(data=>{
      this.categoryList= data;
    },error => {},()=>{})
  }
  submit() {
    if (this.productForm.valid){
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe(data=>{
          this.productForm.reset();
          alert("thêm mới thành công");
        },error => {},
        ()=>{}
      );
    }

  }
  ngOnInit(): void {
  }

}
