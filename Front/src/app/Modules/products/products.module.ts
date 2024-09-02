import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../../Components/products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from '../../Components/product-details/product-details.component';
import { AddProductComponent } from '../../Components/add-product/add-product.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from '../../Components/edit-product/edit-product.component';
import { authGuard } from '../../Guards/auth.guard';
import { TestAngularMaterialComponent } from '../../Components/test-angular-material/test-angular-material.component';


const routes: Routes=[
  {path:'ProductList',component:ProductsListComponent},
  {path: 'ProductList/:prodId',component:ProductDetailsComponent},
  {path:'AddNewProduct',component:AddProductComponent},
  {path:'EditProduct/:prdId',component:EditProductComponent},
   {path:'',component:TestAngularMaterialComponent,pathMatch:'full'}
]
@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
