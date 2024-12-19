import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import {  UserLoginComponent } from './Components/user-login/user-login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { TestAngularMaterialComponent } from './Components/test-angular-material/test-angular-material.component';
import { authGuard } from './Guards/auth.guard';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './Guards/admin.guard';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';

const routes: Routes = [
  {path:'Admin',canActivate:[adminGuard],component:AdminLayoutComponent,children:[
    {path: 'Products', loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule)},
    {path: 'Categories', loadChildren: () => import('./Modules/categories/categories.module').then(m => m.CategoriesModule)},
    {path: '',component:AdminDashboardComponent,pathMatch:'full'}

  ]},
  {path:'',component:MainLayoutComponent,children:[
     {path:'Home',component:HomeComponent},
     {path: 'Orders',canActivate:[authGuard], loadChildren: () => import('./Modules/orders/orders.module').then(m => m.OrdersModule)},
     {path:'',redirectTo:'/Home',pathMatch:'full'},

    {path:'UserLogin',component:UserLoginComponent},
    {path:'AdminLogin',component:AdminLoginComponent},

    {path:'Register',component:RegisterComponent},
  ]},
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
