import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from '../../Components/create-order/create-order.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListByCategoryComponent } from '../../Components/products-list-by-category/products-list-by-category.component';
import { FormsModule } from '@angular/forms';
import { OrderItemsComponent } from '../../Components/order-items/order-items.component';
import { TestAngularMaterialComponent } from '../../Components/test-angular-material/test-angular-material.component';

const routes: Routes=[
  {path:'CreateOrder',component:CreateOrderComponent},
  

]

@NgModule({
  declarations: [
    CreateOrderComponent,
    ProductsListByCategoryComponent,
    OrderItemsComponent,
    TestAngularMaterialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class OrdersModule { }
