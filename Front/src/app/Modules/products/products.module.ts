import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from '../../Components/all-products/all-products.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from '../../Components/product-details/product-details.component';
import { AddProductComponent } from '../../Components/add-product/add-product.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from '../../Components/edit-product/edit-product.component';
import { authGuard } from '../../Guards/auth.guard';
import { TestAngularMaterialComponent } from '../../Components/test-angular-material/test-angular-material.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmDeleteProductDialogComponent } from '../../Components/confirm-delete-product-dialog/confirm-delete-product-dialog.component';


const routes: Routes=[
  {path:'AllProducts',component:AllProductsComponent},
  {path: 'AllProducts/:prodId',component:ProductDetailsComponent},
  {path:'AddNewProduct',component:AddProductComponent},
  {path:'EditProduct/:prdId',component:EditProductComponent},
   {path:'',redirectTo:'/Admin/Products/AllProducts',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    ConfirmDeleteProductDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogContent
  ],
  providers: [
    provideAnimationsAsync(),
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ]
})
export class ProductsModule { }
