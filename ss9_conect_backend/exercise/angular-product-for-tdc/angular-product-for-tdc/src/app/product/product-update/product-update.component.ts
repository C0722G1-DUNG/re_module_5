import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {ProductService} from "../../../service/product.service";
import {Category} from "../../../model/category";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id:number = 0 ;
  categoryList :Category[] = [];
 productForm:FormGroup = new FormGroup({
      id : new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new  FormControl()
    }
  );
  constructor(private categoryService:CategoryService,private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id  = parseInt(<string>paramMap.get('id'));
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.categoryList = this.categoryService.getAllListCategory().subscribe(data=>{this.categoryList=data}
      ,error => {},()=>{});
  }
  getProduct(id:number){
    return this.productService.findById(id).subscribe(
      data=>{
        //đưa dữ liệu qua cho form update , có thể dùng setValue
        this.productForm.patchValue(data);
      },error => {}
      ,()=>{}
    );

  }

  updateProduct(id: number)  {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(data=>{
      this.router.navigateByUrl('product/list');
      alert('Cập nhật thành công');
    },error => {},()=>{});

  }

  compareWith(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
