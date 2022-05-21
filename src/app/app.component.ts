import { Component } from '@angular/core';
import { IProduct } from './components/models/Products';
import data from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ProductList: IProduct[]= data
  onHandleAdd(product: any) {
    console.log(product);
    this.ProductList.push(product);
  }
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
