import { Component } from '@angular/core';
import { IProduct } from './components/models/Products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ProductList: IProduct[]=[
    {id:1,name:"Product 1",price:123456, status:false},
    {id:2,name:"Product 2",price:123456, status:true},
    {id:3,name:"Product 3",price:123334456, status:true}

  ]

}
// onHandleClick() {
//   console.log(1);
//   this.isStatus = !this.isStatus
// }
// onHandleDelete(id: number) {
//   console.log(id);
  
//   this.listProduct = this.listProduct.filter(product => product.id !== id)
// }
// onhandleDetail(product:IProduct){
//   this.productDetail = product
// }
