import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products! : IProduct[];
  productDetail! : IProduct;

  titleComponent: string = "List Product"
  // isStatus = false;
  productName: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }
  // onHandleClick() {
  //   console.log(1);
  //   this.isStatus = !this.isStatus
  // }
  onHandleDelete(id: number) {
    console.log(id);
    
    this.products = this.products .filter(product => product.id !== id)
  }
  onhandleDetail(product:IProduct){
    this.productDetail = product
  }

}
