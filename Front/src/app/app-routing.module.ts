import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { TestAngularMaterialComponent } from './Components/test-angular-material/test-angular-material.component';

const routes: Routes = [
  {path:'Admin',component:AdminLayoutComponent,children:[
    {path: 'Products', loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule)},
    {path: 'Categories', loadChildren: () => import('./Modules/categories/categories.module').then(m => m.CategoriesModule)},

  ]},
  {path:'',component:MainLayoutComponent,children:[
     {path:'Home',component:HomeComponent},
     {path: 'Orders', loadChildren: () => import('./Modules/orders/orders.module').then(m => m.OrdersModule)},
     {path:'',redirectTo:'/Home',pathMatch:'full'},

    // {path:'Login',component:LoginComponent},
    // {path:'Register',component:RegisterComponent},
  ]},
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
