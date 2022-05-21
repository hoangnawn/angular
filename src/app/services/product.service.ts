import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../components/models/Products';
import data from '../data'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient
  ) { }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  removeProduct() {

  }
  addProduct() {

  }
  updateProduct() {

  }
}
