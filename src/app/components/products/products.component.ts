import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titleComponent: string = "List Product"
  isStatus = false;

  productName: string = "";

  listProduct: IProduct[]=[
    {id:1,name:"Product 1",price:123456, status:false},
    {id:2,name:"Product 2",price:123456, status:true}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick() {
    console.log(1);
    this.isStatus = !this.isStatus
  }
  onHandleDelete(id: number) {
    console.log(id);
    
    this.listProduct = this.listProduct.filter(product => product.id !== id)
  }

}
