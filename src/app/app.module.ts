import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    HomepageComponent,
    ManagerProductComponent,
    ProductComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
