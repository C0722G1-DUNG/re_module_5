import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
@Input()
proudct:Product={};
  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
  }
  deleteProduct(){
     this.productService.deleteById(this.proudct.id);
    console.log(this.proudct.id);
    document.getElementById('exampleModal')?.click();
  }
}
