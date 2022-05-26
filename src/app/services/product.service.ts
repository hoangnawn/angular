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
  removeProduct(id:number): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product:any): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`http://localhost:3000/products`, product)

  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }
}
