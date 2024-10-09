import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from '../../Components/all-categories/all-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from '../../Components/category-details/category-details.component';
import { ProductsListComponent } from '../../Components/products-list/products-list.component';

const routes: Routes=[
  {path:'AllCategories',component:AllCategoriesComponent},
  {path: 'AllCategories/:categoryId',component:CategoryDetailsComponent},
  // {path:'AddNewProduct',component:AddProductComponent},
  // {path:'EditProduct/:prdId',component:EditProductComponent},
   {path:'',redirectTo:'/Admin/Categories/AllCategories',pathMatch:'full'}
]

@NgModule({
  declarations: [
     AllCategoriesComponent,
     CategoryDetailsComponent,
     ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class CategoriesModule { }
