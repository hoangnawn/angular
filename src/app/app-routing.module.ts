import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './hello/hello.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:'', component: HomepageComponent, pathMatch: 'full'},
  {path:'product', component:ProductsComponent},
  { path: "product/add", component: ProductAddComponent },
  {path: 'product/:id', component:ProductDetailComponent},
  { path: "product/edit/:id", component: ProductAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
