import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ProductComponent } from './pages/admin/ProductPage/product/product.component';
import { ProductaddComponent } from './pages/admin/ProductPage/productadd/productadd.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  {
    path: "admin", component: DasboardComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'product/add', component: ProductaddComponent }


    ]
  },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: "product/add", component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
