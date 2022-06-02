import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/components/models/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {

  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private acctivedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // lấy id
    const id = this.acctivedRouter.snapshot.paramMap.get('id')
    // nếu có id thì call service get product để lấy thông tin về form
    this.productService.getProduct(id).subscribe(data => this.product = data)
  }
  onSubmit(){
    const id = this.acctivedRouter.snapshot.paramMap.get('id');
    if (id) {
      // call service edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong 
      this.productService.updateProduct(this.product).subscribe(data => console.log(data))
    }else{
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/product');
      })
    }
  }

}
