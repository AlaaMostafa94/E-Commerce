import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from '../../Components/all-categories/all-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from '../../Components/category-details/category-details.component';
import { ProductsListComponent } from '../../Components/products-list/products-list.component';
import { AddOrUpdateCategoryComponent } from '../../Components/add-or-update-category/add-or-update-category.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {path:'AllCategories',component:AllCategoriesComponent},
  {path: 'AllCategories/:categoryId',component:CategoryDetailsComponent},
  {path:'AddAndUpdateCategory/:categoryId',component:AddOrUpdateCategoryComponent},
  // {path:'EditProduct/:prdId',component:EditProductComponent},
   {path:'',redirectTo:'/Admin/Categories/AllCategories',pathMatch:'full'}
]

@NgModule({
  declarations: [
     AllCategoriesComponent,
     CategoryDetailsComponent,
     AddOrUpdateCategoryComponent,
     ProductsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ]
})
export class CategoriesModule { }
