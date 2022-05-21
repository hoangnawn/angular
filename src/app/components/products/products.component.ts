import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/Products';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : IProduct[];
  productDetail! : IProduct;

  constructor(private productService: ProductService) { }
  titleComponent: string = "List Product"
  // isStatus = false;
  productName: string = "";


  ngOnInit(): void {
    this.getProductList()
  }
  getProductList(){
    this.productService.getProductList().subscribe(data=>{
      this.products = data
    })
  }

  // onHandleClick() {
  //   console.log(1);
  //   this.isStatus = !this.isStatus
  // }
  // onHandleDelete(id: number) {
  //   console.log(id);
    
  //   this.products = this.products .filter(product => product.id !== id)
  // }
  // onhandleDetail(product:IProduct){
  //   this.productDetail = product
  // }

}
