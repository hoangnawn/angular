import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './hello/hello.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:'hello', component:HelloComponent},
  {path:'product', component:ProductsComponent},
  {path: 'product/:id', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
