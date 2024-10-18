import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Models/icategory';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteCategoryDialogComponent } from '../confirm-delete-category-dialog/confirm-delete-category-dialog.component';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css'
})
export class AllCategoriesComponent implements OnInit {
  categoryList:ICategory[]=[]
constructor(private categoryService: CategoryService,private router:Router,public dialog: MatDialog){}

goToCategoryDetails(categoryId:number){
this.router.navigateByUrl(`/Admin/Categories/AllCategories/${categoryId}`)
}

goToCategoryAddOrEditCategory(categoryId:number){
  this.router.navigateByUrl(`/Admin/Categories/AddAndUpdateCategory/${categoryId}`)
}


openDialog(enterAnimationDuration: string, exitAnimationDuration: string, categoryId: number): void {
  this.dialog.open(ConfirmDeleteCategoryDialogComponent, {
    data: { categoryId: categoryId },
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration

  })


}

  ngOnInit(): void {
this.categoryService.getAllCategories().subscribe({
  next : (res)=>{
    this.categoryList=res
  },
  error: (err)=>{
    console.log(err)
  }
}
)
  }

}
