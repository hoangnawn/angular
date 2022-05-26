import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/Products';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }

  constructor(
    private productServive: ProductService,
    private router: Router,
    private acctivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //lấy id trên url
    const id = this.acctivatedRoute.snapshot.paramMap.get('id')
    // nếu có id thì call service get product để lấy thông tin trả về form
    this.productServive.getProduct(id).subscribe(data => this.product = data);

  }
  onSubmit() {
    const id = this.acctivatedRoute.snapshot.paramMap.get('id');
    if(id){
      // call service edit product
      //nếu thành công thì trả về sp vừa cập nhật
      this.productServive.addProduct(this.product).subscribe(data => {
        // chuyển hướng router 
        this.router.navigateByUrl('/product')
      })
    }
  }

}
