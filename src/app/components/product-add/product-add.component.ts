import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'src/app/data';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../models/Products';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

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
    if (id) {
      // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.productServive.updateProduct(this.product).subscribe(data => console.log(data))
    } else {
      // call service add product
      this.productServive.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/product');
      })
    }
  }
  

}
