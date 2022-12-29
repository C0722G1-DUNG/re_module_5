import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productFormUpdate: FormGroup = new FormGroup({});
  id: number = 0;


  constructor(private productService: ProductService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id  = parseInt(<string>paramMap.get('id'));
      const product = this.getProduct(this.id);
      this.productFormUpdate= new FormGroup({
        id: new FormControl(product?.id),
        name: new FormControl(product?.name),
        price: new FormControl(product?.price),
        description: new FormControl(product?.description),
      });

    });
  }



  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }
  updateProduct(id: number)  {
    const product = this.productFormUpdate.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }
}
