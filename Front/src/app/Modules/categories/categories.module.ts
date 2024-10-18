import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from '../../Components/all-categories/all-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from '../../Components/category-details/category-details.component';
import { ProductsListComponent } from '../../Components/products-list/products-list.component';
import { AddOrUpdateCategoryComponent } from '../../Components/add-or-update-category/add-or-update-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmDeleteCategoryDialogComponent } from '../../Components/confirm-delete-category-dialog/confirm-delete-category-dialog.component';

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
     ProductsListComponent,
     ConfirmDeleteCategoryDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
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
export class CategoriesModule { }
