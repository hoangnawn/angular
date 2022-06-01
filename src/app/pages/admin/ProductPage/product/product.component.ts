import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/components/models/Products';
import { ProductService } from '../../../../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products! : IProduct[];
  productDetail! : IProduct;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList()
  }
  getProductList(){
    this.productService.getProductList().subscribe(data=>{
      this.products = data
    })
  }
  remove(id:any){
    console.log(1230);
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != id)
    });
    
  }
}
